import energy from '../assets/energy.png'
import investors from '../assets/Investors.png'
import platform from '../assets/platform.png'
export const AtomicInfo = () => {
  return (
    
        <>
        
        <section className=" text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
    <div className="mx-auto w-full text-center  ">
      <h2 className=" text-4xl lg:text-7xl font-bold sm:text-5xl bg-custom-gradient bg-clip-text text-transparent ">What is Atómico3?</h2>

      <p className="mt-10 text-gray-300 w-full mx-auto lg:text-lg">
      Atómico3 is a token that represents the tokenization of mining assets, backed by lithium reserves certified under ni 43-101 standards. This process digitizes lithium reserves, allowing their commercialization on blockchain platforms. <br /> Atómico3 democratizes access to investment in natural resources, offering transparency, security and liquidity. With its innovative approach, Atómico3 facilitates sustainable investment and economic development in lithium-rich regions, positioning it as a high-value digital asset in the global market.
      </p>
    </div>

    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default"
        href="#"
      >
        <img src={energy} alt="" className='w-12'/>
       
        <h2 className="mt-4 text-xl font-bold text-white">Responsible crypto asset</h2>

        <p className="mt-1 text-sm text-gray-300">
        Our token is backed by real lithium, with a value that grows alongside the demand for clean energy.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default"
        href="#"
      >
        <img src={investors} alt="investors" className='w-12' />

        <h2 className="mt-4 text-xl font-bold text-white">Target Market</h2>

        <p className="mt-1 text-sm text-gray-300">
        Global investors with vision. Citizens committed to sustainability.
        </p>
      </a>

      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-celeste hover:shadow-light-blue hover:cursor-default"
        href="#"
      >
        <img src={platform} alt="platforms" className='w-12' />

        <h2 className="mt-4 text-xl font-bold text-white">Platforms</h2>

        <p className="mt-1 text-sm text-gray-300">
        Blockchain, official social networks and passionate communities, holders and technology enthusiasts.
        </p>
      </a>

      {/* <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        

        <h2 className="mt-4 text-xl font-bold text-white">Digital campaigns</h2>

        <p className="mt-1 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci
          distinctio alias voluptatum blanditiis laudantium.
        </p>
      </a> */}

    

     
    </div>

    {/* <div className="mt-12 text-center">
      <a
        href="#"
        className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a>
    </div> */}
  </div>
</section>
        
        </>


  )
}
