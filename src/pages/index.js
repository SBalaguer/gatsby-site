import React from "react"
import { Link } from "gatsby"
import Layout from "../Components/Layout"
import Head from "../Components/Head"

const Index = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello!</h1>
      <h2>I'm Santiago, a FullStack Developer living in Lisbon</h2>
      <p>
        Need a Develope? <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default Index
