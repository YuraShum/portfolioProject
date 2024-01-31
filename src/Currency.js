export default function Currency({data, defaultCurrencies}){
   const listCurrency = defaultCurrencies.map(elem => {
    const price = data.filter(obj => obj.cc === elem)
    return <div className="currency" key={elem}>
        <div className="currency__name">
            {`${elem}`}
        </div>
        <div className="currency__price">
            {` ${price.length ? price[0].rate : 1}`}
        </div>
        
    </div>
   })

    return(
        <div className="current__currency">
            {listCurrency}
        </div>
    )
}