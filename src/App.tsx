
import Nav from "./componants/Nav"
import Banner from "./componants/Banner"

import { Suspense } from "react";
import type { ITech } from "./types/tech";
import Tech from "./componants/technologies/tech";
import Footer from "./componants/footer";

const techfetch = async (): Promise<ITech[]> => {
  const response = await fetch("/data.json ");
  const data = await response.json();
  return data;
};

function App() {
  const techPromise = techfetch();

  return (
    <>
      <Nav/>
      <Banner/>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Tech techPromise={techPromise} />
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
