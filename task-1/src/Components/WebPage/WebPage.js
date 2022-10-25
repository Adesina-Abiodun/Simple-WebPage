import './WebPage.css'
import "@fontsource/inter"

import User from '../../Assets/round1.png'
import Arrow from '../../Assets/Icons/Arrow.svg'
import Dots from '../../Assets/Icons/Dotted.svg'

 export const WebPage = () => {
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

                </body>

        </section>
     );
}
 
