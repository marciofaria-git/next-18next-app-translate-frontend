import styles from '../styles/Home.module.scss'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <section className={styles.container}>
      <h1>Fruits</h1>
    </section>
  )
}

export async function getStaticProps({locale}:any){
 
  return {
    props:{
      ...(await serverSideTranslations(locale,['common'])),

    }
  }
}

