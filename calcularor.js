calculadores = (years, initialValue = 1000,mensalAport = 0, stockPrice = 9.72, dividend = 0.09) => {
  let stocksAmount = 0
  let total = 0
  for(let i = 0; i < years * 12; i++){
      const stocks = Math.floor((i === 0 ? initialValue : mensalAport) / stockPrice)
      stocksAmount+=stocks
      let dividends = 0
      for(let t = 0; t < stocks; t++){
          dividends+=dividend
      }
      mensalAport+=dividends
      total+=(i === 0 ? initialValue + mensalAport : mensalAport)
  }
  console.log('patrimonio total: ' + total.toLocaleString('pt-br'))
  console.log('quantia mensal no fim: ' + (mensalAport).toLocaleString('pt-br'))
  console.log('quantia de ações: ' + stocksAmount)
}

calculadores(1, 150_000, 0, 10.17, 0.15)
console.log((150000/10.17) * 0.15)