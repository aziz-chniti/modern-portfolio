import { useEffect, useState } from "react";

export const useScrollVisibility = (id, offset = 300, item = false) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top <= offset) {
        setIsVisible(true);
      }
      if (item){
        setIsVisible(rect.top <= offset);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check once on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id, offset]);

  return isVisible;
};
