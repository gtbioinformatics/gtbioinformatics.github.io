import './MemberCard.css'
import styled from "styled-components"

import Email from '../assets/icons/Email.svg'
import Resume from '../assets/icons/Resume.svg'
import LinkedIn from '../assets/icons/LinkedIn.svg'
import Website from '../assets/icons/Engage.svg'
import Github from '../assets/icons/Github.svg'

function About(props) {

    // const fs = require('fs'); // Node.js file system module
    // const csv = require('csv-parser'); // CSV parsing library

    // function parseCSV(filePath, callback) {
    //     const results = [];

    //     fs.createReadStream(filePath)
    //         .pipe(csv({ headers: true }))
    //         .on('data', (data) => {
    //             // Extract relevant fields and create an object
    //             const {
    //                 'Full Name:': fullName,
    //                 'Email Address:': emailAddress,
    //                 'Photo:': Photo,
    //                 'Resume:': Resume = '',
    //                 'LinkedIn URL:': LinkedInURL = '',
    //                 'Personal website URL': personalWebsiteURL = '',
    //                 'Github URL': githubURL = '',
    //             } = data;

    //             // Create an object with the extracted data
    //             const obj = {
    //                 fullName,
    //                 emailAddress,
    //                 Photo,
    //                 Resume,
    //                 LinkedInURL,
    //                 personalWebsiteURL,
    //                 githubURL,
    //             };

    //             results.push(obj);
    //         })
    //         .on('end', () => {
    //             callback(null, results);
    //         })
    //         .on('error', (error) => {
    //             callback(error);
    //         });
    //     return results;
    // }

    // const filePath = '../assets/StudentProfiles.csv';

    // const studentProfiles = parseCSV(filePath, (error, data) => {
    //     if (error) {
    //       console.error('Error parsing CSV:', error);
    //     } else {
    //       console.log('Parsed CSV data:', data);
    //     }
    // });

    function handleImage(id) {
        return "https://drive.google.com/uc?export=view&id=" + id;
    }

    function handleEmail(email) {
        return "mailto:" + email;
    }

    const Profile = styled.img`
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: translate(-50%, 0);
        object-position: ${props.position ? props.position : 'top center'};
    `;

    return (
        <div className='profile'>
            <div className='imageContainer'>
                <Profile src={handleImage(props.image)}/>
            </div>
            <div className='name'>{props.name}</div>
            <div className='major'><strong>Major: </strong>{props.major}</div>
            <div className='year'><strong>Year: </strong>{props.year}</div>
            <div className='socials'>
                <ul className='socialLinks'>
                    <li className='links'><a href={handleEmail(props.email)}><img src={Email} className='socialIcon'/></a></li>
                    {props.resume ? <li className='links'><a href={props.resume} target='_blank' rel="noreferrer"><img src={Resume} className='socialIcon'/></a></li> : <></>}
                    {props.linkedin ? <li className='links'><a href={props.linkedin} target='_blank'><img src={LinkedIn} className='socialIcon'/></a></li> : <></>}
                    {props.website ? <li className='links'><a href={props.website} target='_blank' rel="noreferrer"><img src={Website} className='socialIcon'/></a></li> : <></>}
                    {props.github ? <li className='links'><a href={props.github}  target='_blank' rel="noreferrer"><img src={Github} className='socialIcon'/></a></li> : <></>}
                </ul>
            </div>
        </div>
    );
}

export default About;