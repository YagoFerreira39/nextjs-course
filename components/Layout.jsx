import Head from "next/head"
import styles from "../styles/Layout.module.css"

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={'description'} content={description} />
        <meta name={'keywords'} content={keywords} />
      </Head>

      <div className={styles.container}>
        {children}
      </div>
    </div>
  )
}

Layout.defaultProps = {
  title: "Musical Events | Find the best concerts",
  description: "Find the best concerts and other events",
  keywords: "music, events, concerts"
}

export default Layout