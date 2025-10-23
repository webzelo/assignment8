import { useState, useEffect } from "react";
import { ArrowBigUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-2 rounded-full text-gray-600 font-bold border-2 border-gray-600 shadow-lg transition-opacity ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <ArrowBigUp />
    </button>
  );
};

export default ScrollToTop;
