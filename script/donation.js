
 const amount=document.getElementById("amount");
 const owner=document.getElementById("owner");
 const card=document.getElementById("cardNumber")
 const cvv=document.getElementById("cvv");
 const date=document.getElementById("expiration-date");
 const btnconfirm=document.getElementById("confirm");
 const btndonate=document.getElementById("donate");
 var exMonth=document.getElementById("exMonth");
var exYear=document.getElementById("exYear");

btnconfirm.addEventListener("click", e => {
  e.preventDefault();
  
  validateInput();
  
}
);

const seterror = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setsuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};



const validateInput= () =>{

  const ownerValue=owner.value.trim();
  const cvvValue=cvv.value.trim();
  const cardValue=card.value.trim();
  
if(ownerValue===''){
    seterror(owner,'Name is required');}
  else {
        setsuccess(owner);
    }

if(cvvValue  ===" "){
      seterror(cvv,'Enter valid number');}
        else if (cvv.value.length<3||cvv.value.length>4) {
          seterror(cvv, 'Provide a valid number');
      }
        else {
          setsuccess(cvv);
      }
  

if(cardValue ===''){
      seterror(card,'Enter valid number');}
        else if (card.value.length<16||card.value.length>16) {
          seterror(card, 'Enter valid number');}
       else {
          setsuccess(card);
      }
      
    
btndonate.addEventListener ("click",message);
  function message(){
  alert("THANK YOU");
        
  }

}
