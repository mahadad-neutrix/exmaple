// "use client";

// import { useEffect, useState } from "react";

type cardProps = {
  data: any;
};

const Card = ({ data }: cardProps) => {
  // use use effect hook to fetch datat from jsonplaceholder

  //   const [data, setData] = useState({});

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  //       const data = await res.json();
  //       setData(data);
  //       console.log("🚀 ~ file: card.tsx:29 ~ fetchData ~ data", data);
  //     };

  //     fetchData();
  //   }, []);

  return (
    <>
      <h1>card</h1>

      <p>fetch data from jsonplaceholder</p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </>
  );
};

export default Card;
