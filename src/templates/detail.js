import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Masthead from '../components/Masthead';

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
      <div>
        <Navbar isDetail />

        <Masthead
          heading={post.frontmatter.title}
          subheading={post.frontmatter.description}
          action={null}
          image={post.frontmatter.thumbnail}
        />

        <section className="bg-light">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-lg-8">
                {/* <div style={{
                  width: '100%',
                  height: '15rem',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundImage: `url(${post.frontmatter.thumbnail})`
                }}></div> */}
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  };
  
  export const query = graphql`
    query BlogPostQuery($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
        frontmatter {
          title
          description
          thumbnail
        }
      }
    }
  `;