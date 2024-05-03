import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'
import bullet from '../assets/bullet.png'

const About = () => (
  <div className='py-24'>
    <div className='container mx-auto grid grid-cols-2 grid-rows-[auto_auto_auto] gap-8'>
      <div className='grid grid-cols-1 grid-rows-[auto_auto_auto_auto] gap-4 row-start-2'>
        <p className='text-primary text-lg capitalize font-medium'>whats netbooks?</p>

        <h2 className='capitalize font-bold text-4xl'>
          why join <span className='lowercase'>to</span> netbook<br></br>
          social network?
        </h2>

        <p className='text-muted text-lg'>
          <span className='capitalize'>recent </span>surveys have indicated that small businesses recognize the need they have to connect with consumer.
        </p>

        <ul>
          <li className='capitalize grid grid-cols-[30px_auto] grid-rows-1 items-center font-semibold'>
            <img
              src={bullet}
              className='me-2'
            />
            groups
          </li>
          <li className='capitalize grid grid-cols-[30px_auto] grid-rows-1 items-center  font-semibold'>
            <img
              src={bullet}
              className='me-2 my-2'
            />
            messages
          </li>
          <li className='capitalize grid grid-cols-[30px_auto] grid-rows-1 items-center  font-semibold'>
            <img
              src={bullet}
              className='me-2'
            />
            share
          </li>
        </ul>
      </div>

      <div className='row-span-3 grid grid-cols-2 grid-rows-2 gap-4'>
        <img
          src={about1}
          alt='about'
          className='rounded-xl row-span-2 self-center'
        />

        <img
          src={about2}
          alt='about'
          className='rounded-xl'
        />

        <img
          src={about3}
          alt='about'
          className='rounded-xl'
        />
      </div>
    </div>
  </div>
)

export default About
