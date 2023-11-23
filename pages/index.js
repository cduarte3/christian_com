import MainNav from "@/components/MainNav";
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
            <li><a href="https://www.instagram.com/christian.duarte7/" target="_blank"><Image src="https://drive.google.com/uc?export=view&id=1v8Q3sElA08L4GHW4PpP8guLu05c46tyf" alt="Instagram" class="instagram"></Image></a></li>
            <li><a href="mailto:christian.duarte7@outlook.com" target="_blank"><Image src="https://drive.google.com/uc?export=view&id=1NuHc25Xd8J1fZEKwfDhCkqbMaN8KP8e_" alt="Email" class="email"></Image></a></li>
            <li><a href="https://github.com/cduarte3" target="_blank"><Image src="https://drive.google.com/uc?export=view&id=1tLxE6QPzKCw5tHXMRbsOUfBCrQd36z7m" alt="Github"></Image></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank"><Image src="https://drive.google.com/uc?export=view&id=1YxXAunv7eoWzM91ZBHmYoXPxjnLvyTrA" alt="LinkedIn"></Image></a></li>
          </ul>
        </div>
        <h2>↓</h2>
      </div>
      <div className="hello">
        <h1>About Me</h1>
        <Image src="https://drive.google.com/uc?export=view&id=1_YzLL2sh0OrIq2n745oyt_9mFDjqxfdX" alt="Me" width="400" height="540" className="imageAbout"></Image>
        <h4><span class="tab"></span>Hello! My name is Christian Duarte, and if you are reading this, you are
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
          Currently I am 20 years old and am attending Seneca College at the Newnham Campus approaching
          my third year of studies.
          <br/><br/>
          <span className="tab"></span>
          The program I am enrolled in is the (BSD) Honours Bachelor of Technology - Software Development Program. A 4 year course, in which I intend to
          complete, and hopefully graduate with honours.
        </h4>
      </div>
      <div className="interests">
        <h1>Interests</h1>
        <h4>
          As of late, my major interests have been any type of physical activities. These include going to the gym 4-5 times a week, and playing mens league soccer 1-2 times a week.
          <br/><br/>
          Aside from physical activities I enjoy watching movies and tv shows, playing video games, and hanging out with friends. Notably I enjoy horror, thriller, comedy, or superhero movies. I also
          collect comic books, mainly spier-man comics, as spider man is my favourite superhero, and I also enjoy anything to do with star wars.
          <br/><br/>
          I do enjoy programming, and working on frontend or backend of software, but I find it hard to do programming tasks on my own at home sometimes for personal tasks. I prefer more of a team environment
          and like working on larger scale projects with others.
        </h4>
      </div>
    </>
  )
}