import { ReactComponent as Chart } from "../assets/chart.svg";
import { ReactComponent as Dollar } from "../assets/dollar.svg";
import { ReactComponent as Briefcase } from "../assets/briefcase.svg";
import { ReactComponent as Question } from "../assets/question.svg";

const smallBoardsData = [
  {
    svg: <Chart />,
    title: "Total Profit",
    number: "25.6k",
    transaction: "42",
    time: "Weekly Profit",
    color: "rgb(86, 202, 0)",
    isSucess: true,
  },
  {
    svg: <Dollar />,
    title: "Refunds",
    number: "78",
    transaction: "15",
    time: "Past Month",
    color: "rgb(138, 141, 147)",
    isSucess: false,
  },
  {
    svg: <Briefcase />,
    title: "New Project",
    number: "862",
    transaction: "18",
    time: "Yearly Project",
    color: "rgb(145, 85, 253)",
    isSucess: false,
  },
  {
    svg: <Question />,
    title: "Sales Queries",
    number: "15",
    transaction: "18",
    time: "Last Week",
    color: "rgb(255, 180, 0)",
    isSucess: false,
  },
  {
    title: "Ratings",
    number: "13",
    transaction: "38",
    time: "Year of 2021",
    spanColor: "#9155fd",
    isSucess: true,
    img: "https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/img/9.249c7d38.png",
  },
  {
    title: "Sessions",
    number: "24.5k",
    transaction: "22",
    time: "Last Week",
    isSucess: false,
    img: "https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/img/10.c8088c90.png",
  },
];

export default smallBoardsData;
