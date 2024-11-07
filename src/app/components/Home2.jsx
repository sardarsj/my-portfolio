"use react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Home2 = () => {
  return (
    <section className="lg:py-16">
      <div className="mt-32 flex flex-col justify-center font-semibold text-white">
        <h1 className="text-5xl">
          Let Me
          <span> Introduce </span>
          Myself
        </h1>
        <p className="mt-10">
          {" "}
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️
          <br />
          <br />I am fluent in classics like
          <i>
            <b className="purple"> C++, Javascript and Go. </b>
          </i>
          <br />
          <br />
          My field of Interest's are building new &nbsp;
          <i>
            <b className="purple">Web Technologies and Products </b> and also in
            areas related to <b className="purple">Blockchain.</b>
          </i>
          <br />
          <br />
          Whenever possible, I also apply my passion for developing products
          with <b className="purple">Node.js</b> and
          <i>
            <b className="purple"> Modern Javascript Library and Frameworks</b>
          </i>
          &nbsp; like
          <i>
            <b className="purple"> React.js and Next.js</b>
          </i>
        </p>
      </div>

      <div className="mt-10 font-semibold flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl">Find Me On</h1>
        <h3 className="text-xl mt-4">Feel free to connect </h3>
        <div className="p-2 flex flex-row space-x-4">
          <span className="bg-slate-200 rounded-2xl text-xl text-purple-700 p-2">
            <FaGithub />
          </span>
          <span className="bg-slate-200 rounded-2xl text-xl text-purple-700 p-2">
            <FaLinkedin />
          </span>
          <span className="bg-slate-200 rounded-2xl text-xl text-purple-700 p-2">
            <FaInstagram />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Home2;
