import playStore from '../assets/play-store.png'
import appStore from '../assets/app-store.png'
import phone from '../assets/phone.png'

const CTA = () => (
  <div className='py-16'>
    <div className=' bg-[#E5F0FD]'>
      <div className='container mx-auto grid md:grid-cols-[auto_auto] md:grid-rows-[auto_auto_auto] gap-8 pt-12'>
        <div className='grid grid-cols-1 grid-rows-[auto_auto_auto_auto] gap-4 row-start-2 md:text-start md:justify-items-start justify-items-center text-center items-center'>
          <p className='text-primary text-lg capitalize font-medium'>get our application</p>

          <h2 className='capitalize font-bold text-4xl'>
            you can easily find<hr></hr>this app...!
          </h2>

          <p className='text-muted text-lg'>
            <span className='capitalize'>I </span>say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.
          </p>

          <div className='grid grid-cols-2 grid-rows-1 gap-4 md:justify-self-start'>
            <img
              src={appStore}
              alt='play store'
              className='shadow-lg'
            />

            <img
              src={playStore}
              alt='play store'
              className='shadow-lg'
            />
          </div>
        </div>

        <div className='row-span-3'>
          <img
            src={phone}
            alt='phone'
            className='w-full'
          />
        </div>
      </div>
    </div>
  </div>
)

export default CTA
