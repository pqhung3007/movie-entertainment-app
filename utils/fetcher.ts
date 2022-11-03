export default async function fetchData() {
  const res = await fetch("http://localhost:3000/data.json");
  const films = await res.json();

  return films;
}
