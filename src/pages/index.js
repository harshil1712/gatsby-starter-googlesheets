import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {
      data.allGoogleSpreadsheetSheet1.edges.map(d=>(
        <Card 
          key={d.node.id} 
          title={d.node.title} 
          content={d.node.content} 
          date={d.node.date}
        />
      ))
    }
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export const query = graphql`
  query{
    allGoogleSpreadsheetSheet1 {
      edges {
        node {
          id
          title
          date
          content
        }
      }
    }
  }
`

export default IndexPage
