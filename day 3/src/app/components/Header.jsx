import Image from "next/image";
export default function Header() {
  return (
    <>
      <header className="max-w-[calc(1460px - 4.8vw)] mx-12 bg-[#24262e] flex flex-row justify-between px-[3rem] rounded-b-lg w-[calc(100% - 4.8vw)] h-[90px]">
        <div className="flex flex-row justify-between align-middle items-center">
          <div className="mx-5">
            <Image
              src={"/logo.svg"}
              width={200}
              height={100}
              alt="Talentship Logo"
            />
          </div>
          <div>
            <p className="text-[1.8rem] hover:text-orange-600 font-[500]">KI SERVICES</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <button className="bg-none text-white px-3 py-2 hover:text-orange-600 font-[500] text-[1.8rem]">
              CONTACT
            </button>
          </div>
          <div>
            <button className="flex px-5 py-3 bg-orange-600 rounded-full hover:bg-white border-black hover:text-black text-[1.5rem]">
              Book Expert Call
            </button>
          </div>
          <div>
            <button className="bg-none text-white px-3 py-2 hover:text-orange-600 font-[500] text-[1.8rem]">
              DE
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
