import React, { useRef } from 'react'
import TextAnimation from './text-animation'

function index() {
  const containerRef = useRef<HTMLDivElement>(null)
  return (
    <div>
      {/* <div ref={containerRef} className="py-20 text-center"> */}
      {/* <TextAnimation
        text="hello world, hope all doing great"
        // containerRef={containerRef}
      /> */}
      {/* </div> */}
      <div className="h-[550px] grid place-content-center">
        <h1 className="text-5xl font-semibold">Scroll Down👇</h1>
      </div>

      <div className="py-20 text-center  ">
        <TextAnimation
          text="hello world, hope all doing great "
          variants={{
            hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: { ease: 'linear' },
            },
          }}
          classname="text-4xl font-semibold capitalize "
        />
        <TextAnimation
          as="p"
          letterAnime={true}
          text="do you know we're really open for work but now a days people really don't like what is it"
          classname="text-xl w-3/5 mx-auto lowercase leading-5"
          variants={{
            hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
            visible: {
              filter: 'blur(0px)',
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.2,
              },
            },
          }}
        />
      </div>

      <div className="py-20  ">
        <TextAnimation
          text="Heading Animation"
          direction="left"
          lineAnime={true}
          classname="text-4xl font-semibold capitalize "
        />
      </div>
      <div className="py-32  text-right">
        <TextAnimation
          text="Heading Animation"
          direction="right"
          lineAnime={true}
          classname="text-4xl font-semibold capitalize "
        />
      </div>
    </div>
  )
}

export default index
