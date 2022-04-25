import "./style.scss";
import React from "react";
import ColorTab from "./ColorTab";

export default function ColorFilter() {
   return (
      <div className="color-filter-wrapper">
         <ColorTab prio={1} color="light-orange" />
         <ColorTab prio={2} color="orange" />
         <ColorTab prio={3} color="yellow" />
         <ColorTab prio={4} color="purple" />
         <ColorTab prio={5} color="turquoise" />
         <ColorTab prio={6} color="pink" />
      </div>
   );
}
