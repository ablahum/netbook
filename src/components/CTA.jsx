import phone from '../assets/phone.png'

const CTA = () => (
  <div className='py-20 sm:py-24 md:py-32 sm:mx-0 mx-4 bg-[#E5F0FD]'>
    <div className='container mx-auto h-full flex items-center'>
      <div className='md:w-1/2 w-full flex flex-col justify-center me-8'>
        <div className='self-start mb-4'>
          <p className='text-primary text-lg capitalize font-medium'>get our application</p>
        </div>

        <div className='mb-6'>
          <h2 className='capitalize font-bold text-4xl'>
            you can easily find<hr></hr>this app...!
          </h2>

          <p className='text-muted text-lg mt-4'>
            <span className='capitalize'>I </span>say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.
          </p>
        </div>

        <div className='flex'>
          <button className='shadow-lg py-4 px-6 bg-white rounded-xl flex items-center me-4'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
              />
            </svg>

            <div className='text-start ms-2'>
              <p className='text-muted text-xs'>Download on the</p>

              <p className='font-medium capitalize'>app store</p>
            </div>
          </button>

          <button className='shadow-lg py-4 px-6 bg-slate-700 text-white rounded-xl flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
              />
            </svg>

            <div className='text-start ms-2'>
              <p className='text-gray-400 text-xs'>Download on the</p>

              <p className='font-medium capitalize'>play store</p>
            </div>
          </button>
        </div>
      </div>

      <div className='md:w-1/2 w-full'>
        <img
          src={phone}
          alt='phone'
          className='w-full'
        />
      </div>
    </div>
  </div>
)

export default CTA
