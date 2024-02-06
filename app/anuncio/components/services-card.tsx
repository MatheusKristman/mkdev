import Image from "next/image";

interface ServicesCardProps {
  imageUrl: string;
  categoryTitle: string;
  categoryDesc: string;
}

export const ServicesCard = ({
  imageUrl,
  categoryTitle,
  categoryDesc,
}: ServicesCardProps) => {
  return (
    <div className="w-full h-full max-w-sm rounded-2xl overflow-hidden border-2 border-[#232D3A] flex flex-col lg:max-w-none">
      <div className="relative w-full aspect-video">
        <Image
          src={imageUrl}
          alt="Projeto"
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="w-full flex flex-col gap-y-6 px-7 py-5">
        <div className="w-full pb-4 border-b border-[#232D3A]">
          <h3 className="text-2xl text-white font-bold">{categoryTitle}</h3>
        </div>

        <p className="text-base text-white/70 font-medium leading-[26px]">
          {categoryDesc}
        </p>
      </div>
    </div>
  );
};
