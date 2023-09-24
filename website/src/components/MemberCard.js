import './MemberCard.css'
import image01 from '../assets/images/about01.png'

function About() {

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

    return (
        <div className='profile'>
            <div >
                <img src={image01} className='photo'/>
            </div>
            <div className='title'></div>
            <div className='name'></div>
            <div className='year'></div>
            <div className='major'></div>
            <div className='socials'></div>
        </div>
    );
}

export default About;