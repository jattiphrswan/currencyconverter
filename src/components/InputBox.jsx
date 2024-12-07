import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
  const id = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
                <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}
                </label>
                <input type="number" id={id}
                    className='outline-none w-full bg-transparent py-1.5'
                    placeholder='amount'
                    disabled= {amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
                <div className='w-1/2 flex flex-wrap justify-end text-right'>
                    <p className='text-black/40 mb-2 w-full
                    '>Currency Type</p>
                    <select
                   className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                   value={selectedCurrency}
                   onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value)}}
                   disabled={currencyDisabled}
                    >
                      {currencyOption.map( (Currency) => (
                        <Option key={Currency} value={Currency}>{Currency}</Option>
                      ))  }
                    </select>
                </div>
        </div>
    </div>
  )
}

export default InputBox