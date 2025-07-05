import React, { useContext } from "react";
import Usercontext from "../Basics/Usercontext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Practice = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#green-box",
      {
        x: 300,
        duration: 1,
        borderRadius: "0%",
        backgroundColor: "blue",
      },
      {
        x: 600,
        duration: 2,
        repeat: -1,
        yoyo: true,
        backgroundColor: "red",
        borderRadius: "100%",
        ease: "power1.inOut",
      }
    );

    gsap.to("#text", {
      opacity: 1,
      ease: "power1.inOut",
      duration: 2,
      y: 0,
    });

    gsap.fromTo(
      ".para p",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
      }
    );
  });
  const user = useContext(Usercontext);
  return (
    <div>
      <h1 className="text-2xl font-bold opacity-0" id="text">
        Practice any concept here in React.js
      </h1>
      <div className="para">
        <p>
          hello my name is {user.name} and i am {user.age} years old
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
          voluptatum. In eius similique neque nobis accusamus fugit reiciendis
          dolores dignissimos, quas necessitatibus voluptatum voluptate
          veritatis quae vitae placeat accusantium optio.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
          cumque ad similique autem reiciendis! Obcaecati nesciunt saepe dolore
          hic. Modi laboriosam facilis dolore reiciendis numquam amet
          praesentium dolorem quam saepe?
        </p>
      </div>

      <div
        className="w-[100px] h-[100px] bg-emerald-950 m-8"
        id="green-box"
      ></div>
    </div>
  );
};

export default Practice;
