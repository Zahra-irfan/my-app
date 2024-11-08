import Image from "next/image";
import vector from "@/app/assets/vector.png";
import big from "@/app/assets/big.png";
export default function Hero() {
  return (
    <div>
      <div className="w-[1920px] h-[829px] py-[140px] px-[220px] bg-[#043873] top-[92px] left-[1px] text-white flex items-center">
        <div className="w-[656px] h-[361px]">
          <div className="w-[656px] h-[238px]">
            <h2 className="font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6">
              Get More Done with whitespace
            </h2>
            <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] w-[656px] h-[60px] mb-[60px] ">
              Project management software that enables your teams to
              collaborate, plan, <br />
              analyze and manage everyday tasks
            </p>
            <button className="w-[219px] h-[63px] p-5 rounded-lg bg-[#4F9CF9] font-medium text-lg leading-[23px] tracking-[-0.02em] flex flex-row gap-[10px]">
              {" "}
              <div>Try Whitepace free</div>
              <div className="w-[10px] h-[10px] mt-2">
                <Image src={vector} alt="" />
              </div>{" "}
            </button>
          </div>
        </div>
        <div className="w-[824px] h-[549px] bg-[#C4DEFD]"></div>
      </div>
      <div className="w-[1920px] h-[829px] py-[140px] px-[220px] bg-[#ffffff] top-[92px] left-[1px] text-[#212529] flex items-center gap-[60px]">
        <div className="w-[672px] h-[411px] py-[68px] pr-[60px]">
          <div className="w-[672px] h-[288px] mb-[60px]">
            <div className="w-[672px] h-[174px] mb-6">
              <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] ">
                Project Management
              </h1>
            </div>
            <div className="w-[672px] h-[90px] ">
              <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] w-[672px] h-[90px]  ">
                Images, videos, PDFs and audio files are supported. Create math
                expressions and diagrams directly from the app. Take photos with
                the mobile app and save them <br /> to a note.
              </p>
            </div>
          </div>
          <button className="w-[201px] h-[63px] py-5 px-10 rounded-lg bg-[#4F9CF9] font-medium text-lg leading-[23px] tracking-[-0.02em] flex flex-row gap-[10px] text-white items-center">
            <div className="w-[97px] h-[23px]">Get Started</div>
            <div className="w-[14px] h-[14px]">
              <Image src={vector} alt="" />
            </div>
          </button>
        </div>
        <div className="w-[748px] h-[547px] bg-[#C4DEFD]"></div>
      </div>
      <div className="w-[1920px] h-[829px] py-[140px] px-[220px] bg-white top-[92px] left-[1px] text-[#212529] flex gap-[100px] items-center">
        <div className="w-[710px] h-[661px]">
          <Image src={big} alt="" />
        </div>

        <div className="w-[670px] h-[294px]">
          <div className="w-[670px] h-[171px] mb-[60px]">
            <h1 className="w-[670px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-0.02] mb-6">
              Work together
            </h1>
            <p className="w-[670px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02]">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
          </div>
          <button className="w-[186px] h-[63px] py-5 px-10 rounded-lg bg-[#4F9CF9] font-medium text-lg leading-[23px] tracking-[-0.02em] flex flex-row gap-[10px] text-white items-center">
            {" "}
            <div className="w-[82px] h-[23px]">Try it now</div>
            <div className="w-[14px] h-[14px]">
              <Image src={vector} alt="" />
            </div>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
