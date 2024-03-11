import { PiLeaf } from "react-icons/pi";
import { GiArcheryTarget } from "react-icons/gi";
import { MdLockOutline } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

const featuredata = [
  {
    id: "01",
    icon: <PiLeaf />,
    title: "Integration ecosystem",
    discription: "Track your progress and motivate your efforts everyday.",
    learn_more: "Learn More ->",
  },
  {
    id: "02",
    icon: <GiArcheryTarget />,
    title: "Goal setting and tracking",
    discription: "Set and track goals with manageable task breakdowns.",
    learn_more: "Learn More ->",
  },
  {
    id: "03",
    icon: <MdLockOutline />,
    title: "Secure data encryption",
    discription: "Ensure your data's safety with top-tier encryption.",
    learn_more: "Learn More ->",
  },
  {
    id: "04",
    icon: <IoIosNotificationsOutline />,
    title: "Customizable notifications",
    discription: "Get alerts on tasks and dead lines that matter most.",
    learn_more: " Learn More ->",
  },
];
export default featuredata;
