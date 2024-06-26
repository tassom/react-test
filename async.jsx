//ASYNC PARAGRAPH (then())

import {useEffect, useState } from "react";

export const AsyncParagraph = ({ dataVersion, loadData }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    loadData().then((loadedData) => setData(loadedData));
  }, [dataVersion, loadData]);

  return <p>{data}</p>;
};

document.body.innerHTML = "<div id='root'></div>";
const root = createRoot(document.getElementById("root"));

root.render(<AsyncParagraph dataVersion="10"
  loadData={ 
             () => { 
               return new Promise((resolve, reject) => { resolve("Data!"); }); 
             } 
           }
/>);

setTimeout(() => console.log(document.getElementById("root").innerHTML), 300);