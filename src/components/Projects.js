import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "../styles/projects.module.css";
// import Img from "gatsby-image";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { config } from '@fortawesome/fontawesome-svg-core';
// import {faBaseball, faGamepad} from '@fortawesome/free-solid-svg-icons';

// Disable the auto CSS insertion
// config.autoAddCss = false


export default function Projects() {
    const data = useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark(sort: {frontmatter: {title: ASC}}) {
          nodes {
            frontmatter {
              color
              title
              url
              description
              type
              stack
              featuredImage {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
            id
          }
        }
      }
    `)
    console.log(data);
    const projects = data.allMarkdownRemark.nodes;
    // const image = getImage(projects.frontmatter.featuredImage);
    console.log(projects)
  return (
    <section className={styles.projects}>
       <h1 className="section-header">Some of my Projects</h1>
       <div>
           {projects.map(project => (
              <div key={project.id} className={styles.container}>
            
                <div className={styles.flipCard} style={{boxShadow: `5px 5px 5px 0 ${project.frontmatter.color}`}}>
                    <div className={styles.flipCardInner}>
                        <div className={styles.flipCardFront}>
                            {/* <Img fluid={project.frontmatter.featuredImage.childImageSharp.fluid} className={styles.img}/> */}
                            {/* <GatsbyImage image={getImage(project.frontmatter.featuredImage)} alt="project-thumbnail" className={styles.img}/> */}
                        </div>              
                        <div className={styles.flipCardBack}>
                            <h1>{project.frontmatter.title}</h1> 
                            <p>{project.frontmatter.type}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.desc} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <h1 style={{color: `${project.frontmatter.color}`}}>{project.frontmatter.title}</h1> 
                    <div>
                        <p>{project.frontmatter.description}</p>
                        <a href={project.frontmatter.url} target="_blank" rel="noreferrer" className={styles.visit} style={{color: `${project.frontmatter.color}`}}>visit website</a>
                    </div>
                    <ul>
                      {project.frontmatter.stack.map((item, index)=> (
                          <li key={index}>{item}</li>
                      ))}
                    </ul>
                </div>
              </div>
           ))}
       </div>
    </section>
  )
}


