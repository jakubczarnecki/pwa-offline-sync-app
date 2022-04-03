import "./style.scss";
import React, { useContext, useState, useEffect } from "react";
import ColorTab from "./ColorTab";
import { dataContext } from "../../context/dataContext";

export default function ColorFilter() {
   const [value, setValue] = useState("");
   const [children, setChildren] = useState([]);
   const {
      state: { color, notes },
   } = useContext(dataContext);

   useEffect(() => {
      console.log(notes);
   }, [color]);

   return (
      <div className="colorFilter-wrapper">
         <ColorTab color="red" />
         <ColorTab color="black" />
         <ColorTab color="yellow" />
         <ColorTab color="green" />
         <ColorTab color="white" />
         <ColorTab color="test" />
      </div>
   );
}
