const Team = ({ members }) => (
  <div className='py-20 sm:py-24 md:py-32 sm:mx-0 mx-4'>
    <div className='container mx-auto h-full'>
      <div className='mx-auto text-center flex flex-col items-center justify-center mt-8 md:mt-0 mb-8'>
        <div className='mb-4'>
          <p className='text-primary text-lg capitalize font-medium'>valuable team</p>
        </div>

        <div className='mb-6'>
          <h2 className='capitalize font-bold text-4xl'>our active members</h2>

          <p className='text-muted text-lg mt-4'>
            <span className='capitalize'>when </span>an unknown printer took a galley of type and meeting fari scrambled it.
          </p>
        </div>

        <div className='md:w-1/2 w-full grid grid-cols-3 grid-rows-1 p-2 bg-gray-100 rounded-2xl mx-auto font-medium'>
          <button className='capitalize p-4'>newest</button>
          <button className='capitalize p-4'>popular</button>
          <button className='capitalize p-4 bg-primary rounded-2xl text-white'>active</button>
        </div>
      </div>

      <div className='grid grid-cols-4 grid-rows-1 gap-4'>
        {members.map((member) => (
          <div
            key={member.name}
            className='grid grid-cols-1 grid-rows-3 gap-4 text-center shadow-lg p-6 rounded-xl'
          >
            <div>
              <img
                src={member.icon}
                alt='active member'
                className='w-full'
              />
            </div>

            <h3 className='text-2xl font-semibold'>{member.name}</h3>

            <p>{member.socmed}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Team
