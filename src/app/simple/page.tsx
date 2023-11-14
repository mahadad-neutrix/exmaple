import Card from "./components/card";

type pageProps = {};

const page = async ({}: pageProps) => {
  // fetch data from jsonplaceholder
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (!res.ok) return { notFound: true };

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  await sleep(1000);

  const data = await res.json();
  console.log("🚀 ~ file: page.tsx:10 ~ page ~ data:", data);

  return (
    <>
      <h1>simple page</h1>

      <p>fetch data from jsonplaceholder</p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
      <Card data={data} />
    </>
  );
};

export default page;
