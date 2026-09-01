const OrderOption = ({ option }: { option: string }) => {
  return (
    <>
      <option value={option}>{option.split('-').join(' ')}</option>
    </>
  );
};

export default OrderOption;
