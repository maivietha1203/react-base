const Cell2 = ({ value, onClick, classname }) => {
  return (
    <div className={`cell ${classname}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell2;
