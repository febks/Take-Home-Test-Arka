import React, { Fragment, useState } from 'react';
import { Input, Button, Image, Spin } from 'antd';
import * as MainService from "../../services/MainService";

const Number3 = () => {
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    if (e.target.value === "") {
      setImage(null);
      setLoading(false);
    }
    setInputValue(e.target.value);
  }

  const generateProfilePic = async (search) => {
    const response = await MainService.getImage(search);
    setLoading(true)
    if (response.ok && response.data) {
      setImage(`https://robohash.org/${search}`);
      setLoading(false)
    } else {
      setLoading(true)
    }
  }

  return (
    <Fragment>
      <div className='absolute w-full h-full bg-cyan-100'>
        <div className='p-10 flex flex-col gap-2 items-center'>
          <div className='w-96'>
            <Input
              placeholder='Ketik nama Anda...'
              value={inputValue}
              onChange={(e) => onChange(e)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  generateProfilePic(inputValue);
                }
              }}
            />
          </div>
          <div>
            <Button
              style={{
                backgroundColor: "green",
                color: 'white',
                border: "1px solid white"
              }}
              onClick={() => generateProfilePic(inputValue)}
            >
              Buat Profile Picture!
            </Button>
          </div>
          <div className='mt-10'>
            {loading ? (
              <Spin size="medium" />
            ) : !loading && !image ? null: (
              <Image
                width={200}
                height={200}
                src={image}
                style={{ borderRadius: '50%', backgroundColor: "white", border: "1px solid grey" }}
                preview={false}
              />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Number3
