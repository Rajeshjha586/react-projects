import Accordion from "./Accordion";
import { faqs } from "./constant";

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}
