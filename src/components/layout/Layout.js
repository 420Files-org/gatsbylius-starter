import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import { ThemeProvider } from "styled-components";
import { GoMarkGithub } from "react-icons/go";
import Header from "components/layout/Header";
import Footer from "components/layout/Footer";
import Main from "components/layout/Main";
import { GlobalStyle } from "config/style/GlobalStyle";
import theme from "config/style/theme";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery($code: String) {
      site {
        siteMetadata {
          title
        }
      }

      category(code: { eq: $code }) {
        code
        slug
        name
      }

      allCategory(filter: { level: { eq: 0 } }) {
        edges {
          node {
            id
            code
            slug
            name
          }
        }
      }
    }
  `);

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,300i,600&display=swap"
          rel="stylesheet"
        />
        <link
          href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header
          menuLinks={data.allCategory.edges}
          siteTitle={data.site.siteMetadata.title}
        />

        <Main>{children}</Main>

        <Footer>
          <div>© {new Date().getFullYear()}</div>
          <div>
            Follow
            <a href="https://github.com/gatsbylius/gatsbylius">
              <span>Gatsbylius on Github</span>
              <span>
                <GoMarkGithub size={24} />
              </span>
            </a>
          </div>
        </Footer>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
