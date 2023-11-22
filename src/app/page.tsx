import ThemeBtn from "@/components/buttons/ThemeBtn";
import ButtonComp from "@/components/comps/Button";

export default function Home() {
  return (
    <main className="text-light h-screen border border-light ">
      Esto es el hero

      <section className="container mx-auto w-[50vh] h-[50vh] border border">
        <h2 className="text-xl font-bold">BUTTON</h2>
        <ThemeBtn />
        <ButtonComp />
      </section>
    </main>
  )
}
