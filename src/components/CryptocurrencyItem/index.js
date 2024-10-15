import './index.css'

const CryptocurrencyItem = props => {
  const {value} = props
  const {currencyImg, currencyName, usd, euro} = value
  return (
    <li className="li">
      <div className="flexing">
        <div className="crypto-img-flex">
          <img src={currencyImg} alt={currencyName} className="crypto-img" />
          <p className="bottom-para1">{currencyName}</p>
        </div>
        <div className="crypto-img-flex1">
          <p className="bottom-para1">{usd}</p>
          <p className="bottom-para1">{euro}</p>
        </div>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
