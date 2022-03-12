import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Intro from "./components/Intro";
import WorkList from "./components/WorkList";
import About from "./components/About";
import Contact from "./components/Contact";
import { useState } from "react";
import MsgToast from "./components/MsgToast";

function App() {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  return (
    <>
      <MsgToast
        showToast={showToast}
        setShowToast={setShowToast}
        toastMsg={toastMsg}
        setToastMsg={setToastMsg}
      />
      <Header />
      <Intro setShowToast={setShowToast} setToastMsg={setToastMsg} />
      <div className="background">
        <Container className="py-5">
          <WorkList />
          <About />
          <Contact setShowToast={setShowToast} setToastMsg={setToastMsg} />
        </Container>
      </div>
    </>
  );
}

export default App;
