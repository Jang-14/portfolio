import Head from "next/head";
import { CiTwitter, CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import deved from "../public/jang.png";
import ca1 from "../public/ca1.png";
import ca2 from "../public/ca2.png";
import caw1 from "../public/caw1.png";
import caw2 from "../public/caw2.png";
import Typewriter from "typewriter-effect";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Joel Anagrita Portfolio</title>
        <meta name="description" content="Created by JANG" />
        <link rel="icon" href="/ja.png" />
      </Head>

      <main className="bg-slate-800 px-10 md:px-20 lg:px-10">
        <section className="min-h-screen">
          <br />
          <nav className="py-2 mb-1.5 flex justify-between">
            <div className="flex items-center">
              <img
                className="rounded-md ml-10"
                src="ja.png"
                alt="../public/ja.png"
              />
              <h1 className="cursor-pointer text-xl rounded-md ml-4 font-burtons text-white mt-2">  <a href="#" id="ini">Jang</a>
              </h1>
            </div>
            <ul className="flex items-center md:gap-1 p-2 uppercase md:flex md:items-center md:static">
              <li className="md:my-0 my-7 flex items-center">
                <a
                  href="#aboutme"
                  className="cursor-pointer font-medium px-4 rounded-md text-white"
                >
                  <span id="l1"></span>
                  <span id="l2"></span>
                  <samp id="l3"></samp>
                  <samp id="l4"></samp>
                  About
                </a>
              </li>
              <li className="md:my-0 my-7 flex items-center">
                <a
                  href="#resume"
                  className="cursor-pointer font-medium px-4 rounded-md text-white"
                >
                  <span id="l1"></span>
                  <span id="l2"></span>
                  <samp id="l3"></samp>
                  <samp id="l4"></samp>
                  Resume
                </a>
              </li>
              <li className="md:my-0 my-7 flex items-center">
                <a
                  href="#projects"
                  className="cursor-pointer font-medium px-4 rounded-md text-white"
                >
                  <span id="l1"></span>
                  <span id="l2"></span>
                  <samp id="l3"></samp>
                  <samp id="l4"></samp>
                  Projects
                </a>
              </li>
              <li className="md:my-0 my-7 flex items-center">
                <a
                  href="#contact"
                  className="cursor-pointer font-medium px-4 rounded-md text-white mr-6"
                >
                  <span id="l1"></span>
                  <span id="l2"></span>
                  <samp id="l3"></samp>
                  <samp id="l4"></samp>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <br />
          <br />
          <br />
          <br />
          <div className="text-left p-10 justify-items-center">
            <ul>
              <li>
            <div
              className="relative mx-auto rounded-full w-80 h-80 overflow-hidden mb-5 ml-20 text-justify"
              id="img">
              <Image src={deved} alt={""} layout="fill" objectFit="cover" />
            </div>
            </li>
            <li>
            <h2 className="text-2xl py-2 text-white font-medium md:text-5xl mt-20">
              Hey, I'm Joel
            </h2>
            </li>
            <li>
            <h2 className="text-2xl py-2 text-cyan-400 font-medium md:text-4xl flex items-center">
              I'm a&nbsp;
              <Typewriter
                options={{
                  strings: [
                    "Product designer",
                    "UX/UI Designer",
                    "Frontend developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            </li>
            <li>
            <p className="text-md py-5 leading-6 text-white md:text-xl">
              I am a systems engineering student, I have knowledge in frontend
              development, I have empirical knowledge in UX/UI design and I want
              to focus on the field of Product Design.{" "}
            </p>
            </li>
            </ul>
          </div>
        </section>




        <section id="aboutme">
          <div className="container" id="about">
            <div className="card">
              <div className="content">
                <h2>About me</h2>
                <br />
                <br />
                <p className="text-xl text-white text-justify">
                Hi, I'm Joel Angarita a Colombian systems engineer very interested in 
                technology and design, so you can find in me a person with a 
                great capacity for problem solving and logical thinking due to 
                my engineering background, but also on my father's side I was 
                influenced by graphic design, which has made me have empirical knowledge 
                of this, which has led me to generate my focus of interest which is 
                related to Product design and UX/UI design.<br/><br/>
                Due to playing the role of coordinator of one of the research groups at my 
                university I can highlight some leadership skills that I have acquired over time, 
                which also makes me a person with a high level of curiosity, for this reason 
                I am open to new thoughts, ideas, people, etc.<br/><br/>
                I perform well working in groups and I will be grateful to share new experiences 
                and knowledge that can help me and others to grow professionally and personally.
                </p>
              </div>
            </div>
          </div>
        </section>




        <section id="resume">
          <h3 className="text-3xl px-10 text-white justify-center">Resume</h3>
          <div className="container">
            <div className="box">
              <span></span>
              <div className="content">
                <h2>Educatión</h2>
                <p>
                I am currently in my 9th semester of Systems Engineering. Systems, I have studies on UX and UI design and Lean UX, I am taking some courses of deepening in these topics. these topics.
                </p>
              </div>
            </div>
            <div className="box">
              <span></span>
              <div className="content">
                <h2>Technologies</h2>
                <p>
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Corel Draw</li>
                  <li>Sony Vegas</li>
                  <li>HTML 5</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>JavaScript</li>
                </p>
              </div>
            </div>
            <div className="box">
              <span></span>
              <div className="content">
                <h2>Skills</h2>
                <p>
                  <li>Creativity</li>
                  <li>Leadership</li>
                  <li>Problem Solving</li>
                  <li>Self-starter</li>
                  <li>Teamwork</li>
                  <li>Adaptation to change</li>
                  <li>Resilience</li>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div>
            <h3 className="text-3xl py-1 text-white px-10">Projects</h3>
            <p className="text-md py-2 leading-8 text-white px-10">
            I am currently developing a mobile application and website focused on teaching first aid maneuvers in a didactic way, for which I have designed the Mockup / Wireframes with figma.
            </p>



            <div
              className="relative mx-auto mb-5 ml-20 mr-20 rounded-none overflow-hidden object-scale-down">
              <Image src={ca1} alt={""} />
            </div>
            <div
              className="relative mx-auto mb-5 ml-20 mr-20 rounded-none overflow-hidden object-scale-down">
              <Image src={ca2} alt={""} />
            </div>
            <div
              className="relative mx-auto mb-5 ml-20 mr-20 rounded-none overflow-hidden object-scale-down">
              <Image src={caw1} alt={""} />
            </div>
            <div
              className="relative mx-auto mb-5 ml-20 mr-20 rounded-none overflow-hidden object-scale-down">
              <Image src={caw2} alt={""} />
            </div>
            <br />
            <br />
            <br />



          </div>
        </section>
        <section id="contact">
          <h3 className="text-3xl py-1 text-white px-10 mb-60">Contact</h3>
          <div className="text-5xl flex justify-center gap-16 py-3 text-white mb-60">
            <a href="https://twitter.com/JoelAngarita4">
              <CiTwitter />
            </a>
            <a href="https://www.linkedin.com/in/joel-angarita-3991b9243" id="lin">
              <CiLinkedin />
            </a>
            <a href="https://www.instagram.com/jang__14/" id="insta">
              <FaInstagram />
            </a>
          </div>
          <br />
          <br />
          <br />
          <br />

        </section>
      </main>
    </div>
  );
}
