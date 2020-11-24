import React from "react"
import Img from 'gatsby-image'

// COMPONENTS
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import WaxingService from '../../components/waxing_service'
import { Columns, Column, Container } from "../../components/layout/bulma"
import Window from '../../components/layout/window'
import VerticalCenterFlex from '../../components/layout/vertical-center-flex'

// CSS
import '../../styles/pages/services/waxing.css'

// DATA
import waxingServices from '../../utils/data/waxing.json'

const Waxing = ( {data} ) => {

  return (

    <Layout>

      <SEO title="Waxing" />

      <Window classes={["window-waxing"]}>
        
        <VerticalCenterFlex classes={["vertical-center-waxing"]}>

          <Container 
            styles={{
              paddingTop: "25px", 
              paddingBottom: "25px",
            }}
          >
            <Columns>
      
              <Column classes={["has-text-centered", "has-text-white", "bg-color-0", "pad-0"]}>
      
                <div style={{padding: "2em"}}>
                  <h2 className="has-text-centered has-text-white upper">
                    Waxing
                  </h2>
                  <div>
                    {
                      waxingServices.map(service => 
                        <WaxingService 
                          service={service.service} 
                          price={service.price} 
                        />
                      )
                    }
                  </div>
                </div>
      
              </Column>
      
              <Column classes={["pad-0", "border-10px-color-0"]}>
                <Img 
                  fluid={data.waxingLegs.childImageSharp.fluid}
                  style={{
                    height: "100%",
                  }}
                />
              </Column>
      
            </Columns>
          </Container>

        </VerticalCenterFlex>
      </Window>

    </Layout>

  )

}

export default Waxing

// 08.31.20 / ADD GRAPH QL QUERY
export const query = graphql`
  query {
    waxingLegs: file(relativePath: {eq: "waxing/waxing_1.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`