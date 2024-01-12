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
              <Image
                className="blackjackImage"
                src="https://media.istockphoto.com/id/1420518918/vector/blackjack-icon-flat-style-vector-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=a3WpuAt-cEzO1rNAPasLfi6FgwTTepKNm10194yOEUg="
                alt="BlackJack game"
              ></Image>
              <h5 class="card-title">BlackJack</h5><hr/>
              <p class="card-text">
                Quick BlackJack game I made using PyGame Game can be downloaded
                as a folder / .zip file and ran through main.exe
              </p>
              <footer className="cardFooter">
                <a
                  href="https://github.com/cduarte3/blackjack"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Play BlackJack
                </a>
              </footer>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <Image
                className="fragmentsImage"
                src="https://pbs.twimg.com/profile_images/1641476962362302464/K8lb6OtN_400x400.jpg"
                alt="Fragments Microservice"
              ></Image>
              <h5 class="card-title">Fragments Microservice</h5><hr/>
              <p class="card-text">
                Uses Parcel, Docker, and AWS (EC2, ECS, ECR, CLI, S3 bucket,
                dynamoDB, cloudWatch). Also includes hurl testing and jest
                testing
              </p>
              <footer className="cardFooter">
                <a
                  href="https://youtu.be/D5WmuvlWnvE?si=ZXQuY5x78RML0oOr"
                  target="_blank"
                  class="btn btn-primary"
                >
                  View live demo
                </a>
              </footer>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <Image
                className="weatherImage"
                src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png"
                alt="Weather App"
              ></Image>
              <h5 class="card-title">Weather App</h5><hr/>
              <p class="card-text">
                Utilizes OpenWeather API and geocode.maps.co lat/long API and is
                simple a way to showcase some of my skills
              </p>
              <footer className="cardFooter">
                <a
                  href="https://weather-app-gamma-cyan-66.vercel.app"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check the weather
                </a>
              </footer>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <Image
                className="upcomingImage"
                src="https://play-lh.googleusercontent.com/jEKG7gqSV00XWf1Kx5ZSTpwFSoOcANQ1zvuUb3b_h9nd3HtdrkXGMSw7kkb_lcWd6BU"
                alt="Upcoming Project"
              ></Image>
              <h5 class="card-title">Coming Soon</h5><hr/>
              <p class="card-text">
                Currently working on more projects Projects will be added here
                when complete, visit my github in the meantime
              </p>
              <footer className="cardFooter">
                <a
                  href="https://github.com/cduarte3"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Visit Github
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
