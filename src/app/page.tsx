import ButtonComp from "./components/library/Button";

export default function Home() {
  return (
    <main className="p-1 text-light h-screen border border-light">
      Hero section

      <section className="p-1 container mx-auto w-[70vh] h-[50vh] border ">
        <h2 className="text-xl font-bold">BUTTON</h2>
        <ButtonComp />
      </section>
    </main>
  )
}
