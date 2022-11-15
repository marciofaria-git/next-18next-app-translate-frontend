import styles from '../styles/Home.module.scss'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslate } from '../hooks/useTranslante';

export default function Home() {
  const {commonTranslations} = useTranslate()
console.log(commonTranslations)
  
  return (
    <section className={styles.container}>
      <h1>{commonTranslations('sectionTitle')}</h1>
    </section>
  )
}

export async function getStaticProps({locale}:any){
 
  return {
    props:{
      ...(await serverSideTranslations(locale,['common'])),

    },
  };
}

