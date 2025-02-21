import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { X_CURRENT_PATH } from "../constant";

export default async function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers();
  const pathname = headerList.get(X_CURRENT_PATH) || "";
  const paths = pathname.split("/");
  const first_level = paths.length > 2 ? paths[2] : "";
  const second_level = paths.length > 3 ? paths[3] : "";

  console.log("first_level:", first_level, "\nsecond_level:", second_level);

  if (!first_level || !second_level) {
    redirect("/test/1/1");
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center w-full">
      {children}
    </div>
  );
}
