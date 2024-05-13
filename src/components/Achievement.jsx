import people from '../assets/people.png'
import github from '../assets/github.png'

const Achievement = () => (
  <div className='py-16'>
    <div className='container mx-auto grid md:grid-cols-2 md:grid-rows-[auto_auto_auto] grid-cols-1 grid-rows-[auto_auto] gap-8'>
      <div className='order-1 grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 gap-4 md:row-start-2'>
        <div className='shadow-lg rounded-xl p-6 grid grid-cols-1 grid-rows-[auto_auto_auto_auto] gap-4'>
          <div className='grid grid-cols-[30px_auto] grid-rows-1 gap-2 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7 text-primary'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
              />
            </svg>

            <p className='font-semibold'>4.8 rating</p>
          </div>

          <div className='grid grid-cols-[auto_auto] grid-rows-1 gap-2 items-center'>
            <img
              src={people}
              alt='people'
            />

            <p className='capitalize font-medium text-muted'>
              <span className='text-primary'>+836k </span>members
            </p>
          </div>

          <p className='text-muted'>More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>

          <button className='grid grid-cols-[auto_auto] grid-rows-1 gap-2 items-center capitalize'>
            join our community
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
          </button>
        </div>

        <div className='shadow-lg rounded-xl p-6 grid grid-cols-1 grid-rows-[auto_auto_auto_auto] gap-4'>
          <div className='grid grid-cols-[30px_auto] grid-rows-1 gap-2 items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-7 h-7 text-primary'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0'
              />
            </svg>

            <p className='font-semibold capitalize'>awwwards</p>
          </div>

          <div className='grid grid-cols-[auto_auto] grid-rows-1 gap-2 items-center'>
            <img
              src={github}
              alt='github'
            />

            <p className='capitalize text-muted'>
              best of <span className='text-primary font-medium'>2021 </span>on github
            </p>
          </div>

          <p className='text-muted'>More than 2 billion we people over countries use socibooks we to stay in touch with friends.</p>

          <button className='grid grid-cols-[auto_auto] grid-rows-1 gap-2 items-center capitalize'>
            go to awards
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
          </button>
        </div>
      </div>

      <div className='md:row-span-3 grid grid-cols-1 grid-rows-[auto_auto_auto_auto] gap-4 md:text-start md:justify-items-start justify-items-center text-center items-center'>
        <p className='text-primary text-lg capitalize font-medium'>our achievement</p>

        <h2 className='capitalize font-bold text-4xl'>
          we are connecting <br></br>you the digital life.
        </h2>

        <p className='text-muted text-lg'>
          <span className='capitalize'>recent </span>surveys have indicated that small businesses recognize the need they have to connect with consumer.
        </p>

        <button className='text-white bg-primary drop-shadow-button py-4 px-6 rounded-xl grid grid-cols-[auto_auto] grid-rows-1 items-center md:justify-self-start gap-4 capitalize'>
          discover me
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
        </button>
      </div>
    </div>
  </div>
)

export default Achievement
