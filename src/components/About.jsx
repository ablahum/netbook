import about from '../assets/about.png'
import bullet from '../assets/bullet.svg'

const About = () => (
  <div className='py-20 sm:py-24 md:py-32 sm:mx-0 mx-4'>
    <div className='container mx-auto h-full flex items-center flex-col md:flex-row'>
      <div className='md:w-1/2 w-full flex flex-col justify-center md:me-8 me-0 mb-8 md:mb-0'>
        <div className='self-start mb-4'>
          <p className='text-primary text-lg capitalize font-medium'>whats netbooks?</p>
        </div>

        <div className='mb-6'>
          <h2 className='capitalize font-bold text-4xl'>
            why join <span className='lowercase'>to</span> netbook<br></br>
            social network?
          </h2>

          <p className='text-muted text-lg mt-4'>
            <span className='capitalize'>recent </span>surveys have indicated that small businesses recognize the need they have to connect with consumer.
          </p>
        </div>

        <div>
          <ul>
            <li className='capitalize flex items-center font-semibold'>
              <img
                src={bullet}
                className='me-2'
              />
              groups
            </li>
            <li className='capitalize flex items-center font-semibold'>
              <img
                src={bullet}
                className='me-2 my-2'
              />
              messages
            </li>
            <li className='capitalize flex items-center font-semibold'>
              <img
                src={bullet}
                className='me-2'
              />
              share
            </li>
          </ul>
        </div>
      </div>

      <div className='md:w-1/2 w-full'>
        <img
          src={about}
          alt='about'
          className='w-full'
        />
      </div>
    </div>
  </div>
)

export default About
