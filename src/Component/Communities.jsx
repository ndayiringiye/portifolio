import CountUp from "react-countup";

const stats = [
  {
    count: 2,
    suffix: "+",
    description:
      "Websites I developed independently to support clients in their daily operations.",
  },
  {
    count: 4,
    suffix: "+",
    description:
      "Team projects I contributed to, helping clients efficiently deliver their products.",
  },
  {
    count: 7,
    suffix: "+",
    description:
      "Collaborative UI design projects that enhanced user experience and built client trust.",
  },
];

const Communities = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Community Impact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 bg-white dark:bg-gray-800"
          >
            <div className="inline-flex items-baseline text-blue-500 font-extrabold text-6xl md:text-7xl">
              <CountUp
                end={stat.count}
                duration={2}
                enableScrollSpy
                scrollSpyDelay={300}
              />
              <span className="ml-1">{stat.suffix}</span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-base font-medium leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Communities;
