

const Heading = ({heading, subheading, bgImg}) => {
  return(
    <div className="heading backdrop-filter backdrop-opacity-60 relative w-screen min-h-48 flex flex-col justify-center items-center overflow-hidden"  style={{backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
  
      <div className="content py-36 px-4 z-30 md:w-4/5">
        <h1 className="text-center text-3xl text-gray-200 font-black"> {heading} </h1>
        <p className="mt-10 text-center text-yellow-400 bg-gray-900 bg-opacity-30 p-4 text-lg"> {subheading} </p>
      </div>
       <style jsx>{` 
        
        .heading {
          background: url(${bgImg});
        } 
      
      `}</style>
    </div>
    )
}

export default Heading 