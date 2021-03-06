import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navigation from './navigation'
import './tachyons.min.css'

const initialState = {
  options: [],
  value: 'foobar',
  label: 'Foobar',
};

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Navigation title={data}/>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`