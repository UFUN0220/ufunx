import React from 'react'
import '~/css/homefont.css'

const Bridge: React.FC = () => {
  return (
    <div className="mx-4 mb-32 flex flex-col items-center gap-5 text-center sm:mx-16">
      <img src="/static/images/hello.png" alt="Hello" className="mx-auto w-1/2 md:w-2/5 lg:w-1/4" />
      <h2 className="text-clamp mt-10 text-nowrap text-center font-serif text-3xl font-bold leading-tight text-gray-100 md:text-4xl lg:text-5xl">
        {/* 优秀的网站赚取流量，
                <br />
                伟大的网站赢得人心。 
                ,
                 */}
        I'm YouFang,
        <br />I write prose and poetry.
      </h2>
    </div>
  )
}

export default Bridge
