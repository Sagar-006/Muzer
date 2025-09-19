import { Main } from "next/document";
import Image from "next/image";
import { APPbar } from "./component/Appbar";
import { AccordionDemo } from "@/components/accordion-demo";
import { ButtonDemo } from "@/components/button-demo";
import { Dialog } from "@radix-ui/react-dialog";
import { SlidingNumber } from "@/components/motion-primitives/sliding-number";
import { SlidingNumberDemo } from "@/components/sliding-number-demo";
import { SpinningText } from "@/components/motion-primitives/spinning-text";
import { SpinningTextDemo } from "@/components/spinning-text-demo";
import { Tilt } from "@/components/motion-primitives/tilt";
import { TiltDemo } from "@/components/title-demo";
console.log(process.env.GOOGLE_CLIENT_ID);
console.log(process.env.GOOGLE_CLIENT_SECRET);

export default function Home() {
  return (
    <main className="max-w-2xl ">
      <div className="min-h-screen w-full relative bg-black">
          {/* X Organizations Black Background with Top Glow */} {" "}
        <div
          className="absolute inset-0 z-0 w-screen h-screen"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 70%), #000000",
          }}
        />
        <div className="max-w-2xl mx-auto relative z-20 flex flex-col gap-y-4 ">
          <APPbar />
          <AccordionDemo />
          <SlidingNumberDemo />
          <SpinningText children="hi-hello" duration={20} />
          {/* <Tilt children={<Image src='/"/file.svg"' alt="hello"/> }  /> */}
          <TiltDemo /> 
        </div>
      </div>
    </main>
  );
}
