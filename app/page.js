import BackToTop from "./backToTop";
import HomePage from "./home/page";

export const metadata = {
  title: "Portfolio of Pabitra Barua - Fullstack Web Developer",
  description: "",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
