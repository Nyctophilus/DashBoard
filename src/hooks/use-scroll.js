import { useEffect, useState } from "react";

const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", scrollHandler);

    return () =>
      window.removeEventListener("scroll", scrollHandler);
  }, []);

  return scrolled;
};

export default useScroll;
