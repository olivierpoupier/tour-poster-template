import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const dates = [
  {
    city: 'Montreal',
    date: '2020-06-01',
    link: ''
  }, {
    city: 'Quebec',
    date: '2020-06-02',
    link: ''
  }
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>THOUXANBAN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* logo */}
        <Image src="/vercel.svg" height={100} width={100} className={styles.logo}/>

        <div className={styles.dates}>
          {
            dates.map(({ city, date, link }) => {
              return (
                <a className={styles.location} key={city} href={link} target="_blank">
                  <span className={styles.city}>{city}</span>
                  <span className={styles.spacer}></span>
                  <span className={styles.date}>{date}</span>
                </a>
              )
            })
          }
        </div>
      </main>
    </div>
  )
}

export default Home
