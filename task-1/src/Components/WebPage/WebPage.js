import './WebPage.css'
import "@fontsource/inter"

import User from '../../Assets/round1.png'
import Arrow from '../../Assets/Icons/Arrow.svg'
import Dots from '../../Assets/Icons/Dotted.svg'

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
        <section id="container">
                                    {/* Main-Section */}
            <body className="Main-section">

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

                </body>

        </section>
     );
}
 
