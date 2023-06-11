export const FriendList = ({ friends }) => {
  return (
    // <ul class="friend-list">
    //   {friends.map(friend => (
    //     <li class="item">
    //       <span class="status">{friend.isOnline ? 'Online' : 'Offline'}</span>
    //       <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
    //       <p class="name">{friend.name}</p>
    //     </li>
    //   ))}
    // </ul>

    <ul class="space-y-3">
      {friends.map(friend => (
        <li className="flex items-center px-6 py-4 gap-4 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white cursor-pointer">
          <div
            className={`w-4 h-4 rounded-full ${friend.isOnline ? 'bg-green-400' : 'bg-red-400'}`}
          ></div>
          <img className="w-24" src={friend.avatar} alt="User" />
          <span class="flex-1 ml-3 text-2xl">{friend.name}</span>
        </li>
      ))}
    </ul>
  );
};
