import './Members.css'
import MemberCard from './MemberCard'

function Members() {
  return (
    <>
      <div className='ourMembers'>Our Members</div>
      <div className='members'>
          <MemberCard
            image = "1ZEcC3tG5SxqKTObEt6VSzeJloERonSrD"
            name = "Rohit Vemuri"
            major = "Computer Science"
            year = "4th year"
            email = "rohitvemuri@gatech.edu"
            resume = "https://rohitvemuri.github.io/resources/VemuriRohit2023.pdf"
            linkedin = "https://www.linkedin.com/in/rohit-vemuri/"
            website = "rohitvemuri.github.io"
            github = "https://github.com/RohitVemuri"
          />
          <MemberCard
            image = "1iACLdMGkHtunfFQqoLMIX6pCae2rGjFe"
            name = "Harrison Vassar"
            major = "Biomedical Engineering"
            year = "1st year"
            email = "hvassar3@gatech.edu"
            resume = "https://drive.google.com/open?id=1R9NRk4K_JB8vdS_42IalGleug0CF6THO"
            linkedin = "https://www.linkedin.com/in/harrison-vassar"
          />
          <MemberCard
            image = "1HnpCzTwHYtLgYTj7rhDGRjL_l5ut5Oyc"
            name = "Sanyu Kigudde"
            major = "Biomedical Engineering"
            year = "2nd year"
            email = "skigudde3@gatech.edu"
            resume = "https://drive.google.com/open?id=1yHD3hExE9fQh_G4EVIP0q6s7eawUjS9s"
            linkedin = "https://www.linkedin.com/in/sanyukigudde/"
          />
          <MemberCard
            image = "19FPxN9HU1DJkep35ELajKggOG1uOTnKW"
            name = "Adarsh Nallapa"
            major = "Biomedical Engineering"
            year = "1st year"
            email = "anallapa6@gatech.edu "
            resume = "https://drive.google.com/open?id=1ZZbJXsqOieMcD0dhr_2WTONMAdez9U-G"
            linkedin = "www.linkedin.com/in/adarsh-nallapa-b61203281"
          />
          <MemberCard
            image = "1gHM-cK724ZQ3KoXEfQbKXZ4S1qxjY84V"
            name = "Sritej Ponna"
            major = "Biomedical Engineering"
            year = "1st year"
            email = "sponna3@gatech.edu"
            resume = "https://drive.google.com/open?id=1AzmAFBcS-ZpY4MgcYMSvOrtvLteI8kBc"
            linkedin = "www.linkedin.com/in/sritej-ponna-276b07281"
          />
          <MemberCard
            image = "1I0cHRJmPoEzhkr2TEjOCh2mWCdTdq0Pd"
            name = "Aravinth Venkatesh Natarajan"
            major = "Computer Science"
            year = "2nd year"
            email = "anatarajan62@gatech.edu"
            resume = "https://drive.google.com/open?id=19qu3Abg2AUJwgC8vuzvdvdwlnOUmcDPx"
            linkedin = "https://www.linkedin.com/in/aravinth-venkatesh-natarajan-0586671a1/"
            github = "https://github.com/Aravinth-Natarajan"
          />
          <MemberCard
            image = "1aEKercQ4CUjfscLMMIMn5xFfc0VWMczt"
            name = "Thomas Wang"
            major = ""
            year = ""
            email = "wangthomas.2004@gmail.com"
            resume = ""
            linkedin = ""
            website = ""
            github = ""
          />
          <MemberCard
            image = ""
            name = ""
            major = ""
            year = ""
            email = ""
            resume = ""
            linkedin = ""
            website = ""
            github = ""
          />
      </div>
    </>
  );
}

export default Members;