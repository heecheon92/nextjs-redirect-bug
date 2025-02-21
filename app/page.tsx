import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center w-full">
      <Link href="/test">Enter the evil loop</Link>
    </div>
  );
}
