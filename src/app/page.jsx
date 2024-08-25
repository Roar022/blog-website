import Image from "next/image";

export default function Home() {
  console.log(process.env.OPENAI_API_KEY);

  return (
    <div className="flex md:flex-col md:mt-10 gap-40">
      <div className="flex-1 flex flex-col gap-10">
        <h1 className="text-6xl font-bold md:text-5xl ">Creative Thoughts Agency.</h1>
        <p className="text-xl">
          Lorem rhnf djknfjknd djknfjkn jfknjkdn fknhjknh knhtj rhntjnrjk
          rhtnjhn hrtnhj rthnr htnj
        </p>
        <div className="flex gap-5 md:justify-center">
          <button className="p-4 cursor-pointer rounded-md bg-blue-600">
            Learn More
          </button>
          <button className="p-4 cursor-pointer rounded-md bg-white text-black">
            Contact
          </button>
        </div>
        <div className="w-96 h-8 md:w-full relative grayscale">
          <Image src="/brands.png" fill className="" />
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src="/hero.gif" fill className="" />
      </div>
    </div>
  );
}
