import MainNav from "@/components/MainNav";
import Image from "react-bootstrap/Image";

export default function Projects() {
  return (
    <>
      <MainNav />
      <div className="myProjects">
        <h1>My Projects</h1>
        <h4>
          <span className="tab"></span>
          This is a list of my current projects that I have completed. If you
          have any ideas for a project that I could do, or you would like to
          see, please leave a comment in the feedback board.
          <br />
          <br />
          Any future projects will be added here upon completion. As well, any
          feedback is appreciated.
        </h4>
        <div class="row">
          <div class="col-sm-3">
            <div class="card">
              <Image className="blackjackImage" src="https://www.crownmelbourne.com.au/getsydmedia/1ff6eae7-e99d-4a0e-b8ef-b23e1965ed69/220815-Crown-Melbourne-Gaming-Blackjack-1800x1200px-6.jpg?height=1199" alt="BlackJack game"></Image>
              <br/>
              <div class="blackjackBody">
                <h5 class="card-title">BlackJack</h5>
                <p class="card-text">
                  Quick BlackJack game I made using PyGame
                  <br />
                  Game can be downloaded as a folder / .zip file and ran through main.exe
                </p>
                <a href="https://github.com/cduarte3/blackjack" target="_blank" class="btn btn-primary">
                  Play BlackJack
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <Image className="fragmentsImage" src="https://assets.intersystems.com/dims4/default/a9dad27/2147483647/strip/true/crop/780x422+0+0/resize/780x422!/quality/90/?url=http%3A%2F%2Finter-systems-brightspot.s3.amazonaws.com%2F26%2Fbd%2F6a6aa762425f87ad7d5c2fe65f8c%2Fawslogo-image.jpg" alt="Fragments Microservice"></Image>
              <br/>
              <div class="fragmentBody">
                <h5 class="card-title">Fragments Microservice</h5>
                <p class="card-text">
                  Uses Parcel, Docker, and AWS (EC2, ECS, ECR, CLI, S3 bucket, dynamoDB, cloudWatch). Also includes hurl testing and jest testing
                </p>
                <a href="https://youtu.be/D5WmuvlWnvE?si=ZXQuY5x78RML0oOr" target="_blank" class="btn btn-primary">
                  View live demo
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <Image className="weatherImage" src="https://www.pngkey.com/png/full/894-8942739_cold-clipart-harsh-weather-bad-weather-clip-art.png" alt="Weather App"></Image>
              <br/>
              <div class="weatherBody">
                <h5 class="card-title">Weather App</h5>
                <p class="card-text">
                  Utilizes OpenWeather API and geocode.maps.co lat/long API and is simple a way to showcase some of my skills
                </p>
                <a href="https://weather-app-gamma-cyan-66.vercel.app" target="_blank" class="btn btn-primary">
                  Check the weather
                </a>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <Image className="upcomingImage" src="https://codeant.org/wp-content/uploads/2023/04/codin-projects-for-kids.png" alt="Upcoming Project"></Image>
              <br/>
              <div class="upcomingBody">
                <h5 class="card-title">Coming Soon</h5>
                <p class="card-text">
                  Currently working on more projects
                  <br />
                  Projects will be added here when complete, visit my github in the meantime
                </p>
                <br/>
                <a href="https://github.com/cduarte3" target="_blank" class="btn btn-primary">
                  Visit Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
