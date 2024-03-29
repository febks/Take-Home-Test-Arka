import React, { Fragment } from 'react'

const Number1 = () => {
  const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <Fragment>
      <div className="absolute bg-[#FFFF9B] w-full h-full font-[Handlee] text-stone-950 font-[700] text-lg">
        <div className="absolute left-[45%] flex flex-col gap-20 top-[35%]">
          <div style={{
            display: 'grid',
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            transform: "rotateY(0deg) rotate(46deg)"
          }}>
            {arrayNumber.map((item, index) => (
              <div key={index} className="h-20 w-20" style={{
                background: `${item % 2 > 0 ? '#0AA30A' : '#72BE21'}`,
                color: 'transparent',
              }}>
                {item}
              </div>
            ))}
          </div>
          <div className='flex flex-col text-center'>
            <div>.: Selamat Hari Raya Idul Fitri :.</div>
            <div>Mohon maaf lahir dan batin ♥︎</div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Number1
