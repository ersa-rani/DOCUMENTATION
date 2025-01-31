import Image from "next/image";

function Grid() {
  return (
    <div className="flex justify-center items-center py-10 mb-12 h-[100%]">
      {/* Outer Container */}
      <div className="bg-[#F0F0F0] rounded-2xl shadow-md border-2 p-10 w-[90%] max-w-6xl">
        {/* Title */}
        <h2 className="text-center text-4xl font-extrabold mb-8">BROWSE BY DRESS STYLE</h2>

        {/* Grid Container */}
        <div className="grid grid-rows-2 gap-4">
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-4">
            {/* Casual */}
            <div className="col-span-1 relative rounded-lg overflow-hidden h-56 ">
              <Image
                src="/images/image 11.svg"
                alt="Casual"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <p className="absolute text-xl top-2 left-2 bg-white bg-opacity-80 text-black px-2 py-1 rounded-sm font-semibold text-sm">
                Casual
              </p>
            </div>

            {/* Formal */}
            <div className="col-span-2 relative rounded-lg overflow-hidden shadow-md h-56">
              <Image
                src="/images/image 13 (1).svg"
                alt="Formal"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <p className="absolute text-xl top-2 left-2 bg-white bg-opacity-80 text-black px-2 py-1 rounded-sm font-semibold text-sm">
                Formal
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-4">
            {/* Party */}
            <div className="col-span-2 relative rounded-lg overflow-hidden shadow-md h-56">
              <Image
                src="/images/image 12.svg"
                alt="Party"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <p className="absolute text-xl top-2 left-2 bg-white bg-opacity-80 text-black px-2 py-1 rounded-sm font-semibold text-sm">
                Party
              </p>
            </div>

            {/* Gym */}
            <div className="col-span-1 relative rounded-lg overflow-hidden shadow-md h-56">
              <Image
                src="/images/image 14.svg"
                alt="Gym"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <p className="absolute text-xl top-2 left-2 bg-white bg-opacity-80 text-black px-2 py-1 rounded-sm font-semibold text-sm">
                Gym
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
