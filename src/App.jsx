import { About, Header, Hero, Achievement, Features, Team, CTA, Blog, Footer } from './components'
import members from './assets/members.svg'
import groups from './assets/groups.svg'
import forum from './assets/forum.svg'
import module from './assets/module.svg'
import listBuilder from './assets/list-builder.svg'
import listScroll from './assets/list-scroll.svg'
import fahim from './assets/fahim.png'
import kazi from './assets/kazi.png'
import ali from './assets/ali.png'
import karon from './assets/karon.png'
import news1 from './assets/news1.png'
import news2 from './assets/news2.png'
import news3 from './assets/news3.png'

function App() {
  const communityFeature = [
    {
      icon: members,
      title: 'Members, Friends',
      desc: 'Members, Friends Connection (like followers), Private Message',
    },
    {
      icon: groups,
      title: 'Groups',
      desc: 'Your users can create groups to let other users to join and talk',
    },
    {
      icon: forum,
      title: 'Forum',
      desc: 'Forum is ready by BBPress. Your users can make topics and talk.',
    },
    {
      icon: module,
      title: 'Custom Module',
      desc: "You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder.",
    },
    {
      icon: listBuilder,
      title: 'List Builder',
      desc: 'Members, Groups list can be modified by drag & drop live builder.',
    },
    {
      icon: listScroll,
      title: 'List Scroll Effects',
      desc: '8 different scroll effects are ready. You can always change by your tastes.',
    },
  ]

  const activeMembers = [
    {
      icon: fahim,
      name: 'Fahim Rahman',
      socmed: '@rahman',
    },
    {
      icon: kazi,
      name: 'Kazi Rahman',
      socmed: '@Rahman',
    },
    {
      icon: ali,
      name: 'Masterero Ali',
      socmed: '@Master',
    },
    {
      icon: karon,
      name: 'Alia Karon',
      socmed: '@Alia',
    },
  ]

  const latestNews = [
    {
      image: news1,
      title: 'It Does Not Matter Hows Slowly go as Long',
    },
    {
      image: news2,
      title: 'Netbook Network Added New Photo Filter',
    },
    {
      image: news3,
      title: 'We Optimized Netbooks Better Navigation',
    },
  ]

  return (
    <>
      <Header />

      <Hero />

      <About />

      <Achievement />

      <Features communities={communityFeature} />

      <Team members={activeMembers} />

      <CTA />

      <Blog blogs={latestNews} />

      <Footer />
    </>
  )
}

export default App
