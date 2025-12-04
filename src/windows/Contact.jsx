import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const ContactComponent = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact"/>
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="\images\Me.jpg" alt="Aayush Sharma" className="w-20 rounded" />

        <h3>Let's Connect</h3>
        <p>Got an idea? Let’s build something cool together. Or just wanna talk tech?
            i'm in. </p>
            <p>aayushsharma7065@gmail.com</p>

            <ul>
                {socials.map(({id, bg, link, icon, text}) => (
                    <li key={id} style={{backgroundColor: bg}}>
                        <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                            <img src={icon} alt={text} className="size-5" />
                            <p> {text}</p>
                        </a>
                    </li>
                ))}
            </ul>

      </div>
    </>
  )
}

const ContactWindow = WindowWrapper(ContactComponent, 'contact');

export const Contact = ContactWindow;
export default Contact
