import { Routes, Route } from "react-router-dom";
import { Home } from "@/features/home/Home";
import { About } from "@/features/about/About";
import { Contact } from "@/features/contact/Contact";
import { Consulting } from "@/features/consulting/Consulting";
import { Aquaculture } from "@/features/aquaculture/Aquaculture";
import { Poultry } from "@/features/poultry/Poultry";
import { Blog } from "@/features/blog/Blog";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/consulting" element={<Consulting />} />
      <Route path="/aquaculture" element={<Aquaculture />} />
      <Route path="/poultry" element={<Poultry />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
