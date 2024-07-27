import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex justify-center items-center min-h-screen text-orange-400 font-medium text-center text-3xl sm:text-4xl">
      <Link href="/">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        Return Home
      </Link>
    </div>
  );
}
