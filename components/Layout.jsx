import { useRouter } from "next/router"
import Head from "next/head"
import Footer from "./Footer"
import Header from "./Header"
import Showcase from "./Showcase"

import styles from "@/styles/Layout.module.css"

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={'description'} content={description} />
        <meta name={'keywords'} content={keywords} />
      </Head>

      <Header />
      { router.pathname === "/" && <Showcase /> }
      <div className={styles.container}>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: "Musical Events | Find the best concerts",
  description: "Find the best concerts and other events",
  keywords: "music, events, concerts"
}

export default Layout