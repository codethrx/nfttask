import { LOGOS } from "../utils/logos";
import Sidebar from "./reusables/sidebar";
import Content from "./reusables/content";
export function Dashboard() {
  return (
    <section className="flex min-h-screen">
      <Sidebar />
      <Content />
    </section>
  );
}
