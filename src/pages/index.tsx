import styles from "../styles/Home.module.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslate } from "../hooks/useTranslante";
import { Navigation } from "../components/Navigation";
import { FruitsTable } from "../components/FruitsTable/FruitsTable";

export default function Home() {
  const { commonTranslations } = useTranslate();

  return (
    <>
     <Navigation/>
   
     <main>
      <section className={styles.container}>
        <h1>{commonTranslations("sectionTitle")}</h1>
      </section>
      <FruitsTable/>
    </main>
    </>
   
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
