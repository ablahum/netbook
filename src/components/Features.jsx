const Features = ({ communities }) => (
  <div className='py-16'>
    <div className='container mx-auto grid grid-cols-1 grid-rows-[auto_auto] gap-8'>
      <div className='grid grid-cols-1 grid-rows-[auto_auto_auto] gap-4 items-center justify-items-center text-center'>
        <p className='text-primary text-lg capitalize font-medium'>our community</p>

        <h2 className='capitalize font-bold text-4xl'>community main feature</h2>

        <p className='text-muted text-lg'>
          <span className='capitalize'>the </span>wise man therefore always holds in these matters to this principle of selection.
        </p>
      </div>

      <div className='grid md:grid-cols-2 md:grid-rows-3 grid-cols-1 grid-rows-6 gap-4'>
        {communities.map((community) => (
          <div
            key={community.title}
            className='shadow-lg rounded-xl p-6 grid grid-cols-[30%_auto] grid-rows-1 gap-4 items-center'
          >
            <img
              src={community.icon}
              alt={community.icon}
              className='justify-self-center'
            />

            <div className='grid grid-cols-1 grid-rows-[auto_auto] gap-4'>
              <p className='font-semibold text-2xl'>{community.title}</p>

              <p className='text-muted'>{community.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Features
