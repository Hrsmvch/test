'use client'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  console.log('scs', process.env.NEXT_PUBLIC_API_KEY);

  return (
    <main className={styles.main}>
      Hello!
    </main>
  )
}
