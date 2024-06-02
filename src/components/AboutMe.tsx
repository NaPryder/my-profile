import React from 'react'
import "./AboutMe.css"

const AboutMe = () => {
  const roleWave = "Fullstack  Developer".split("")

  return (
    <>
      <h1>Nachai </h1>
      <h1>Paramesthanakorn</h1>
      <div className="role-wavy">
        {roleWave.map((str, i) => (
          <span key={i} style={{ "--i": i + 1 } as React.CSSProperties}>{str}</span>
        ))}
      </div>

      <div className="profile">
        <p>
          I specialize in developing automation and digital workflow processes. My expertise spans backend, frontend, and database management.
          With a proactive mindset, I am a quick learner, always eager to take on challenging responsibilities to further expand my vision in software development.
        </p>
      </div>
    </>
  )
}

export default AboutMe