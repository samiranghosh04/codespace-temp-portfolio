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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "BBC Web Scraper",
    description:
      "This is a simple web scraper. It fetches the latest articles from the BBC website and prints an array of objects called 'articles' to the console. Each object contains the headline and the link to the article.",
    url: "https://github.com/samiranghosh04/bbc-article-web-scraper",
  },
  {
    title: "Image Search Algorithm",
    description:
      "This is a simple schema and algorithm to store images in a weaviate database, then upload another image and find the closest possible match in the database.",
    url: "https://github.com/samiranghosh04/weaviate-img.srch.algo",
  },
  {
    title: "CryptoPulse",
    description:
      "Fetched the data of the top 120 cryptocurrencies from a public API and displayed it in a table using React and Tailwind.",
    url: "https://github.com/samiranghosh04/cryptopulse",
  },
  {
    title: " Daily Climate Data Visualization - Delhi",
    description:
      "This repository contains a Python script that reads daily climate data from a CSV file and visualizes it using Matplotlib.",
    url: "https://github.com/samiranghosh04/eda-masters-minor",
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
