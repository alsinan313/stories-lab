import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "4rem", maxWidth: "720px", margin: "0 auto" }}>
      <h1>Athar Archive</h1>

      <p>
        This is an experiment in preserving and structuring meaningful human
        stories — especially around belief, identity, discipline, and
        transformation.
      </p>

      <p>
        Built independently to explore how storytelling can move beyond
        algorithm-driven platforms.
      </p>

      <h3>Stories</h3>
      <ul>
        <li>
          <Link href="/stories/ali">
            Muhammad Ali — Faith & Resistance
          </Link>
        </li>
      </ul>
    </main>
  );
}
