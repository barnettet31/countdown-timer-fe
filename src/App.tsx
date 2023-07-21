import { Footer } from "./components/footer.component";
import { TimeCounter } from "./components/time-counter.component";

function App() {
  //targetDate is right now plus 14 days in milliseconds

  return (
    <main className="flex flex-col justify-between w-full h-full">
      <div className="flex flex-col h-full pt-36">
        <h1 className="mb-32 text-lg font-bold tracking-[6.136px] text-center text-white uppercase lg:text-2xl">
          We're Launching Soon
        </h1>
        <TimeCounter/>
      </div>
      <Footer/>
    </main>
  );
}

export default App;
