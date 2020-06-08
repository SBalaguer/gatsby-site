import React from "react"
import { Link } from "gatsby"
import Layout from "../Components/Layout"
import Head from "../Components/Head"

const About = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <Link to="/contact">Reach out to me!</Link>
    </Layout>
  )
}

export default About
