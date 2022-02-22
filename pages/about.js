import Link from "next/link"

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>This is an app to find the latest musical events</p>
      <p>Version: 1.0.0</p>
      <Link href={"/"}>Home</Link>
    </div>
  )
}

export default AboutPage