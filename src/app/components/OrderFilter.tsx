import OrderOption from './OrderOption';

const OrderFilter = ({
  order,
  setOrder,
  options,
}: {
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}) => {
  return (
    <>
      <div className='flex items-center justify-end gap-x-2 max-[400px]:justify-center'>
        <p className='text-md sm:text-md font-medium capitalize dark:text-slate-100'>
          order by
        </p>
        <select
          className='sm:text-md dark:text-slate100 cursor-pointer rounded-md bg-slate-700 px-3 py-1 text-sm font-medium text-slate-50 capitalize shadow-sm transition-colors duration-200 sm:rounded-lg sm:px-5 sm:py-2 dark:bg-slate-800'
          value={order}
          onChange={(e) => setOrder(e.target.value)}
        >
          {options.map((option) => (
            <OrderOption key={option} option={option} />
          ))}
        </select>
      </div>
    </>
  );
};

export default OrderFilter;
