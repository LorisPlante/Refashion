import CatalogueTutos from "@/components/CatalogueTutos";
import Header from "@/components/Header";
import { Heart, MessageCircle, MoreHorizontal, Search, User, GraduationCap } from "lucide-react";
import tutos from "@/data/tutos.json";
import Footer from "@/components/Footer";

export default function PostCardMobile() {
  const current = "/recherche"; // Remplace par usePathname() si dynamique

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
