import { ReactComponent as LoginIcon } from "../assets/login.svg";
import { ReactComponent as RegisterIcon } from "../assets/register.svg";
import { ReactComponent as ErrorIcon } from "../assets/error.svg";
import { ReactComponent as InvoiceIcon } from "../assets/invoice.svg";
import { ReactComponent as UserIcon } from "../assets/user.svg";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as AccountSettingsIcon } from "../assets/accountSettings.svg";

import { ReactComponent as TypographyIcon } from "../assets/typography.svg";
import { ReactComponent as IconsIcon } from "../assets/icons.svg";
import { ReactComponent as CardsIcon } from "../assets/cards.svg";
import { ReactComponent as TablesIcon } from "../assets/tables.svg";
import { ReactComponent as FormIcon } from "../assets/forms.svg";

const sidebarData = [
  {
    section: "none",
    icon: <HomeIcon />,
    title: "dashboard",
  },
  {
    section: "none",
    icon: <AccountSettingsIcon />,
    title: "Account Settings",
  },
  {
    section: "apps and pages",
    icon: <LoginIcon />,
    title: "login",
  },
  {
    section: "apps and pages",
    icon: <RegisterIcon />,
    title: "register",
  },
  {
    section: "apps and pages",
    icon: <ErrorIcon />,
    title: "error",
  },
  {
    section: "apps and pages",
    icon: <InvoiceIcon />,
    title: "Invoice",
  },
  {
    section: "apps and pages",
    icon: <UserIcon />,
    title: "User",
  },
  {
    section: "user interface",
    icon: <TypographyIcon />,
    title: "Typography",
  },
  {
    section: "user interface",
    icon: <IconsIcon />,
    title: "Icons",
  },
  {
    section: "user interface",
    icon: <CardsIcon />,
    title: "Cards",
  },
  {
    section: "user interface",
    icon: <TablesIcon />,
    title: "Tables",
  },
  {
    section: "user interface",
    icon: <FormIcon />,
    title: "Form layouts",
  },
];

export default sidebarData;
