import './WebPage.css'
import "@fontsource/inter"

import User from '../../Assets/round1.png'
import Arrow from '../../Assets/Icons/Arrow.svg'
import Dots from '../../Assets/Icons/Dotted.svg'
import Github from '../../Assets/Icons/github.svg'
import Slack from '../../Assets/Icons/slack.svg'
import I4GLogo from '../../Assets/Icons/Ingressive.svg'

 export const WebPage = () => {

                // BUTTON ARRAY
    const Btns = [{
                    Name: "Twitter Link",
                    id: 'twitter_btn',
                    link: "https://mobile.twitter.com/Adesinaabiodunp"
                },
                {
                    Name: "Zuri Team",
                    id: 'btn_zuri',
                    link: "https://training.zuri.team/"
                },
                {
                    Name: "Zuri Books",
                    id: 'books',
                    link: "https://books.zuri.team"
                },
                {
                    Name: "Python Books",
                    id: 'book_python',
                    link: "https://books.zuri.team/python-for-beginners?ref_id=adesinaabiodunpaul"
                },
                {
                    Name: "Background Checks for Codes",
                    id: 'pitch',
                    link: "https://background.zuri.team"
                },
                {
                    Name: "Design Books",
                    id: 'book_design',
                    link: "https://books.zuri.team/design-rules"
                }]


    return ( 
        <div id="container">

            < section className="Main-section">
                    {/* User Image and Username */}
                
                    <header>
                        <div className='UserProfile'>
                        <img src={User} alt="UserImage" id='profile_img' />
                        <p id='twitter'>Adesina Abiodun Paul</p>
                        <p id='slack'>Adesina Abiodun P.</p>
                        </div>
                        <img   src={Arrow} alt="Arrow"  className='Arrow'/>
                        <img src={Dots} alt="Hidden list" className='Dots' />
                    </header>

                     {/* Mapping through the Array */}

                    {Btns.map((btn) => {
                    return <div className='btns' key={btn.id}>
                        <button id={btn.id}><a href={btn.link} target='blank'>{btn.Name}</a></button>
                    </div>
                    })}

                      {/* Social Icons */}
                    <div className='Social-Icons'>
                        <a href="https://app.slack.com" target='_blank' rel='noreferrer'><img src={Slack} alt="Slack App" /></a>
                        <a href="https://github.com/Adesina-Abiodun" target='_blank' rel='noreferrer'><img src={Github} alt="Github App" /></a>
                    </div>
                </section>
                <hr />

                    {/* FOOTER  */}
                <footer>
                    <p className='Zuri'>Zuri<span>.</span>Internship</p>
                    <p className='HNG'>HNG Internship 9 Frontend Task</p>
                    <img src={I4GLogo} alt="Ingressive For Good Logo" />
                </footer>
        </ div>
     );
}
 
