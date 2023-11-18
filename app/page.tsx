import Navigation from "@/components/common/Navigation";
import Sidebar from "@/components/common/sidebar/Sidebar";

export default function Home() {
  return (
    <main className="">
      <Navigation />
      <div className={"grid grid-cols-12"}>
        <Sidebar />
        <div>
          <h1>sdffsd</h1>
        </div>
      </div>
    </main>
  )
}
