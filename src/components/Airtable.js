// Runtime for Survey Section
// (not buildtime as in gatsby-config.js for Projects Section & Review Section)
// use environment variables with GATSBY_... word
import Airtable from "airtable"

export default new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  process.env.GATSBY_AIRTABLE_BASE_ID
)
