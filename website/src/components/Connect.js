import './Connect.css'

import image01 from '../assets/images/about01.png'
import image02 from '../assets/images/about02.png'

import Discord from '../assets/icons/Discord.svg'
import Instagram from '../assets/icons/Instagram.svg'
import MailingList from '../assets/icons/MailingList.svg'
import Engage from '../assets/icons/Engage.svg'
import Email from '../assets/icons/Email.svg'

function Connect() {
    function onToastClick() {
        navigator.clipboard.writeText('bioinformatics.gt@gmail.com');

        var x = document.getElementById("snackbar");
        console.log(x);
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }

    return (
        <div className='connect'>
            <div className='images'>
                <img src={image01} className='contactImage'/>
                <img src={image01} className='contactImage'/>
                <img src={image01} className='contactImage'/>
            </div>
            <div className='connectBody'>
                <div className='heading'>Connect with Us</div>
                <div className='connectIcons'>
                    <ul className='connectIconsList'>
                        <li className='icon'><a href='https://discord.gg/ddJ2E8Xwgt' target='_blank'><img src={Discord} /></a></li>
                        <li className='icon'><a href='https://www.instagram.com/gtbioinformatics/' target='_blank'><img src={Instagram} /></a></li>
                        <li className='icon'><a href='https://forms.gle/AZvyu5chshqgAin48' target='_blank'><img src={MailingList} /></a></li>
                        <li className='icon'><a href='https://gatech.campuslabs.com/engage/organization/bioinformatics-at-gt' target='_blank'><img src={Engage} /></a></li>
                        <li className='icon'><a href="#" onClick={onToastClick}><img src={Email} /></a></li>
                    </ul>
                </div>
            </div>
            <div id="snackbar">Email copied to clipboard!</div>
        </div>
    );
}

export default Connect;