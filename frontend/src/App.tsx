import NotificationButton from "./Components/NotificationButton";
import Logo from "../src/Components/Header/index";
import SalesCard from "./Components/SalesCard";
function App() {
  return (
    <>

      <Logo />
      <main>
        <section id="sales">
          <div className="dsmeta-container"></div>
          <SalesCard />
        </section>
      </main>

    </>
  )
}

export default App;
