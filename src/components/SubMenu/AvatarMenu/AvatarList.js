import Avatar from "../../../components/Avatar/Avatar";
import classes from "./AvatarList.module.scss";
import { ReactComponent as Logout } from "../../../assets/logout.svg";
import { ReactComponent as Profile } from "../../../assets/profile.svg";
import { ReactComponent as Inbox } from "../../../assets/email.svg";
import { ReactComponent as Chat } from "../../../assets/chat.svg";
import { ReactComponent as Settings } from "../../../assets/gear.svg";
import { ReactComponent as Pricing } from "../../../assets/dollar.svg";
import { ReactComponent as FAQ } from "../../../assets/faq.svg";

const AvatarList = () => {
  return (
    <>
      <div className={classes.heading}>
        <Avatar />
        <div>
          <p>Muhammed</p>
          <p>Fay</p>
        </div>
      </div>

      <div className={classes.sect}>
        <div>
          <button className={classes.svg}>
            <Profile />
          </button>
          profile
        </div>
        <div>
          <button className={classes.svg}>
            <Inbox />
          </button>
          inbox
        </div>
        <div>
          <button className={classes.svg}>
            <Chat />
          </button>
          chat
        </div>
      </div>

      <div className={classes.sect}>
        <div>
          <button className={classes.svg}>
            <Settings />
          </button>
          Settings
        </div>
        <div>
          <button className={classes.svg}>
            <Pricing />
          </button>
          pricing
        </div>
        <div>
          <button className={classes.svg}>
            <FAQ />
          </button>
          FAQ
        </div>
      </div>
      <div className={classes.sect}>
        <div>
          <button className={classes.svg}>
            <Logout />
          </button>
          logout
        </div>
      </div>
    </>
  );
};

export default AvatarList;
