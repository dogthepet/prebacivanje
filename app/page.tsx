import { redirect } from "next/navigation";

export default function Home() {
  console.log("Redirecting from home");
  redirect("https://dogthepet.com/frodo-the-last-survivor-of-michael-vicks-dogfighting-ring-r-i-p/");
}
