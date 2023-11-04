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
            image = "1dyObyldoCceHO8dhhQl_i-ZliQhrOurN"
            name = "Taylor Baugher"
            major = "Biomedical Engineering"
            year = "3rd year"
            email = "taybaugher2003@gmail.com"
            resume = "https://drive.google.com/open?id=1S6IigP8rJVFmBOWKAW426mwn9LnrPby0"
            linkedin = "www.linkedin.com/in/taylor-baugher"
            position = "right"
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
            image = "1-L4keksTuIgHNaALtguxACIIZLNtAvhO"
            name = "Arina Kucinskaja"
            major = "Biomedical Engineering"
            year = "2nd year"
            email = "akucinskaja3@gatech.edu"
            position = "center"
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
            image = "1I6cm_kmWiKGisTUEu-10N73PC1-VhJwH"
            name = "Morgan Duvall"
            major = "Computer Science"
            year = "3rd year"
            email = "mduvall3@gatech.edu"
            resume = "https://drive.google.com/open?id=1rI5p6OtQ6KVXUGx8ZYL0_4ieclI69UyW"
            linkedin = "https://www.linkedin.com/in/morgan-duvall/"
          />
          <MemberCard
            image = "1i4RgE1fITaMdOC4Zd6Pik4C8BsL8AcKB"
            name = "Alan Tian"
            major = "Computer Science"
            year = "1st year"
            email = "atian31@gatech.edu"
            resume = "https://drive.google.com/open?id=1AqJlIRMqYOd2Q9xzCHg0ahojgOqpvmeS"
            website = "https://alantian2018.github.io/"
            github = "https://github.com/alantian2018"
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
            image = "1P6YF1j_XUdGer-OsbNY91iOX_Lk2Mw1K"
            name = "Mia Denning"
            major = "Biology"
            year = "3rd year"
            email = "mdenning6@gatech.edu"
            resume = "https://drive.google.com/open?id=1RGqVB5WnIIIEUc7WoxB5OYmX8uclVXqM"
            linkedin = "https://www.linkedin.com/in/miadenning1234/"
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
          <MemberCard
            image = "1VIOQhUTeVyPHWxwhjP1W-vwX8fPqxVYn"
            name = "Om Malavde"
            major = "Biomedical Engineering"
            year = "1st year"
            email = "omalavde3@gatech.edu"
            resume = "https://drive.google.com/open?id=1VV75KAtH8xfbwoGMGj1i8CKe4GxrjiU_"
            linkedin = "https://www.linkedin.com/in/om-malavde-8612b4292"
            github = "https://github.com/om-malavde"
          />
          <MemberCard
            image = "1vp8SMK6h34Oflr6s8BnCr2_2_ktFJDnY"
            name = "Nia Meadows"
            major = "Master's student"
            year = "Bioinformatics"
            email = "nmeadows6@gatech.edu"
            linkedin = "https://www.linkedin.com/in/nia-meadows-a3929214a/"
          />
          <MemberCard
            image = "1cUNKXBuJHac1otYKydK-bjvZrH4g1Bea"
            name = "Kathleen Hanna De Key"
            major = "Biomedical Engineering"
            year = "1st year"
            email = "kkey35@gatech.edu"
            resume = "https://drive.google.com/open?id=1856mSAWF-TU8b9EjWZvpLT3GOJ8tZkl1"
            github = "https://github.gatech.edu/kkey35"
          />
          <MemberCard
            image = "1zM694Zvkxz7T1i7jjM56YNLbVuY3xw-D"
            name = "Layla Libanan"
            major = "Biomedical Engineering"
            year = "1st year"
            email = "llibanan3@gatech.edu"
            resume = "https://drive.google.com/open?id=19EHwhvv3q9M8DmXkTDauRv2jgChGUJaC"
          />
          <MemberCard
            image = "1A3E_tsTxFC8POgXhgWW5P4lgLKZ0-_WT"
            name = "Sonali Kaluri"
            major = "Biology"
            year = "2nd year"
            email = "skaluri3@gatech.edu"
            resume = "https://drive.google.com/open?id=1704U3eVej9FYJJnUfjqLpw0XPwvqrfBq"
          />
          <MemberCard
            image = "1oy9u-0HO5ks0BmZQAg92sgQu7FbTR1jY"
            name = "Honoka Miura"
            major = "Biochemistry"
            year = "4th year"
            email = "hmiura3@gatech.edu"
            resume = "https://drive.google.com/open?id=1RB6NtD_DM2zLCt3-a9sLT9djS0U5aP26"
            linkedin = "www.linkedin.com/in/honoka-miura-279b131b5"
          />
          <MemberCard
            image = "17p7yI-pTF6XVJDCY03mjw3v4P-OZt-ec"
            name = "Venkatesan Sundar"
            major = "Computer Science"
            year = "2nd year"
            email = "vsundar@gatech.edu"
            resume = "https://drive.google.com/open?id=1PqL5_oXeJ_JlFBEmrSxcivS7COnnsdlu"
            linkedin = "https://www.linkedin.com/in/venkatesan-sundar-5891a720b"
          />
          <MemberCard
            image = "1yuziO5Z0JiDMjObcqrzAk62cWc6JI_o4"
            name = "Vikram Kaushik"
            major = "Biomedical Engineering"
            year = "5th year"
            email = "vkaushik32@gatech.edu"
            resume = "https://drive.google.com/open?id=19gcVpz1LITTjXZF8h1TV3S0Lacs-MlrA"
            linkedin = "https://www.linkedin.com/in/vikram-kaushik/"
            github = "https://github.com/vix-bram"
          />
          <MemberCard
            image = "1s7Gaj7c7oyouqJNO3tf4BnUAEx5M3KCB"
            name = "Akhil Ganesan"
            major = "Biomedical Engineering"
            year = "1st year"
            email = "akhil.ganesan@gatech.edu"
            resume = "https://drive.google.com/open?id=12Wzgw1crqPkimyFNP4xpjz_c4bmR0ZWM"
            linkedin = "https://www.linkedin.com/in/akhil-ganesan"
            github = "https://github.com/akhil-ganesan"
          />
          <MemberCard
            image = "1u_2tUUm5bx7ushpKsHkCCzc41E4l4q0f"
            name = "Jaehui Byun"
            major = "Biomedical Engineering"
            year = "3rd year"
            email = "jbyun43@gatech.edu"
            resume = "https://drive.google.com/open?id=19xq1mooWAyon5TFAf7LVtfRflyz00va_"
          />
          <MemberCard
            image = "1VjHiBa0KUJBRs6JWQfY0-8mUN9IcMBGZ"
            name = "Pranjal Gehlot"
            major = "Biomedical Engineering"
            year = "3rd year"
            email = "pranjalgehlot@gmail.com"
            resume = "https://drive.google.com/open?id=1K8U9dZqQdU7X5TdaWYt9atz18W_uhNYj"
            linkedin = "https://www.linkedin.com/in/pranjal-gehlot/"
            position = "center"
          />
          <MemberCard
            image = "1BaY5vNRLDVXpUL9kCkDsHVAFqRLPxX1w"
            name = "Saanvi Molugu"
            major = "Computer Science"
            year = "2nd year"
            email = "saanvi.molugu@gmail.com"
            resume = "https://drive.google.com/open?id=1B14WNyfaiNsAjNY7F4eVB-Y8_fMyqAqf"
            linkedin = "https://www.linkedin.com/in/saanvi-m-387a94211/"
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
            position = ""
          /> */}
      </div>
      <div class="buttonClass">
        <a href="https://forms.gle/SLE7vUzfkgah5eyZA" target='_blank' rel="noreferrer">
          <button class="button">
              Click here to upload your profile
          </button>
        </a>
      </div>
    </>
  );
}

export default Members;