import Image from "next/image";

export const AdHeader = () => {
  return (
    <header className="w-full py-3 flex items-center justify-center border-b border-blue-600">
      <div className="relative w-[74px] h-[31px] sm:w-[84px] sm:h-[35px] lg:w-[110px] lg:h-[45px]">
        <Image
          src="/images/logo.png"
          alt="MKDev"
          fill
          className="object-contain object-center"
        />
      </div>
    </header>
  );
};
