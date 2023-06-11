export const TransactionHistory = ({ items }) => {
  return (
    // <table className="transaction-history">
    //   <thead>
    //     <tr>
    //       <th>Type</th>
    //       <th>Amount</th>
    //       <th>Currency</th>
    //     </tr>
    //   </thead>

    //   <tbody>
    //     {items.map(item => (
    //       <tr>
    //         <td>{item.type}</td>
    //         <td>{item.amount}</td>
    //         <td>{item.unit}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <table className="text-sm text-left text-gray-500 dark:text-gray-400 rounded">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Type
          </th>
          <th scope="col" className="px-6 py-3">
            Amount
          </th>
          <th scope="col" className="px-6 py-3">
            Currency
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className={`px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white ${
                item.type === 'withdrawal' || item.type === 'invoice'
                  ? 'text-red-400 dark:text-red-400'
                  : 'text-green-400 dark:text-green-400'
              }`}
            >
              {item.type}
            </th>
            <td className="px-6 py-4">{item.amount}</td>
            <td className="px-6 py-4">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
