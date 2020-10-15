import { ExampleContextProvider } from "../hooks/context";
import Home from "./home";
import Link from "next/link";
import Second from './second';

export default function App() {
  return (
    <ExampleContextProvider>
      <div className="container">
        <ul>
          <li>
            <Link href="/">
              <Home />
            </Link>
          </li>
          <li>
            <Link href="/second">
              <Second />
            </Link>
          </li>
        </ul>
      </div>
    </ExampleContextProvider>
  );
}
