const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars="0123456789";
const symbolChars="!-$^+";
const spaceChar=" ";

function getRandomChar(chars){
  const index=Math.floor(Math.random()*chars.length);
  return chars[index];
}

function generatePassword(){
  const passwordInput=document.getElementById("password");
  const lowercaseInput=document.getElementById("lowercase");
  const uppercaseInput=document.getElementById("uppercase");
  const numberInput=document.getElementById("numbers");
  const symbolInput=document.getElementById("symbols");
  const excludeDuplicateInput=document.getElementById("exc-duplicate");
  const spaceInput=document.getElementById("spaces");

  let characters="";
  if(lowercaseInput.checked){
    characters+=lowercaseChars;
  }
  if(uppercaseInput.checked){
    characters+=uppercaseChars;
  }
  if(numberInput.checked){
    characters+=numberChars;
  }
  if(symbolInput.checked){
    characters+=symbolChars;
  }
  if(spaceInput.checked){
    characters+=spaceChar;
  }

  if(characters===""){
    passwordInput.value="";
    return;
  }

  let password="";
  const defaultLength=10;

  while(password.length<defaultLength){
    let char=getRandomChar(characters);
    if(excludeDuplicateInput.checked && password.includes(char)){
      continue;
    }
    password+=char;
  }

  passwordInput.value=password;
}

function copyPassword(){
  const passwordInput=document.getElementById("password");
  const copyButton=document.getElementById("copy");

  passwordInput.disabled=false;

  passwordInput.select();
  navigator.clipboard.writeText(passwordInput.value)
  .then(()=>{
    passwordInput.disabled = true;

    copyButton.textContent = "Copied";
    setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 2000);
  })
  .catch(err => {
    console.error('Failed to copy: ', err);
  });
}