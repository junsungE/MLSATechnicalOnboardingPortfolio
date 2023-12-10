/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpeg";

const imageAltText = "desktop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Microsoft Learn Student Ambassadors",
    description:
      "The Microsoft Learn Student Ambassadors program is a global group of on-campus ambassadors who are eager to help students and their communities, lead in their local tech circles, and develop technical and career skills for the future. As a Student Ambassador, you might find yourself organizing a campus or community hackathon, mentoring other students, or volunteering with an elementary school STEM class.",
    url: "https://mvp.microsoft.com/en-US/studentambassadors/profile/f7361afd-e192-4bab-aa09-019ea43ac186",
  },
  {
    title: "Microsoft Learn Profile",
    description:
      "Currently have 2 certifications.",
    url: "https://learn.microsoft.com/en-us/users/71623546",
  },
  {
    title: "My Portfolio Site",
    description:
      "Created from Microsoft's portfolio workshop and deployed to Azure Static Web Apps. Includes my experience and abilities.",
    url: "https://fantastic-space-disco-v559vgjqp652x49p-1234.app.github.dev/",
  },
  {
    title: "Global Azure 2021 Korea - Track D",
    description:
      "Azure for Juniors.",
    url: "https://www.youtube.com/watch?v=t7FRuf4QmYE",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
