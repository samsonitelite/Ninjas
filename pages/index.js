import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbars'
// import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit possimus distinctio maxime impedit facilis commodi explicabo hic odit dicta ipsa itaque ut, consequuntur doloribus quidem praesentium nihil alias illum inventore veritatis tempora cumque maiores iste. In sapiente alias deleniti quae!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit possimus distinctio maxime impedit facilis commodi explicabo hic odit dicta ipsa itaque ut, consequuntur doloribus quidem praesentium nihil alias illum inventore veritatis tempora cumque maiores iste. In sapiente alias deleniti quae!</p>
      <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
    </div>
  )
}
