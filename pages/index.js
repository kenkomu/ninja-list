import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home </title>
        <meta name='keywords' content='ninjas'/>
      </Head>
      <div>
        <h1 className={styles.title}>
          Homepage
        </h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla omnis molestiae expedita iusto dicta nam eum sint magnam reprehenderit, quod earum totam, aliquid non qui vitae odit dignissimos, ea minus.</p>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam facilis, hic excepturi, velit nemo alias architecto animi voluptatum et, ea nobis placeat aliquam fuga quam odio cumque cupiditate dolorum?</p>
        <Link href="/ninjas">
          <p className={styles.btn}>See Ninjas List</p>
        </Link>

      </div>
    </>
  )
}
