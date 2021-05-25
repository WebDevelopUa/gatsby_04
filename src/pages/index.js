import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Survey,
  Slider,
  GridProjects,
} from "../components"
// import { Projects } from "../components"
import SEO from "../components/seo"

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "ProjectsSection" } }
      limit: 4
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
  const sliderTitle = `Reviews section`
  const surveyTitle = `Survey section`

  return (
    <Layout>
      <Hero projects={projects} />
      <About title={aboutTitle} />
      {/*<Projects projects={projects} title={projectsTitle} />*/}
      <GridProjects projects={projects} title={projectsTitle} />
      <Survey title={surveyTitle} />
      <Slider title={sliderTitle} />
    </Layout>
  )
}

export default HomePage
