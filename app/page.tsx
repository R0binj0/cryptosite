import About from "./components/About";
import List from "./components/List";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-[var(--text-color)]">
      <NavBar></NavBar>
      <About></About>
      <List></List>
      <Footer></Footer>
    </main>
  )
}
