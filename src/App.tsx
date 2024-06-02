// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useRef } from 'react';
import './App.css'
import Contact from './components/Contact';
import Header from './components/Header'

import Skill from './components/Skill';
import useScrollPosition from './hooks/useScrollPositionHook';
import AboutMe from './components/AboutMe';



function App() {
  const scrollPosition = useScrollPosition()
  const aboutMeRef: React.MutableRefObject<any> = useRef([])
  const contactRef: React.MutableRefObject<any> = useRef([])
  const skillRef: React.MutableRefObject<any> = useRef([])
  const expRef: React.MutableRefObject<any> = useRef([])


  const toggleClassList = (ref: React.MutableRefObject<any>, scrollPosition: number) => {
    if (!ref?.current) return

    let offset = ref.current.offsetTop - 250
    let height = ref.current.offsetHeight
    let children = ref.current.children

    if (scrollPosition >= offset && scrollPosition < offset + height) {
      ref.current.classList.add("show-animate")
      ref.current?.children && addChildrenAnimationClass(children)
    } else {
      ref.current?.children && ref.current.classList.remove("show-animate")
      removeChildrenAnimationClass(children)
    }
  }

  const addChildrenAnimationClass = (children: HTMLElement[]) => {
    for (const child of children) {
      child.classList.add("animate")
    }
  }

  const removeChildrenAnimationClass = (children: HTMLElement[]) => {
    for (const child of children) {
      child.classList.remove("animate")
    }
  }


  useEffect(() => {

    if (aboutMeRef !== null) {
      toggleClassList(aboutMeRef, scrollPosition)
    }

    if (contactRef !== null) {
      toggleClassList(contactRef, scrollPosition)
    }

    if (skillRef !== null) {
      toggleClassList(skillRef, scrollPosition)
    }
    if (skillRef !== null) {
      toggleClassList(skillRef, scrollPosition)
    }

  }, [scrollPosition])



  return (
    <>
      <Header></Header>
      <section id="about-me" ref={aboutMeRef}>
        <AboutMe />
      </section >

      <section id="contact" ref={contactRef}>
        <Contact />
      </section>


      <section id="skills" ref={skillRef}>
        <Skill />
      </section>



      <section id="experiences" ref={expRef}>
        <h1>Experience</h1>
      </section>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
