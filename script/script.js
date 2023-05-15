// Elements

const select = document.querySelectorAll('.currency');
const btn = document.getElementById('btn');
const amountOneEL = document.querySelector('.input');
const result = document.getElementById('result');

// API Fetching
fetch('https://v6.exchangerate-api.com/v6/078844bfef55a0bf2e283be1/latest/USD')
.then(res=> res.json())
.then(res => displayDropDown(res))


// Functions
function displayDropDown(res){
  let curr = Object.entries(res.conversion_rates);
  for(let i=0;i<curr.length;i++){
    let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`;
    select[0].innerHTML += opt;
    select[1].innerHTML += opt;
  }
}

// Event Listeners

btn.addEventListener('click',()=>{
  const amountOne = amountOneEL.value;
  const currencyOne = select[0].value;
  const currencyTwo = select[1].value;
  if(currencyOne === currencyTwo)
    alert('choose different currencies');
  else
    convert(amountOne,currencyOne,currencyTwo);
})

function convert(amountOne,currencyOne,currencyTwo){
  const response = fetch(`https://v6.exchangerate-api.com/v6/078844bfef55a0bf2e283be1/latest/${currencyOne}`);
  const data = response.json()
  const rate = data.conversion_rates[`${currencyTwo}`]
  result.innerText = console.log((amountOne * rate).toFixed(2));
}





