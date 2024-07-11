import React from "react";
import vg from "../assets/Image2.webp";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechWeb</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            aliquam. Nam magni eaque possimus unde delectus obcaecati esse
            molestias magnam! Blanditiis aliquid ipsa ea voluptatum quisquam
            modi tempore perferendis doloremque iure ullam et, maiores aut ut
            deleniti minima nostrum possimus consequuntur officia, reprehenderit
            laborum iste! Quasi nisi nostrum fugit illum nemo facilis illo sunt.
            Eveniet perferendis quia tempora aliquam, nesciunt, amet quos fugiat
            quaerat corporis nemo ipsa asperiores aspernatur saepe accusamus.
            Voluptatum cumque voluptas sapiente maiores officia magnam deserunt
            aliquam? Cupiditate odio repellendus iure fugiat nihil repudiandae
            porro animi. Debitis quisquam, harum esse assumenda omnis optio illo
            iste nisi. Sit!
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            aliquam. Nam magni eaque possimus unde delectus obcaecati esse
            molestias magnam! Blanditiis aliquid ipsa ea voluptatum quisquam
            modi tempore perferendis doloremque iure ullam et, maiores aut ut
            deleniti minima nostrum possimus consequuntur officia, reprehenderit
            laborum iste! Quasi nisi nostrum fugit illum nemo facilis illo sunt.
            Eveniet perferendis quia tempora aliquam, nesciunt, amet quos fugiat
            quaerat corporis nemo ipsa asperiores aspernatur saepe accusamus.
            Voluptatum cumque voluptas sapiente maiores officia magnam deserunt
            aliquam? Cupiditate odio repellendus iure fugiat nihil repudiandae
            porro animi. Debitis quisquam, harum esse assumenda omnis optio illo
            iste nisi. Sit!
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
