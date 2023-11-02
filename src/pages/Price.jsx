


const Price = ({ currencies }) => {



  return (
    <div>
      {currencies.map((coin) => (
        <div key={coin.symbol}>
          <h2>{coin.name} ${coin.price}</h2>
        </div>
      ))}
    </div>
  );
};
   

export default Price;
