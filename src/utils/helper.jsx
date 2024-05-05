import React from "react";
import img1 from "../assets/img/bg_img1.svg";
import img2 from "../assets/img/bg_img2.svg";
import img3 from "../assets/img/bg_img3.svg";
import img4 from "../assets/img/bg_img4.svg";
import img5 from "../assets/img/tsv.svg";

import img11 from "../assets/header_img.png";
import img21 from "../assets/4.jpg";
import img31 from "../assets/20.jpg";
import img41 from "../assets/25.jpg";
import img51 from "../assets/27.jpg";

import img22 from "../assets/BCC23IMG_1.png";
import img23 from "../assets/step2.jpg";
import img24 from "../assets/step3.jpg";

import arrow_black from "../assets/Arrow Right.svg";
import arrow_white from "../assets/ArrowWhite.svg";

export const timeline = [
  {
    id: 1,
    title: "Registration Begins",
    data: "March 1",
    arrow: arrow_white,
    color: "white",
    bg_color: "black",
    bg_image: img1,
    class_name: "timeline-item-1",
  },
  {
    id: 2,
    title: "Registration Ends",
    data: "April 15",
    arrow: arrow_black,
    color: "black",
    bg_color: "#F9BA04",
    bg_image: img2,
    class_name: "timeline-item-2",
  },
  {
    id: 3,
    title: "Top 10 Teams Announced",
    data: "May 05",
    arrow: arrow_black,
    color: "black",
    bg_color: "#00A8FF",
    bg_image: img3,
    class_name: "timeline-item-3",
  },
  {
    id: 4,
    title: "BCC Demo Day",
    data: "June 08",
    arrow: arrow_white,
    color: "white",
    bg_color: "#4C25EF",
    bg_image: img4,
    class_name: "timeline-item-4",
  },
];
export const register = [
  {
    id: 1,
    title: "Create a Team",
    info: "Create a team of a maximum of 5 members",
    color: "white",
    bg_color: "#4C25EF",
    image: img22,
    arrow: arrow_white,
  },
  {
    id: 2,
    title: "Solve a Problem",
    info: "Solve a problem in your community which falls under the UNSDGs using your skills.",
    color: "black",
    bg_color: "#F9BA04",
    image: img23,
    arrow: arrow_black,
  },
  {
    id: 3,
    title: "Submit a Solution",
    info: "Register your team and submit your projects via the BCC official website.",
    color: "white",
    bg_color: "#000",
    image: img24,
    arrow: arrow_white,
  },
];
export const headerImages = [
  {
    id: 1,
    image: img11,
  },
  {
    id: 2,
    image: img21,
  },
  {
    id: 3,
    image: img31,
  },
  {
    id: 4,
    image: img41,
  },
  {
    id: 5,
    image: img51,
  },
];

export const question = [
  {
    id: 1,
    title: "Do I have to allow the use of cookies?",
    info: "Organized by the Bamenda Tech Community, the challenge is open to individuals and teams who have innovative ideas and projects that address important social, economic, and environmental challenges facing the community. Participants are encouraged to submit projects that leverage technology to create solutions that have a positive impact on the community. The Bamenda Community Challenge provides an excellent opportunity for aspiring entrepreneurs to receive mentorship, training, and funding to help develop their ideas into viable businesses. The competition has attracted a wide range of participants from various sectors including health, education, agriculture, and finance.",
  },
  {
    id: 2,
    title:
      "What kind of projects is the Bamenda Community Challenge looking for?",
    info: "We're seeking innovative and impactful solutions that address real needs faced by the Bamenda community. This could include projects related to education, healthcare, economic development, infrastructure, environment, or social issues. We encourage creative approaches and projects that empower the community itself.",
  },
  {
    id: 3,
    title: "Who can participate in the Bamenda Community Challenge?",
    info: "The Challenge is open to everyone! Individuals, student groups, community organizations, businesses, and NGOs are all welcome to participate. We encourage collaboration and teamwork to bring together diverse perspectives and expertise.",
  },
  {
    id: 4,
    title: "What resources are available to participants?",
    info: "Participants will have access to a variety of resources to support their project development. This may include online workshops, mentorship opportunities with experienced professionals, access to research materials, and potential funding for winning projects.",
  },
  {
    id: 5,
    title: "How will the projects be judged?",
    info: `<p>Projects will be evaluated based on four key criteria:  <ul>
  <li><b>Impact</b>: Does the project address a significant need and create positive change for the community?</li>
  <li><b>Sustainability:</b> Can the project be implemented and maintained in the long term?</li>
  <li><b>Prototype:</b> Is the project idea clear, and does the prototype effectively showcase the solution?</li>
  <li><b>Scalability:</b> Can the project be replicated to serve more people or address broader issues?</li>
</ul>
</p>
`,
  },
  {
    id: 6,
    title:
      "What are the benefits of participating in the Bamenda Community Challenge?",
    info: "Participating in the Challenge offers a chance to make a real difference in your community. You'll gain valuable skills in project development, teamwork, and innovation. Winners will receive funding and resources to bring their project to life, and all participants will have the opportunity to network with other passionate individuals and organizations working to improve Bamenda.",
  },
];
