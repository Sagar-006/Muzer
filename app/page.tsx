import { Appbar } from "@/components/Appbar";


export default function Home() {
  return (
    <main className="w-screen h-screen">
      <div className="min-h-screen w-full relative">
        {/* Azure Depths */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
          }}
        />
        <Appbar/>
      </div>
    </main>
  );
}
