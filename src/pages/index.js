import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components"
import SEO from "../components/seo"

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "ProjectsSection" } }
      limit: 3
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  const aboutTitle = `About section`
  const projectsTitle = `Latest projects section`

  return (
    <Layout>
      <Hero />
      <About title={aboutTitle} />
      <Projects projects={projects} title={projectsTitle} />
    </Layout>
  )
}

export default HomePage
