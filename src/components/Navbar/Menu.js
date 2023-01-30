import { useState } from "react";
import MenuLinks from "./MenuLinks";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div>
      <nav>
        <section>
          <div
            id="menu-btn"
            className={
              isNavOpen ? "open hamburger md:hidden" : "hamburger md:hidden"
            }
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav z-50" : "hideMenuNav"}>
            <MenuLinks />
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
     
    `}</style>
    </div>
  );
}
