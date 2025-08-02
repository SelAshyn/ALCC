import Navbar from './component/Navbar/Navbar';
import Hero from './component/Comp1/hero';
import Hero1 from './component/Comp2/hero';
import Event from './component/UpComingEvent/event';
import Activity from './component/Activity/RecentActivities';
import Footer from './component/footer/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Hero1 />
      <Event />
      <Activity />
      <Footer />
    </main>
  );
}