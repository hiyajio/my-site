import React from "react"
import { Link } from "gatsby"

// import Contact from "./Contact"

const Action = () => {
  return (
    <div className="browser marg-bot-1">
      <div className="top">
        <span className="circle" />
        <span className="circle" />
        <span className="circle" />
      </div>
      <div className="body">
        <h2>Let's make something!</h2>
        <p>
          I'm a developer enthusiastic about well-designed products that at
          their core, aim to assist people, regardless of market size. Whatever
          you are imagining, building, or growing, I'd love to hear about it.
          Scroll through my work and take the time to reach out. I'll respond as
          quickly as I can.
        </p>
        <div className="buttons">
          <Link to="#projects" className="btn btn-info">
            View my projects
          </Link>
          <a
            href="mailto:jio.buenviaje@gmail.com"
            rel="noopener noreferrer"
            className="btn btn-info marg-bot-05"
          >
            Contact me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Action
