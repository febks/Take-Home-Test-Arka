import React, { Fragment, useState } from 'react';
import { Select } from 'antd';
import { jenjangs } from '../../constant/arrayConstant';
import style from  './Number2.module.css'

const Number2 = () => {
  const [jenjang, setJenjang] = useState(null)
  const [tingkatan, setTingkatan] = useState(null)
  const [listJenjang, setListJenjang] = useState(jenjangs)
  const [listTingkatan, setListTingkatan] = useState([])

  const onChange = (evt, namespace) => {
    let tingkat
    switch (namespace) {
      case "jenjang":
        setJenjang(evt)
        setTingkatan(null)
        tingkat = listJenjang.filter((el) => el.id === evt && setListTingkatan(el.tingkatan))
        return tingkat
      case "tingkatan":
        setTingkatan(evt)
        break
      default:
        break;
    }
  }
  return (
    <Fragment>
      <div className='bg-white h-full w-full flex flex-row p-10 gap-4'>
        <div className='w-max h-full'>
          <Select
            size='large'
            style={{ width: '250px'}}
            placeholder={"Pilih Jenjang"}
            className={style.jenjang}
            value={jenjang}
            onChange={(e) => onChange(e, "jenjang")}
            options={
              listJenjang.map((item) => {
                return {
                  value: item.id,
                  label: item.jenjang,
                };
              })
            }
          />
        </div>
        <div className='w-max h-full'>
          <Select
            size='large'
            style={{ width: '250px'}}
            placeholder={`${!jenjang ? "Pilih Jenjangnya dulu!" : "Pilih tingaktan"}`}
            className={style.tingkatan}
            value={tingkatan}
            onChange={(e) => onChange(e, "tingkatan")}
            options={
              listTingkatan.map((item) => {
                return {
                  value: item.id,
                  label: item.tingkatan,
                };
              })
            }
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Number2
