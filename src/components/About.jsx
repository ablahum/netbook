import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.png'
import bullet from '../assets/bullet.png'

const About = () => (
  <div className='py-16'>
    <div className='container mx-auto grid md:grid-cols-2 md:grid-rows-[auto_auto_auto] grid-cols-1 grid-rows-[auto_auto] gap-8'>
      <div className='grid grid-cols-1 grid-rows-[auto_auto_auto_auto] gap-4 md:row-start-2 md:text-start md:justify-items-start justify-items-center text-center items-center'>
        <p className='text-primary text-lg capitalize font-medium'>whats netbooks?</p>

        <h2 className='capitalize font-bold text-4xl'>
          why join <span className='lowercase'>to</span> netbook<br></br>
          social network?
        </h2>

        <p className='text-muted text-lg'>
          <span className='capitalize'>recent </span>surveys have indicated that small businesses recognize the need they have to connect with consumer.
        </p>

        <ul className='grid md:grid-cols-1 md:grid-rows-1 grid-cols-3 grid-rows-1 justify-items-center'>
          <li className='capitalize grid grid-cols-[30px_auto] grid-rows-1 items-center font-semibold justify-items-start'>
            <img
              src={bullet}
              className='md:me-2'
            />
            groups
          </li>
          <li className='capitalize grid grid-cols-[30px_auto] grid-rows-1 items-center md:my-2 mx-2 md:mx-0 font-semibold justify-items-start'>
            <img
              src={bullet}
              className='md:me-2'
            />
            messages
          </li>
          <li className='capitalize grid grid-cols-[30px_auto] grid-rows-1 items-center  font-semibold justify-items-start'>
            <img
              src={bullet}
              className='md:me-2'
            />
            share
          </li>
        </ul>
      </div>

      <div className='md:row-span-3 grid sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-[auto_auto_auto] gap-4 sm:mx-0 mx-12'>
        <img
          src={about1}
          alt='about'
          className='rounded-xl row-span-2 self-center w-full'
        />

        <img
          src={about2}
          alt='about'
          className='rounded-xl w-full'
        />

        <img
          src={about3}
          alt='about'
          className='rounded-xl w-full'
        />
      </div>
    </div>
  </div>
)

export default About
