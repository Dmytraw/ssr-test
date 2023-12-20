export default function Home() {
  const chunk = new Array(1000).fill("");
  return chunk.map((_, index) => <div key={index}>{index}</div>);
}
