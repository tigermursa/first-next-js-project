import Image from "next/image";
import Image1 from "/public/nextjs.webp";
const HomePage = () => {
  return (
    <main>
      <h1>this is hell homee ahaha</h1>

      <Image src={Image1} alt="Next js" placeholder="blur" />
    </main>
  );
};
export default HomePage;
