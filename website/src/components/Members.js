import './Members.css'
import MemberCard from './MemberCard'

function Members() {
  return (
    <>
      <div className='ourMembers'>Our Members</div>
      <div className='members'>
          {/* <MemberCard
            image = "1ZEcC3tG5SxqKTObEt6VSzeJloERonSrD"
            name = "Rohit Vemuri"
            major = "Computer Science"
            year = "4th year"
            email = "rohitvemuri@gatech.edu"
            resume = "https://rohitvemuri.github.io/resources/VemuriRohit2023.pdf"
            linkedin = "https://www.linkedin.com/in/rohit-vemuri/"
            website = "rohitvemuri.github.io"
            github = "https://github.com/RohitVemuri"
          /> */}
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
            major = "Computer Science"
            year = "1st year"
            email = "wangthomas.2004@gmail.com"
            resume = "https://drive.google.com/open?id=1fCA3Mr_ap-D1XcIy5CFPBQRqZjbHbJ7x"
            linkedin = "https://www.linkedin.com/in/thomaswang07/"
            github = "https://github.com/peacebypieces"
          />
          <MemberCard
            image = "1X6pv7ovSqN7xXfJpUeqWEibYFRSO1AYq"
            name = "Vignesh Suresh Kumar"
            major = "Computer Science"
            year = "1st year"
            email = "vkumar389@gatech.edu"
            resume = "https://drive.google.com/open?id=1mf_-dohCpK14cj026QZc9_CpW2vXAdqP"
            linkedin = "https://www.linkedin.com/in/vigneshsk1"
            github = "https://www.github.com/VigneshSK17"
            position = "center"
          />
          <MemberCard
            image = "1eLNAP-vLOKTQhiWaYYsqpefkjZhn1mjF"
            name = "Anirudh Sriram"
            major = "Biomedical Engineering"
            year = "2nd year"
            email = "asrira428@gmail.com"
            resume = "https://drive.google.com/open?id=1jy53jJGp_RW1oXxny75nzlduZczJDmzH"
            linkedin = "https://www.linkedin.com/in/anirudh-sriram-b106291b0/"
            position = "center"
          />
          <MemberCard
            image = "1IE2cRZEeY-tw2FdzPbIkfr17kvoR3eAD"
            name = "Harshil Shah"
            major = "Computer Science"
            year = "3rd year"
            email = "sharshil574@gmail.com"
            linkedin = "https://www.linkedin.com/in/harshil-shah315"
          />
          <MemberCard
            image = "1lFuTTFOItfMXhzDNQD5ZQbDkpvz662cg"
            name = "Krissh Bhargava"
            major = "Computer Science"
            year = "1st year"
            email = "krissh.bhargava@gmail.com"
            resume = "https://drive.google.com/open?id=1tbDvf77oHxssMC4_Mdvppv_TYWumzQuV"
            linkedin = "https://www.linkedin.com/in/krissh-bhargava-82751b204/"
          />
          <MemberCard
            image = "13H6J-WnQ3u_hYWKYvxVkmDWP2XcjsRxq"
            name = "Nicole Woo"
            major = "Computer Science"
            year = "4th year"
            email = "nwoo3@gatech.edu"
            resume = "https://drive.google.com/open?id=11HB9yLrV7bChDZXWkH8IBcQfkIUXTmam"
            linkedin = "https://www.linkedin.com/in/nicole-woo-41b023208/"
          />
          <MemberCard
            image = "16iSDBOGiTjIFWWUSCC6F1kE5Rshu-oI3"
            name = "Samyukta Iyer"
            major = "Biomedical Engineering"
            year = "2nd year"
            email = "siyer300@gatech.edu"
            resume = "https://drive.google.com/open?id=1_st7HV8x-vmpMPUmlN9d05_v3TgnQ8Dd"
            linkedin = "https://www.linkedin.com/in/samyuktasainath/"
            website = "https://samyuktasainath.wixsite.com/portfolio/projects"
            github = "https://github.com/samyukta-iyer"
          />
          <MemberCard
            image = "1P6YF1j_XUdGer-OsbNY91iOX_Lk2Mw1K"
            name = "Mia Denning"
            major = "Biology"
            year = "3rd year"
            email = "mdenning6@gatech.edu"
            resume = "https://drive.google.com/open?id=1RGqVB5WnIIIEUc7WoxB5OYmX8uclVXqM"
            linkedin = "https://www.linkedin.com/in/miadenning1234/"
          />
          <MemberCard
            image = "1I6cm_kmWiKGisTUEu-10N73PC1-VhJwH"
            name = "Morgan Duvall"
            major = "Computer Science"
            year = "3rd year"
            email = "mduvall3@gatech.edu"
            resume = "https://drive.google.com/open?id=1rI5p6OtQ6KVXUGx8ZYL0_4ieclI69UyW"
            linkedin = "https://www.linkedin.com/in/morgan-duvall/"
          />
          <MemberCard
            image = "1Md54EUVUess55ugEFqSwyf7nE880aQfI"
            name = "Alessandro Ferrari"
            major = "Computer Science"
            year = "2nd year"
            email = "alessandroferrari@gatech.edu"
            resume = "https://alessandroferrari.live/assets/af-resume.pdf"
            linkedin = "https://linkedin.com/in/alessandroferrari04"
            website = "https://alessandroferrari.live"
            github = "https://github.com/Ferryistaken"
          />
          {/* <MemberCard
            image = ""
            name = ""
            major = ""
            year = ""
            email = ""
            resume = ""
            linkedin = ""
            website = ""
            github = ""
          /> */}
      </div>
      <div class="buttonClass">
        <a href="https://forms.gle/SLE7vUzfkgah5eyZA" target='_blank'>
          <button class="button">
              Click here to upload your profile
          </button>
        </a>
      </div>
    </>
  );
}

export default Members;