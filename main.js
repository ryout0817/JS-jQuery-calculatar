function clickbutton(event) {
  let result = document.getElementById('result');
  let text = event.innerHTML;

if (text === '=') {                                 // =を押した時
    result.innerHTML = eval(result.innerHTML);  
  } else if (result.innerHTML === '0') {　          // 0が表示されていた時
    result.innerHTML = text; 
  } else if (text === 'C') {                        // Cを押した時
    result.innerHTML = '0';
  } else {
    result.innerHTML += text;
  }
}
function clickcode(code) {　　　　　　　　　　　　　// +-*/.を連続で押せないように
  if (result.innerHTML.slice(-1) === '+') {
    return;
  } else if (result.innerHTML.slice(-1) === '-') {
    return;
  } else if (result.innerHTML.slice(-1) === '*') {
    return;
  } else if (result.innerHTML.slice(-1) === '/') {
    return;
  } else if (result.innerHTML.slice(-1) === '.') {
    return;
  } else {
    result.innerHTML += code.innerHTML;
  }
}

function clickdouble0(double0) {                    // 0が最初に表示中に00を押された場合
  if (result.innerHTML === '0') {
    return;
  } else {
    result.innerHTML += double0.innerHTML;
  }
}
