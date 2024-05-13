const Team = ({ members }) => (
  <div className='py-16'>
    <div className='container mx-auto grid grid-cols-1 grid-rows-[auto_auto] gap-8'>
      <div className='grid grid-cols-1 grid-rows-[auto_auto_auto_auto] justify-items-center text-center gap-4 items-center'>
        <p className='text-primary text-lg capitalize font-medium'>valuable team</p>

        <h2 className='capitalize font-bold text-4xl'>our active members</h2>

        <p className='text-muted text-lg'>
          <span className='capitalize'>when </span>an unknown printer took a galley of type and meeting fari scrambled it.
        </p>

        <div className='sm:w-3/5 w-full grid grid-cols-3 grid-rows-1 p-2 bg-gray-100 rounded-xl font-medium'>
          <button className='capitalize p-4'>newest</button>
          <button className='capitalize p-4'>popular</button>
          <button className='capitalize p-4 bg-primary rounded-xl text-white'>active</button>
        </div>
      </div>

      <div className='grid lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-4 gap-4 justify-between'>
        {members.map((member) => (
          <div
            key={member.name}
            className='grid grid-cols-1 grid-rows-[auto_auto_auto] gap-4 justify-items-center shadow-lg p-6 rounded-xl sm:mx-0 mx-12'
          >
            <img
              src={member.icon}
              alt='active member'
            />

            <h3 className='text-2xl font-semibold'>{member.name}</h3>

            <p>{member.socmed}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Team
