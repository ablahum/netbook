import logo from '../assets/logo.png'

const Header = () => (
  <div className='py-2 px-2 sm:px-0 sticky top-0 bg-white z-10 shadow-lg'>
    <div className='container mx-auto flex items-center justify-between'>
      <div className='p-0 sm:p-3 max-[425px]:hidden'>
        <img
          src={logo}
          alt='logo'
          className='w-full h-full'
        />
      </div>

      <div className='sm:grow lg:mx-[72px] mx-4 max-[425px]:mx-0 max-[425px]:me-4'>
        <ul className='flex text-muted text-sm'>
          <li className='me-4 lg:me-8 max-[425px]:me-2 capitalize font-bold'>home</li>
          <li className='me-4 lg:me-8 max-[425px]:me-2 capitalize'>community</li>
          <li className='me-4 lg:me-8 max-[425px]:me-2 capitalize'>blog</li>
          <li className='capitalize'>events</li>
        </ul>
      </div>

      <div className='flex items-center justify-between'>
        <form className='w-24 md:w-32 mx-auto me-4 hidden sm:inline-block'>
          <div className='relative'>
            <div className='hidden md:flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none'>
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
              className='w-full p-2 md:ps-9 text-xs border-2 border-transparent border-b-[#E5E5E5] rounded-lg'
              placeholder='Search Here...'
            />
          </div>
        </form>

        <button className='text-white bg-primary font-medium rounded-xl text-xs px-4 py-2 md:px-6 md:py-3 drop-shadow-button'>
          <span className='capitalize'>log </span>in
        </button>
      </div>
    </div>
  </div>
)

export default Header
