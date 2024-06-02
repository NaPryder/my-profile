import pythonLogo from '/python_logo.png'
// import pythonLogo from '../assets/python_logo.png'
import nodeLogo from '/node_logo.png'
import viteLogo from '/vite.svg'
import reactLogo from '/react.svg'
import htmlLogo from '/html_logo.png'
import cssLogo from '/css_logo.png'
import jsLogo from '/js_logo.png'
import csLogo from '/cs_logo.png'
import cppLogo from '/cpp_logo.png'
import styles from "./Skill.module.css"

interface Stack {
  name: string
  image: string
}

const Skill = () => {

  const stacks: Stack[] =
    [{
      name: 'python',
      image: pythonLogo,
    },
    {
      name: 'node',
      image: nodeLogo,
    },
    {
      name: 'mouse',
      image: viteLogo,
    },
    {
      name: 'react',
      image: reactLogo,
    },
    {
      name: 'html',
      image: htmlLogo,
    },
    {
      name: 'css',
      image: cssLogo,
    },
    {
      name: 'js',
      image: jsLogo,
    },
    {
      name: 'c#',
      image: csLogo,
    },
    {
      name: 'c++',
      image: cppLogo,
    },
    ]

  return (
    <>
      <h2 className='title'>Skills</h2>
      <h3>Programming Lanuages</h3>

      <div className={styles.imageSlider}>
        {
          stacks.map((item, i) => (
            <div key={i} className={styles.imageFrame}>
              <img className={styles.image} src={item.image} />
            </div>
          ))
        }
        {/* {stacks &&
          stacks.map((item, i) => (
            <img key={i} src={getImageUrl(item.image)} alt={item.name} />
          ))
        } */}
      </div>

    </>
  )
}

export default Skill