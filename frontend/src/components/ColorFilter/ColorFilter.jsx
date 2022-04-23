import "./style.scss";
import React, { useContext, useState, useEffect } from "react";
import ColorTab from "./ColorTab";
import { dataContext } from "../../context/dataContext";

export default function ColorFilter() {
   const [value, setValue] = useState();
   const [children, setChildren] = useState([]);
   const {
      state: { notes },
   } = useContext(dataContext);

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
