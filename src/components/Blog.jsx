const Blog = ({ blogs }) => (
  <div className='py-20 sm:py-24 md:py-32 sm:mx-0 mx-4'>
    <div className='container mx-auto h-full'>
      <div className='mx-auto text-center flex flex-col items-center justify-center mt-8 md:mt-0 mb-8'>
        <div className='mb-4'>
          <p className='text-primary text-lg capitalize font-medium'>read our blogs</p>
        </div>

        <div>
          <h2 className='capitalize font-bold text-4xl'>latest news</h2>
        </div>
      </div>

      <div className='grid grid-cols-3 grid-rows-1 gap-4'>
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className='p-6 border-2'
          >
            <img
              src={blog.title}
              alt={blog.title}
            />

            <h3 className='font-semibold'>{blog.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Blog
