import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components/index.js'


function App() {
 const [amount, setAmount] = useState(0)
const [from , setFrom] = useState('usd')
const [to, setTo] = useState ('inr')
const [converteAmmount, setConvertedAmmount] = useState(0);

const currencyInfo = useCurrencyInfo(from)
const option = Object.keys(currencyInfo)
const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmmount(amount)
  setAmount(converteAmmount)
}
const convert = () =>{
  setConvertedAmmount(amount*currencyInfo[to])
}
return (
    <div className="w-full h-screen flex flex-wrap justify-center item-center bg-cover bg-no-repeat" style={{backgroundImage: `url("https://media.istockphoto.com/id/1696167872/photo/aerial-view-of-forest-at-sunset-on-the-background-of-mountains-in-dolomites.jpg?s=1024x1024&w=is&k=20&c=sfRAnSjXlDxAAAMZ0ZtYG5GpetUCOqETKyVc0Oz6kyU=")` }}>
        <div className='w-full'>
            <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  convert()
                } }
                >
                  <h1>Currency</h1>
                  <div className='w-full mb-1'>
                      <InputBox 
                        label="from"
                        amount={amount}
                        currencyOption={option}
                        onCurrencyChange={(currency) => setFrom(currency)}
                        onAmountChange={(amount) => setAmount(amount)}
                        selectedCurrency={from}    
                        />

                  </div>
                  <div className='relative w-full h-0.5'>
                    <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' 
                    onClick={swap}>Swap</button>
                  </div>
                  <div className='w-full mb-1'>
                      <InputBox 
                        label="from"
                        amount={amount}
                        currencyOption={option}
                        onCurrencyChange={(currency) => setFrom(currency)}
                        onAmountChange={(amount) => setAmount(amount)}
                        selectedCurrency={from}    
                        />
                  </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default App
