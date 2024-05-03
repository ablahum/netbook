const Features = ({ communities }) => (
  <div className='py-20 sm:py-24 md:py-32 sm:mx-0 mx-4'>
    <div className='container mx-auto h-full'>
      <div className='mx-auto text-center flex flex-col items-center justify-center mt-8 md:mt-0 mb-8'>
        <div className='mb-4'>
          <p className='text-primary text-lg capitalize font-medium'>our community</p>
        </div>

        <div>
          <h2 className='capitalize font-bold text-4xl'>community main feature</h2>

          <p className='text-muted text-lg mt-4'>
            <span className='capitalize'>the </span>wise man therefore always holds in these matters to this principle of selection.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-2 grid-rows-3 gap-4'>
        {communities.map((community) => (
          <div
            key={community.title}
            className='shadow-lg rounded-xl p-6 grid grid-cols-2 grid-rows-1 gap-4'
          >
            <div className=''>
              <img
                src={community.icon}
                alt={community.icon}
              />
            </div>

            <div className=''>
              <p className='font-semibold text-2xl mb-4'>{community.title}</p>

              <p className='text-muted'>{community.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Features
