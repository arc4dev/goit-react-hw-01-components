export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-8">
      <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={avatar} alt="User" />
        <h5 className="mb-1 text-3xl font-medium text-gray-900 dark:text-white">{username}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-1">@{tag}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{location}</span>
        <ul className="flex mt-4 gap-6 md:mt-6">
          <li className="flex flex-col text-gray-900 dark:text-white text-center">
            <span className="text-base text-gray-500 dark:text-gray-400">Followers</span>
            <span className="text-2xl">{stats.followers}</span>
          </li>
          <li className="flex flex-col text-gray-900 dark:text-white text-center">
            <span className="text-base text-gray-500 dark:text-gray-400">Views</span>
            <span className="text-2xl">{stats.views}</span>
          </li>
          <li className="flex flex-col text-gray-900 dark:text-white text-center">
            <span className="text-base text-gray-500 dark:text-gray-400">Likes</span>
            <span className="text-2xl">{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
