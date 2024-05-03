import hero from '../assets/hero.png'

const Hero = () => (
  <div className='h-[50vh] bg-gradient-to-tl from-[#d4e7fe] to-white'>
    <div className='container mx-auto h-full grid grid-cols-2 grid-rows-[auto_auto_auto] gap-8'>
      <div className='grid grid-cols-1 grid-rows-[auto_auto_auto_auto] gap-4 row-start-2'>
        <div className='p-4 rounded-xl bg-slate-50 drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] justify-self-start'>
          <p className='text-primary text-xs'>
            <span className='capitalize font-medium'>netbook </span>community
          </p>
        </div>

        <h1 className='capitalize font-bold text-5xl'>
          your solutions for<br></br>
          community
        </h1>

        <p className='text-muted text-lg'>
          <span className='capitalize'>more </span>than 2 billion people in over countries use socibook to stay in touch with friends & family.
        </p>

        <div className='grid grid-cols-2 grid-rows-1 gap-4 justify-self-start'>
          <button className='text-white bg-primary drop-shadow-button py-4 px-6 rounded-xl capitalize'>about more</button>

          <button className='text-primary bg-transparent border border-primary drop-shadow-button py-4 px-6 rounded-xl capitalize'>invite friend</button>
        </div>
      </div>

      <div className='row-span-2 row-start-2'>
        <img
          src={hero}
          alt='hero'
        />
      </div>
    </div>
  </div>
)

export default Hero
