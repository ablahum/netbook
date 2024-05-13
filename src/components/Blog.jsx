const Blog = ({ blogs }) => (
  <div className='py-16'>
    <div className='container mx-auto grid grid-cols-1 grid-rows-[auto_auto] gap-8'>
      <div className='grid grid-cols-1 grid-rows-2 justify-items-center text-center items-center gap-4'>
        <p className='text-primary text-lg capitalize font-medium'>read our blogs</p>

        <h2 className='capitalize font-bold text-4xl'>latest news</h2>
      </div>

      <div className='grid sm:grid-cols-3 sm:grid-rows-1 grid-cols-1 grid-rows-3 gap-8'>
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className='grid grid-cols-1 grid-rows-[auto_auto_auto] gap-4 sm:mx-0 mx-12'
          >
            {/* <div className='mx-4'> */}
            <img
              src={blog.image}
              alt={blog.image}
              className='rounded-xl shadow-lg w-full'
            />
            {/* </div> */}

            <div className='grid grid-cols-[30px_auto] grid-rows-1 gap-4'>
              <div className='border-t-2 border-t-orange-400 self-center w-full'></div>

              <h3 className='font-semibold'>{blog.title}</h3>
            </div>

            <button className='grid grid-cols-[auto_auto] grid-rows-1 gap-4 sm:justify-center items-center capitalize justify-start'>
              continue reading
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
        ))}
      </div>
    </div>
  </div>
)

export default Blog
