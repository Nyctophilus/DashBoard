import { ReactComponent as ArrowRaise } from "../assets/arrowRaise.svg";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Computer } from "../assets/computer.svg";
import { ReactComponent as Dollar } from "../assets/dollar.svg";

const numberingIconsData = [
  {
    img: <ArrowRaise />,
    title: "sales",
    number: "245k",
    color: "rgb(145, 85, 253)",
  },
  {
    img: <User />,
    title: "customers",
    number: "12.5k",
    color: "rgb(86, 202, 0)",
  },
  {
    img: <Computer />,
    title: "products",
    number: "1.54k",
    color: "rgb(255, 180, 0)",
  },
  {
    img: <Dollar />,
    title: "revenue",
    number: "$88k",
    color: "rgb(22, 177, 255)",
  },
];

export default numberingIconsData;
