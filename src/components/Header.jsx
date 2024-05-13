import logo from '../assets/logo.png'

const Header = () => (
  <div className='p-2 sticky top-0 bg-white z-10 shadow-lg'>
    <div className='container mx-auto grid sm:grid-cols-[auto_auto_auto_auto] grid-cols-[auto_auto] grid-rows-1 sm:gap-4 gap-2'>
      <div className='hidden sm:grid grid-cols-[auto_auto] grid-rows-1 gap-4 items-center justify-start'>
        <img
          src={logo}
          alt='logo'
        />

        <p className='font-bold text-2xl capitalize'>netbook</p>
      </div>

      <ul className='sm:col-span-2 grid grid-cols-[auto_auto_auto_auto] grid-rows-1 sm:gap-4 gap-2 justify-center items-center text-muted'>
        <li className='capitalize font-bold'>home</li>
        <li className='capitalize'>community</li>
        <li className='capitalize'>blog</li>
        <li className='capitalize'>events</li>
      </ul>

      <div className='grid grid-cols-[auto_auto] grid-rows-1 sm:gap-4 items-center'>
        <form className='max-[425px]:hidden'>
          <div className='relative'>
            <div className='absolute inset-y-0 start-0 self-center ps-3 pointer-events-none'>
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
            </div>

            <input
              type='search'
              id='default-search'
              className='w-full p-2 ps-9 text-xs border-2 border-transparent border-b-[#E5E5E5] rounded-xl'
              placeholder='Search Here...'
            />
          </div>
        </form>

        <button className='text-white bg-primary font-medium rounded-xl text-xs sm:px-6 px-4 sm:py-3 py-2 drop-shadow-button'>
          <span className='capitalize'>log </span>in
        </button>
      </div>
    </div>
  </div>
)

export default Header
