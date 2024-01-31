import { useEffect, useRef, useState } from "react";
import Block from "./Block";
import Currency from "./Currency";
import './index.scss';



function App() {

  const data = useRef([])


  const [fromCurrency, setFromCurrency] = useState('UA')
  const [toCurrency, setToCurrency] = useState("USD")
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(1)



  useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(res => res.json())
    .then(curs => {
      data.current = curs;
      onChangeToPrice(1)
    })
    .catch((err) => {
      console.warn(err);
      alert("Не вдалося отримати данні.")
    })
  }, [])

  const defaultCurrencies = ['UA', 'USD', 'EUR', 'GBP'];

  function onChangeFromPrice(value){
     let prise;

     for(let i = 0; i < data.current.length; i++){
      const currentFromCurrency = data.current[i];
      if(currentFromCurrency.cc === fromCurrency){
        prise = value * currentFromCurrency.rate;
      }else if(fromCurrency === 'UA'){
        prise = value;
      }


     }
     for(let j = 0; j < data.current.length; j++){
      const currentToCurrency = data.current[j];
      let result;
      if(currentToCurrency.cc === toCurrency){
        result = prise / currentToCurrency.rate;
        console.log(result);
        setToPrice(result.toFixed(3));
      }else if(toCurrency === 'UA'){
        result = prise;
        setToPrice(result);
      }
     }
     setFromPrice(value)

  }

  function onChangeToPrice(value){
    const fromCurrentPrice = data.current.filter(obj => obj.cc === fromCurrency); 
    const toCurrentPrice = data.current.filter(obj => obj.cc === toCurrency); 
    const firstPrice = fromCurrentPrice.length ? fromCurrentPrice[0].rate : 1
    const secondPrice = toCurrentPrice.length ? toCurrentPrice[0].rate : 1

    console.log(firstPrice, secondPrice)
    const result1 = (secondPrice / firstPrice) * value;
    setFromPrice(result1.toFixed(3))
    setToPrice(value)
}

useEffect(()=> {
  onChangeFromPrice(fromPrice)
}, [fromCurrency]);


useEffect(()=> {
  onChangeToPrice(toPrice)
}, [toCurrency])



  console.log(data.current)
  return (
    <>
    <div className="App">
      <Block value={fromPrice} currency= {fromCurrency} onChangeCurrency={setFromCurrency} onChangeValue = {onChangeFromPrice} 
        defaultCurrencies = {defaultCurrencies}/>
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue = {onChangeToPrice} 
        defaultCurrencies = {defaultCurrencies}/>
        
    </div>
    <Currency data = {data.current} defaultCurrencies = {defaultCurrencies}/>
    </>
  );
}

export default App;
