import classes from "./Avatar.module.scss";

const Avatar = ({ openSubMenuHanlder }) => {
  const clickHandler = (e) =>
    openSubMenuHanlder(e, "avatar");

  return (
    <div className={classes.avatar} onClick={clickHandler}>
      <img
        src="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/avatars/1.png"
        alt="account avatar"
      />
    </div>
  );
};

export default Avatar;
