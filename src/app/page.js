import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/Components/Navbar/Navbar";
import Poster from "@/Components/Poster/Poster";
import Marketing from "@/Components/Marketing/Marketing";
import Streamlined from "@/Components/Streamlined/Streamlined";
import Pricing from "@/Components/Pricing/Pricing";
import Testimonial from "@/Components/Testimonials/Testimonials";
import Signup from "@/Components/Signup/Signup";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Poster />
      <Marketing />
      <Streamlined />
      <Pricing />
      <Testimonial />
      <Signup />
      <Footer />
    </main>
  );
}
