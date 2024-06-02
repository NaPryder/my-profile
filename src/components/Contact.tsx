import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithubInverted } from "react-icons/vsc";
import { AiOutlineDownload } from "react-icons/ai";
import "./Contact.css"

type ContactInfo = {
  icon: JSX.Element,
  href: string,
  text: string,
}

const Contact = () => {

  const contactInfoList: ContactInfo[] = [
    {
      icon: <MdOutlineMailOutline size={25} />,
      href: "mailto: Nachai.pf@gmail.com",
      text: "Nachai.pf@gmail.com",
    },
    {
      icon: <FiPhone size={25} />,
      href: "tel:+66856182988",
      text: "(+66)85-618-2988 (Thailand)",
    },
    {
      icon: <AiOutlineLinkedin size={25} />,
      href: "https://www.linkedin.com/in/nachai-prm/",
      text: "linkedin.com/in/nachai-prm",
    },
    {
      icon: <VscGithubInverted size={25} />,
      href: "https://github.com/NaPryder",
      text: "github.com/NaPryder",
    },
    {
      icon: <SlLocationPin size={25} />,
      href: "https://maps.app.goo.gl/YAxwesD8RXcT89YMA",
      text: "Thon Buri, Bangkok, 10600",
    },
    {
      icon: <AiOutlineDownload size={25} />,
      href: "../../public/Nachai-Resume-fullstack.pdf",
      text: "Download Resume",
    },

  ]

  return (
    <>
      <h2 className='title'>Contact</h2>
      {
        contactInfoList.map((item, i) => (
          <div className="contact-info" key={i} style={{ "--i": i + 1 } as React.CSSProperties}>
            {item.icon}
            <a href={item.href} target="_blank">{item.text}</a>
          </div >
        ))
      }
    </>
  )
}

export default Contact