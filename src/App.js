import SignUp from "./SignUp";
import bgDesktop from "./images/bg-intro-desktop.png";
function App() {
  return (
    <main style={{ backgroundImage: { bgDesktop } }} className="App">
      <SignUp />
    </main>
  );
}

export default App;
