import Image from "next/image";

export const Hero = () => {
    return (
        <main className="w-full flex flex-col items-center px-6 mb-12 md:px-16 md:justify-center md:h-[calc(100vh-156px)] md:min-h-[700px] md:mb-24 lg:h-auto lg:min-h-0 lg:mb-40">
            <div className="w-full flex flex-col items-center mb-12">
                <h1 className="text-4xl text-white font-bold text-center mb-6 md:text-5xl md:max-w-2xl lg:text-6xl lg:max-w-3xl">
                    Precisando de um{" "}
                    <strong className="bg-gradient-to-r from-[#D285DE] to-[#7A2DDC] text-transparent bg-clip-text">
                        site
                    </strong>{" "}
                    para o seu negócio?
                </h1>

                <p className="text-center text-lg text-white/80 leading-8 mb-9 md:max-w-xl">
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim
                    labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.
                </p>

                <button
                    type="button"
                    className="bg-gradient-to-br from-[#229CF5] to-[#7236DE] py-4 px-6 text-white text-lg font-semibold rounded-xl md:text-2xl"
                >
                    Faça seu orçamento
                </button>
            </div>

            <div className="hidden md:flex md:w-full md:items-center md:justify-center">
                <div className="relative w-3/4 aspect-video max-w-[750px]">
                    <Image
                        src="/images/hero-illustration.png"
                        alt="Faça seu orçamento"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </main>
    );
};
