import React from "react";
import api from "../assets/portfolio/20191009140007-GettyImages-1053962188.jpeg";
import apod from "../assets/portfolio/download (1).jpg";
import iptracker from "../assets/portfolio/download (2).jpg";
import nftportal from "../assets/portfolio/download (3).jpg";
import webpostman from "../assets/portfolio/download (5).jpg";
import waveportal from "../assets/portfolio/download (4).jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: api,
      link: '',
      repo: 'https://github.com/harini145/-PHOTOGRAPHY'
    },
    {
      id: 2,
      src: webpostman,
      link: '',
      repo: 'https://github.com/harini145/day-1-fav-food'
    },
    {
      id: 3,
      src: apod,
      link: '',
      repo: 'https://github.com/harini145/day-1-fav-food'
    },
    {
      id: 4,
      src: waveportal,
      link: '',
      repo: 'https://github.com/harini145/Friends-book'
    },
    {
      id: 5,
      src: nftportal,
      link: '',
      repo: 'https://github.com/harini145/-PHOTOGRAPHY'
    },
    {
      id: 6,
      src: iptracker,
      link: '',
      repo: 'https://github.com/harini145/Friends-book'
    },
  ];

  return (
    <div
      name="portfolio"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
