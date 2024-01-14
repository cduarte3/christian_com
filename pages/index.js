import MainNav from "../components/MainNav";
import Image from 'react-bootstrap/Image';

export default function Home() {
  return (
    <>
      <MainNav />
      <div className="home">
        <h1>Christian Duarte</h1>
        <h3>Social Links:</h3>
        <div id="social-container">
          <ul id="social">
            <li><a href="https://www.instagram.com/christian.duarte7/" target="_blank"><Image src="https://onedrive.live.com/embed?resid=ED7F8ADD900D852F%21348&authkey=%21AFOeJsqxYGQqALs&width=96&height=96" alt="Instagram" className="instagram"></Image></a></li>
            <li><a href="mailto:christian.duarte7@outlook.com" target="_blank"><Image src="https://onedrive.live.com/embed?resid=ED7F8ADD900D852F%21346&authkey=%21ADJiULiAuuEMyes&width=96&height=96" alt="Email" className="email"></Image></a></li>
            <li><a href="https://github.com/cduarte3" target="_blank"><Image src="https://onedrive.live.com/embed?resid=ED7F8ADD900D852F%21350&authkey=%21ABCr4AtxyGzB_Ak&width=96&height=96" alt="Github"></Image></a></li>
            <li><a href="https://www.linkedin.com/in/christian-duarte-97593329b" target="_blank"><Image src="https://onedrive.live.com/embed?resid=ED7F8ADD900D852F%21345&authkey=%21AC7e3iq6O9ZnGrg&width=96&height=96" alt="LinkedIn"></Image></a></li>
          </ul>
        </div>
        <h2>↓</h2>
      </div>
      <div className="hello">
        <h1>About Me</h1>
        <Image src="https://onedrive.live.com/embed?resid=ED7F8ADD900D852F%21344&authkey=%21AE94M8MIDDYL97U&width=3024&height=4032" alt="Me" width="400" height="540" className="imageAbout"></Image>
        <h4><span className="tab"></span>Hello! My name is Christian Duarte, and if you are reading this, you are
          probably interested in who I am and what I have to offer as an aspiring software developer.
          <br/><br/>
          <span className="tab"></span>As you look further into this page, you will find out a little bit more about who I am, what my interests are, etc.
          <br/><br/>
          <span className="tab"></span>Along the top of the page, Ive included some tabs with things such as
          my resume, a list of currently finished and potential projects, and a feedback board for leaving
          me a message, review, or an idea of what to add to the site.
        </h4>
      </div>
      <div className="school">
        <h1>School</h1>
        <Image src="https://polytechnicscanada.ca/wp-content/uploads/2021/02/Seneca-4.png" alt="Seneca College" className="imageSchool"></Image>
        <h4><span className="tab"></span>
          Currently I am 20 years old and am attending Seneca College at the Newnham Campus well into
          my third year of studies with a 3.7 GPA.
          <br/><br/>
          <span className="tab"></span>
          The program I am enrolled in is the (BSD) Honours Bachelor of Technology - Software Development Program. A 4 year course, in which I intend to
          complete, and hopefully graduate with honours.
        </h4>
      </div>
      <div className="interests">
        <h1>Interests and Skills</h1>
        <h4>
          As of late, my major interests have been any type of physical activities. These include going to the gym 4-5 times a week, and playing mens league soccer 1-2 times a week.
          <br/><br/>
          Of my skills that I have learned in my program I have listed the following (but may be missing some)
          <br/><br/>
          Languages: C, C++, CSS, HTML, Javascript, Python
          <br/><br/>
          Frameworks: React, Next.js, Parcel, Docker, Bootstrap, Express.js
          <br/><br/>
          Database: MongoDB, some basic SQL, some AWS dynamoDB and other services
        </h4>
      </div>
    </>
  )
}