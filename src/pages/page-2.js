import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <table>
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>House</th>
            </tr>
        </thead>
        <tbody>
    {
      data.allGoogleSpreadsheetSheet2.edges.map(d=>(
        <Table key={d.node.id} no={d.node.srNo} name={d.node.name} house={d.node.house} />
      ))
    }
    </tbody>
    </table>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
query {
  allGoogleSpreadsheetSheet2 {
    edges {
      node {
        id
        srNo
        name
        house
      }
    }
  }
}
`

export default SecondPage
