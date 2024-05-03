import logo from '../assets/logo-sm.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'

const Footer = () => (
  <div className='pt-20 bg-[#2B2B39] text-white'>
    <div className='grid grid-rows-[auto_auto] gap-8'>
      <div className='container mx-auto grid grid-cols-5 grid-rows-1 gap-8'>
        <ul className='grid grid-rows-5 grid-cols-1 gap-4'>
          <li className='capitalize mb-1'>
            <h4 className='font-semibold text-lg'>home</h4>
          </li>
          <li className='capitalize'>
            <p>home</p>
          </li>
          <li className='capitalize'>
            <p>community</p>
          </li>
          <li className='capitalize'>
            <p>event</p>
          </li>
          <li className='capitalize'>
            <p>contact</p>
          </li>
        </ul>

        <ul className='grid grid-rows-5 grid-cols-1 gap-4'>
          <li className='capitalize mb-1'>
            <h4 className='font-semibold text-lg'>resources</h4>
          </li>
          <li className='capitalize'>
            <p>blog</p>
          </li>
          <li className='capitalize'>
            <p>news</p>
          </li>
          <li className='capitalize'>
            <p>guides</p>
          </li>
          <li className='capitalize'>
            <p>help center</p>
          </li>
        </ul>

        <ul className='grid grid-rows-5 grid-cols-1 gap-4'>
          <li className='capitalize mb-1'>
            <h4 className='font-semibold text-lg'>community</h4>
          </li>
          <li className='capitalize'>
            <p>news feed</p>
          </li>
          <li className='capitalize'>
            <p>profile</p>
          </li>
          <li className='capitalize'>
            <p>friends</p>
          </li>
          <li className='capitalize'>
            <p>forums</p>
          </li>
        </ul>

        <ul className='grid grid-rows-5 grid-cols-1 gap-4'>
          <li className='capitalize mb-1'>
            <h4 className='font-semibold text-lg'>main links</h4>
          </li>
          <li className='capitalize'>
            <p>members</p>
          </li>
          <li className='capitalize'>
            <p>activity</p>
          </li>
          <li className='capitalize'>
            <p>groups</p>
          </li>
          <li className='capitalize'>
            <p>private group</p>
          </li>
        </ul>

        <div className='grid grid-rows-[auto_auto_auto] grid-cols-1 gap-4'>
          <h4 className='capitalize'>subscribe circle newsletter</h4>

          <p>Subscribe to be the first one to know about updates. Enter your email</p>

          <form>
            <div className='relative'>
              <input
                type='search'
                id='search'
                className='w-full p-3 text-sm border border-gray-500 rounded-xl bg-transparent'
                placeholder='Email Address'
                required
              />

              <button
                type='submit'
                className='text-black absolute top-0 end-0 bottom-0 bg-white font-medium rounded-xl text-sm px-4 py-2 capitalize'
              >
                subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className='bg-[#20202D] py-4'>
        <div className='container mx-auto grid grid-cols-[auto_auto_auto] grid-rows-1 gap-4 items-center justify-between'>
          <p className='capitalize'>besnik creative agency</p>

          <div className='grid grid-cols-[auto_auto] grid-rows-1 gap-2'>
            <img
              src={logo}
              alt=''
            />

            <h4 className='font-bold text-2xl capitalize'>netbook</h4>
          </div>

          <div className='grid grid-cols-4 grid-rows-1 gap-4 items-center'>
            <div className='bg-white p-2 rounded-full'>
              <img
                src={twitter}
                alt='twitter'
              />
            </div>

            <div className='bg-white p-2 rounded-full'>
              <img
                src={instagram}
                alt='instagram'
              />
            </div>

            <div className='bg-white p-2 rounded-full'>
              <img
                src={facebook}
                alt='facebook'
              />
            </div>

            <div className='bg-white p-2 rounded-full'>
              <img
                src={linkedin}
                alt='linkedin'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
