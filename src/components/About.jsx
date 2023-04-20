import React from "react";
import HeroImage from '../assets/34.png'

const About = () => {
  return (
    <div
      name="about"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div className="img"
        style={{ width: '20%', height: '50%', borderRadius: '50%',display:'grid',justifyItems:'center',marginLeft:'10px',marginTop:'10vh' }}>
        <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            
            
          />
        </div>

        <p className="text-xl mt-5"
        style={{ display:'grid',justifyItems:'center',marginLeft:'50vh',marginTop:'-45vh' }}>
        I am a web developer, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology and currently doing freelance gigs.
        </p>

        <br />

        <p className="text-xl"
        style={{ display:'grid',justifyItems:'center',marginLeft:'50vh' }}>
        I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done. <br /> <br />
        I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!<br /> <br />
        I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
