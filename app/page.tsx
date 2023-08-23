import { redirect } from "next/navigation";

export default function Home() {
  console.log("Redirecting from home");
  redirect("http://google.com");
}
