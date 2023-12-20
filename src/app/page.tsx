export default function Home() {
  const chunk = new Array(10).fill("");
  return chunk.map((_, index) => <div key={index}>{index}</div>);
}
