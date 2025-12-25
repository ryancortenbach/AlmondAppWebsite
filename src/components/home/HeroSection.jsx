import AppStoreButton from "../AppStoreButton";

export default function HeroSection() {
  return (
    <section className="hero min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-20 px-6">
      <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-6 py-12 md:py-20 justify-between">
        {/* Text Content */}
        <div className="flex flex-col gap-5 md:gap-6 items-center lg:items-start">
          <h1 className="text-[2.2rem] md:text-[3rem] lg:text-[3.7rem] leading-tight font-bold text-gray-900 text-center md:text-left tracking-tight">
            The Almond Scanner That Tells All
          </h1>
          <p className="text-center md:text-left text-gray-600 text-[0.95rem] md:text-[1.1rem] leading-relaxed max-w-md md:max-w-none">
            Instantly get detailed information about any products nutrition.
            Make smarter choices with every scan.
          </p>
          <div>
            <AppStoreButton url="#" className="mx-auto md:mx-0" />
          </div>
        </div>
        {/*Image*/}
        <div className="flex justify-end h-full">
          <div className="flex items-end">
            <img
              src="images/image.png"
              alt="Almond Scanner App Preview"
              className="w-full h-[620px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
