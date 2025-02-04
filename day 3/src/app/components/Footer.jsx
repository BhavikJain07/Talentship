import Image from "next/image";
export default function Footer() {
  return (
    <>
      <section className="flex items-end justify-between absolute bottom-0 left-0 mx-8 mb-12 right-0 z-10">
        <div className="bg-white text-black mr-40 pt-[3.6vw] px-[3.6vw] pb-[3rem] w-5/12 rounded-[10px]">
          <h1 className="text-7xl">
            Scale Your <br></br>Tech team
          </h1>
          <p className="text-lg">
            <span className="font-bold">Our promise: </span>Excellent quality
            from the best engineers, led by high-caliber CTOs. Cost effective.
            On time. On budget. Always.
          </p>
          <button className="bg-orange-600 rounded-full px-8 py-5 mt-5 text-white hover:bg-black">
            BOOK EXPERT CALL
          </button>
        </div>
        <div className="bg-white text-black ml-40 w-3/12 rounded-full py-[1.6rem] px-[4.6rem] border-black shadow-lg">
          <Image src={"/lisence.png"} alt="Lisence" width={300} height={100} />
        </div>
      </section>
      <section className="bg-white bottom-0 absolute left-0 right-0 p-16"></section>
    </>
  );
}
