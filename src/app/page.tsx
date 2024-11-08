import Navbar from "./components/navbar";
import Hero from "./components/hero";
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>
export default function Home(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      
    </div>
  )
}
