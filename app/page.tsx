import CatalogueTutos from "@/components/CatalogueTutos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import tutos from "@/data/tutos.json";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="min-h-screen pt-16">
        <CatalogueTutos tutos={tutos}></CatalogueTutos>
      </main>
      <Footer></Footer>
    </>
  );
}
