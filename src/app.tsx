import { useState } from "react";
import styles from "./app.module.css";
import { About, Panel, Quest, Video, Calc } from "./components";

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.app}>
      <Panel />
      <About />
      <Video />
      <Quest active={active} setActive={setActive} />
      {active ? <Calc active={active} setActive={setActive} /> : null}
    </div>
  );
}

export default App;
