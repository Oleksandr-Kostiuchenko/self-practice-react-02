import { useState } from "react";
import "./App.css";

import Accordion from "./components/Accordion/Accordion";

const items = [
  {
    title: "Що таке React?",
    content: "React – це бібліотека для створення UI.",
    id: 1,
  },
  {
    title: "Що таке useState?",
    content: "useState – це хук для керування станом.",
    id: 2,
  },
  {
    title: "Що таке JSX?",
    content: "JSX – це синтаксис, схожий на HTML у JS.",
    id: 3,
  },
];

function App() {
  return (
    <>
      <Accordion items={items} />;
    </>
  );
}

export default App;
