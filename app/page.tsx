import { redirect } from "next/navigation";

export default function Home() {
  console.log("Redirecting from home");
  redirect("https://dogthepet.com/12-most-loyal-dog-breeds/");
}
