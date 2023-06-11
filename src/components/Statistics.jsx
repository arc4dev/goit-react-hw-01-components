export const Statistics = ({ title, stats }) => {
  return (
    <section className="bg-white border border-gray-200 rounded-lg shadow-md">
      <h2 className=" text-4xl text-gray-800 font-medium text-center py-4">{title}</h2>

      <ul className="flex text-2xl bg-gray-100">
        {stats.map(stat => (
          <li className="flex flex-col text-center p-4">
            <span className="text-gray-700 bg-gray-200 rounded-lg p-1 text-xl">{stat.label}</span>
            <span className="font-medium">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
