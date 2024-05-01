import hero from '../assets/hero.png'

const Hero = () => (
  <div className='h-[50vh] bg-gradient-to-tl from-[#d4e7fe] to-white'>
    <div className='container mx-auto h-full flex items-center'>
      <div className='w-1/2 flex flex-col justify-center'>
        <div className='self-start p-4 rounded-xl bg-slate-50 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
          <p className='text-primary text-xs'>
            <span className='capitalize'>netbook </span>community
          </p>
        </div>

        <div className='mt-5 mb-8'>
          <h1 className='capitalize font-bold text-5xl'>
            your solutions for<br></br>
            community
          </h1>

          <p className='text-muted text-lg'>
            <span className='capitalize'>more </span>than 2 billion people in over countries use socibook to stay in touch with friends & family.
          </p>
        </div>

        <div>
          <button className='text-white bg-primary drop-shadow-button py-5 px-8 rounded-xl me-4 capitalize'>about more</button>

          <button className='text-primary bg-transparent border border-primary drop-shadow-button py-5 px-8 rounded-xl capitalize'>invite friend</button>
        </div>
      </div>

      <div className='w-1/2'>
        <img
          src={hero}
          alt='hero'
        />
      </div>
    </div>
  </div>
)

export default Hero
