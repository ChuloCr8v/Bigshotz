

const Heading = ({ heading, subheading, bgImg }) => {
  return (
    <div className="heading relative w-screen min-h-48 flex flex-col justify-center items-center overflow-hidden" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <div className="before absolute h-screen w-screen bg-black opacity-50"></div>
      <div className="content py-36 px-4 z-30 md:w-4/5">
        <h1 className="text-center text-3xl text-gray-200 font-black"> {heading} </h1>
        <p className="mt-10 text-center text-yellow-400 bg-gray-900 bg-opacity-30 p-4 text-lg"> {subheading} </p>
      </div>
      <style jsx>{` 
        
        .heading::before {
          background: black;
          position: absolute;
          height: 100%;
          width: 100%;
          z-index: 9999;
          inset: 0;
        } 
      
      `}</style>
    </div>
  )
}

export default Heading