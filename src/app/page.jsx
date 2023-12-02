import Hero from "@/components/Hero";
import Brand from "@/components/Brand";
import WorkList from "@/components/WorkList";
import StatList from "@/components/StatList";
import FeaturedProjects from "@/components/FeaturedProjects";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Brand/>
      <WorkList/>
      <StatList/>
      <FeaturedProjects/>
    </div>
  )
}
