import { useState } from "react";
import style from "./Accordion.module.css";
import { motion } from "motion/react";
import { animate } from "motion";
import { stagger } from "motion";

animate([
  // ["div", { opacity: 1 }],
  ["div", { x: [-100, 0] }, { delay: stagger(0.2) }],
]);

const Accordion = ({ items }) => {
  const [selectedIndex, setIndex] = useState(-1);

  const modifyIndex = (value) => {
    setIndex(value === selectedIndex ? -1 : value);
  };

  return (
    <div className={style.accordionWrapper}>
      {items.map((element, index) => {
        return (
          <div key={element.id} className={style.accordionItemWrapper}>
            <button
              className={style.accordionBtn}
              onClick={() => {
                modifyIndex(index);
              }}
            >
              {element.title}
            </button>

            {index === selectedIndex && (
              <motion.div
                className={style.accordionContent}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
              >
                <p>{element.content}</p>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
