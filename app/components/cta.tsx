export const CTA = () => {
  return (
    <div className="absolute -top-[calc(50%+200px)] w-[calc(100%-48px)] rounded-lg overflow-hidden px-9 py-14 bg-gradient-to-br from-[#7037DE] to-[#1560DA] flex items-center justify-center md:w-[calc(100%-128px)] lg:max-w-[1000px] lg:left-1/2 lg:-translate-x-1/2 lg:-top-[calc(50%+300px)] before:content-[''] before:bg-cta-top-left-illustration before:bg-no-repeat before:bg-contain before:bg-left-top before:absolute before:top-0 before:left-0 before:w-[40%] before:aspect-square after:content-[''] after:bg-cta-bottom-right-illustration after:bg-no-repeat after:bg-contain after:bg-right-bottom after:absolute after:bottom-0 after:right-0 after:w-[40%] after:h-[30%]">
      <div className="w-full flex flex-col items-center">
        <h3 className="text-white text-3xl font-bold text-center mb-4 z-10 lg:text-5xl lg:leading-[55px]">
          Quer impulsionar o seu negócio?
        </h3>

        {/* TODO mudar depois */}
        <p className="text-base text-white font-normal leading-6 text-center mb-9 z-10 lg:text-2xl">
          Solicite um orçamento agora mesmo.
        </p>

        <button
          type="button"
          className="w-full bg-[#0C3988] text-white text-lg font-bold rounded-xl px-6 py-4 flex items-center justify-center z-10 lg:w-fit"
        >
          Solicitar orçamento
        </button>
      </div>
    </div>
  );
};
