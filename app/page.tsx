import { Main } from "next/document";
import Image from "next/image";
import { APPbar } from "./component/Appbar";
console.log(process.env.GOOGLE_CLIENT_ID);
console.log(process.env.GOOGLE_CLIENT_SECRET);

export default function Home() {
  return (
    <main>
      <APPbar/>
    </main>
  );
}
