import hero from '../assets/hero.png'

const Hero = () => (
  <div className='h-[50vh] bg-gradient-to-tl from-[#d4e7fe] to-white sm:px-0 px-4'>
    <div className='container mx-auto h-full flex md:flex-row flex-col items-center justify-center'>
      <div className='md:w-1/2 w-full flex flex-col justify-center md:me-8 me-0'>
        <div className='self-start p-4 rounded-xl bg-slate-50 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
          <p className='text-primary text-xs'>
            <span className='capitalize font-medium'>netbook </span>community
          </p>
        </div>

        <div className='mt-5 mb-8'>
          <h1 className='capitalize font-bold text-5xl'>
            your solutions for<br></br>
            community
          </h1>

          <p className='text-muted text-lg mt-5'>
            <span className='capitalize'>more </span>than 2 billion people in over countries use socibook to stay in touch with friends & family.
          </p>
        </div>

        <div className='flex'>
          <button className='text-white bg-primary drop-shadow-button py-5 px-8 rounded-xl me-4 capitalize w-full sm:w-auto'>about more</button>

          <button className='text-primary bg-transparent border border-primary drop-shadow-button py-5 px-8 rounded-xl capitalize w-full sm:w-auto'>invite friend</button>
        </div>
      </div>

      <div className='md:w-1/2 hidden md:block'>
        <img
          src={hero}
          alt='hero'
          className='w-full'
        />
      </div>
    </div>
  </div>
)

export default Hero
