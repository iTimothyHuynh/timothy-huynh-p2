import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data }) => {
    const { name, company } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Home" />
            <h1>About Us</h1>
            <p>{`The History of Final Fantasy was brought to you by ${name}.`}</p>
            <p>{`Have some questions? We'd love to hear from you! To get in touch with us here at ${company} please click "Contact" above`}</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`}}>
            <StaticImage
                src="../images/gatsby-astronaut.png"
                width={300}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
                />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                name
                company
                
            }
        }
    }
}
`