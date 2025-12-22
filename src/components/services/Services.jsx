import React from "react";
import "./services.css";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

function Services() {
  return (
    <section id="services">
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container container_services">
          <article className="Card">
            <MdDesignServices className="icon" />
            <h3>Web Design</h3>
            <p className="text-light">
              I design and develop modern, responsive web interfaces using
              React. I focus on clean UI, good user experience, and reusable
              components that adapt smoothly across different screen sizes and
              devices.
            </p>
          </article>
          <article className="Card">
            <IoIosRocket className="icon" />
            <h3>Fast Performence</h3>
            <p className="text-light">
              I build applications with performance in mind by optimizing
              frontend rendering and creating efficient backend APIs. My goal is
              to deliver fast, reliable applications with smooth user
              interactions.
            </p>
          </article>
          <article className="Card">
            <FaCode className="icon" />
            <h3>Clean Code</h3>
            <p className="text-light">
              I write clean, well-structured, and maintainable code following
              best practices. I focus on scalability, clear architecture, and
              readability to ensure long-term project sustainability and easy
              collaboration.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;
