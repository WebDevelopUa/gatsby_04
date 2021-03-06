import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Projects, Algolia, Seo } from "../components"

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "ProjectsSection" } }) {
      nodes {
        id
        data {
          type
          name
          date
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`

const ProjectsPage = ({ data }) => {
  const pageTitle = `Projects page`
  const {
    allAirtable: { nodes: projects },
  } = data

  return (
    <Wrapper>
      <Layout>
        <Seo title={pageTitle} />
        <Projects title={pageTitle} projects={projects} page />
        <Algolia />
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);

  nav {
    background: var(--clr-primary-7);
  }
`

export default ProjectsPage
