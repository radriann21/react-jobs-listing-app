import { Header } from "./components/Header";
import { JobsContainer } from "./components/JobsContainer";

function App() {
  return (
    <main className="relative max-w-full min-h-screen bg-neutral-light-grayish-cyan flex items-center justify-center flex-col p-4 sm:p-0">
      <div className="top-0 left-0 absolute w-full h-[140px] bg-primary-desaturated-dark-cyan bg-mobile-pattern md:bg-desktop-pattern bg-cover bg-no-repeat"></div>
      <Header />
      <JobsContainer />
    </main>
  );
}

export default App;
