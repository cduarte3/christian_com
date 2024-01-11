import MainNav from "@/components/MainNav";
import Image from "react-bootstrap/Image";

export default function Resume() {
  return (
    <>
      <MainNav />
      <div className="vaughan">
        <h1>City of Vaughan</h1>
        <h3>Mechanic Helper - Student</h3>
        <h3>May 2023 - Sep 2023</h3>
        <Image
          src="https://service.vaughan.ca/lobbyistregistry/images/vaughanlogo_cmyk.png"
          alt="City of Vaughan logo"
          className="imageVaughan"
        ></Image>
        <h4>
          <br />
          <br />
          Was under a summer contract in a student position
          <br />
          <br />
          Helped with part pickup / deliveries, daily fuel tank checks at operations centers,
          changing and fixing car parts, checking vehicle engine codes, servicing tractors, moving cars within lot,
          sorting upstairs parts department, and moving packages within operations center.
        </h4>
      </div>
      <div className="skyzone">
        <h1>Skyzone</h1>
        <h3>Court Monitor</h3>
        <h3>Aug 2020 - Sep 2021</h3>
        <Image
          src="https://s21644.pcdn.co/wp-content/uploads/2018/04/sky-zone-logo-1600x1200-1024x768.png"
          alt="Skyzone logo"
          className="imageSZ"
        ></Image>
        <h4>
          <br />
          <br />
          As a court monitor, I was responsible for ensuring the safety of all
          jumpers on the trampolines, and ensuring that they were following the
          rules of the park.
          <br />
          <br />I was also responsible for cleaning the trampolines, and
          ensuring that the park was clean and safe for all jumpers.
        </h4>
      </div>
      <div className="UPS">
        <h1>UPS</h1>
        <h3>Package Handler</h3>
        <h3>June 2022 - Aug 2022</h3>
        <Image
          src="https://1000logos.net/wp-content/uploads/2021/04/UPS-logo.png"
          alt="UPS logo"
          className="imageUPS"
        ></Image>
        <h4>
          <br />
          <br />
          Summer job, left in good standing due to warehouse location changes.
          <br />
          <br />
          Successfully loaded and unloaded several trucks per day, worked with
          others to help on backed up trucks, helped fix belt jams with backlog
          of packages, as well as moving to several sections of the building at
          once if needed, and moved heavy irregular packages on carts to correct
          areas.
        </h4>
      </div>
      <div className="soccer">
        <h1>Vaughan Soccer Club</h1>
        <h3>Kids Soccer Coach</h3>
        <h3>May 2022 - Sep 2023</h3>
        <Image
          src="https://onedrive.live.com/embed?resid=ED7F8ADD900D852F%21349&authkey=%21ABkmyNh_c4-AT0U&width=532&height=469"
          alt="Vaughan Soccer Club logo"
          className="imageSoccer"
        ></Image>
        <h4>
          <br />
          <br />
          Seasonal summer coaching job, will be returning for 2024 season.
          <br />
          <br />
          Successfully coached teams of 12 to 15 children while ensuring
          happiness of parents with on field time, and giving equal
          opportunities to players. Managed multiple games and practices weekly
          while keeping good communication with parents to voice concerns,
          ideas, and more.
        </h4>
      </div>
      <div className="DQ">
        <h1>Dairy Queen</h1>
        <h3>Kitchen Staff Member</h3>
        <h3>March 2021 - Nov 2023</h3>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dairy_Queen_logo.svg/1200px-Dairy_Queen_logo.svg.png"
          alt="City of Vaughan logo"
          className="imageDQ"
        ></Image>
        <h4>
          <br />
          <br />
          Working with a team of anywhere between 3 to 8 people, in charge of making food such as fries, chicken, burgers, using a fryer, grill, etc.
          <br />
          <br />
          Occasionally taking orders for front cash, or drive through window, as well as nightly cleaning of the kitchen and all utensils, as well as bathrooms and sweeping/mopping
        </h4>
      </div>
    </>
  );
}
