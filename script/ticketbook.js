const form=document.getElementById("form") //get user input,catch by getting id
const fname=document.getElementById("fname")
const mobilenumber= document.getElementById("mobilenumber")
const email=document.getElementById("email")
const chkemail=document.getElementById("chkemail")
const errorElement = document.getElementById('error');
const optValue= document.getElementById("time"); 

form.addEventListener('submit', e => {
  e.preventDefault(); //prevents from submitting since it is needed to validate inputs

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement; //based on the html element proviede get parent element
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error'); //returns a live collection classes
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validatePhoneNumber(input_str) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(input_str);
}


const validateInputs = () =>{        //trigger on all submit
const fnameValue=fname.value.trim(); //remove spaces
const mobilenumberValue=mobilenumber.value.trim();
const emailValue=email.value.trim();
const chkemailValue=chkemail.value.trim();


if(fnameValue ===''){
  setError(fname,'Fullname is required');} //calls the funtion
else{
    setSuccess(fname);
    }

if(emailValue  ===''){
  setError(email,'Email is required');}
    else if (!isValidEmail(emailValue)) {
      setError(email, 'Provide a valid email address');
  } else {
      setSuccess(email);
  }
if(mobilenumber  ===''){
    setError(mobilenumber,'Enter valid number');}
      else if (!validatePhoneNumber(mobilenumberValue)) {
        setError(mobilenumber, 'enter valid number');
    } else {
        setSuccess(mobilenumber);
    }

if(chkemailValue  ===''){
    setError(chkemail,'Email is required');}
      else if (!isValidEmail(chkemailValue)) {
        setError(chkemail, 'Provide a valid email address');
    } else {
        setSuccess(chkemail);
    }

}


function ticket(guest, price, isIncreasing){
  const caseInput = document.getElementById(guest + '-number');
  let Number = caseInput.value;
          if(isIncreasing){
              Number = parseInt(Number) + 1; //converts string into integer
          }
          
  else if(Number > 0){
         Number = parseInt(Number) - 1;
       }
      
      caseInput.value =Number;
 
 
  calculateTotal();

  }


  document.getElementById('LCH-plus').addEventListener('click',function(){
      
      ticket('LCH', 700 ,true);
   });
   
   document.getElementById('LCH-minus').addEventListener('click',function(){
       
   ticket('LCH', 700, false);
   });
   
   
   document.getElementById('LAD-plus').addEventListener('click',function(){
      ticket('LAD',1200, true);
   });
   
   
   document.getElementById('LAD-minus').addEventListener('click',function(){
       ticket('LAD',1200 , false);
   });
   


   document.getElementById('FCH-plus').addEventListener('click',function(){
      
      ticket('FCH', 2700 ,true);
   });
   
   document.getElementById('FCH-minus').addEventListener('click',function(){
       
   ticket('FCH', 2700, false);
   });
   
   
   document.getElementById('FAD-plus').addEventListener('click',function(){
      ticket('FAD',5500, true);
   });
   
   
   document.getElementById('FAD-minus').addEventListener('click',function(){
      ticket('FAD',5500 , false);
   });
   

   document.getElementById('INF-plus').addEventListener('click',function(){
      ticket('INF',0, true);
   });
   
   
   document.getElementById('INF-minus').addEventListener('click',function(){
      ticket('INF', 0 , false);
   });


  function getInputvalue(guest){
      const guestInput = document.getElementById(guest+ '-number');
      const guestNumber = parseInt(guestInput.value);
      return guestNumber; //guestcount
  }

  
  let subTotal=0;
      let durcost=0;
      let costoforder=0;

  const ladult=document.getElementById("ladult")
  const lchild=document.getElementById("lchild")
  const fadult= document.getElementById("fadult")
  const fchild=document.getElementById("fchild")
  const infant=document.getElementById("infant")
  const dur=document.getElementById("dur")
  const amo = document.getElementById('amo');
  const rem= document.getElementById("rem"); 
       


  function calculateTotal(){
      let localadult = getInputvalue('LAD') * 1200;
      let localchild = getInputvalue('LCH') * 700;
      let foreigneradult = getInputvalue('FAD') * 5500;
      let foreingerchild = getInputvalue('FCH') * 2700;
      subTotal= localadult+ localchild+foreigneradult+foreingerchild;
      costoforder=subTotal+durcost;
      document.getElementById('COO').innerText = ` COST OF ORDER: RS.${costoforder}` ;

      ladult.innerText= `${getInputvalue('LAD')}`;  //table
      lchild.innerText= `${getInputvalue('LCH') }`;
      fadult.innerText= `${getInputvalue('FAD')}`;
      fchild.innerText= `${getInputvalue('FCH')}`;
      infant.innerText= `${getInputvalue('INF')}`;


    }
  optValue.addEventListener("change",duration)
    function duration(){
    
    let x= optValue.value;
    
    if(x=="3hrs"){
      durcost=0;
    }
    else if(x=="1/2 day"){
    durcost=(getInputvalue('LAD')*350)+(getInputvalue('LCH')*350)+(getInputvalue('FAD')*450)+(getInputvalue('FCH')*450);
   }else if (x=="Full day"){
    durcost=(getInputvalue('LAD')*600)+(getInputvalue('LCH')*600)+(getInputvalue('FAD')*800)+(getInputvalue('FCH')*800);
   }else;
   costoforder=subTotal+durcost;
   document.getElementById('COO').innerText = ` COST OF ORDER:RS. ${costoforder}` ;
  dur.innerText=`${x}`;
  amo.innerText= `${costoforder}`;
} 



 
const btnAdd=document.getElementById("add");
btnAdd.addEventListener("click",totalcost)
function totalcost(){
document.getElementById('OOC').innerText = ` OVERALL COST OF ORDER:RS. ${costoforder}`
document.getElementById('COO').innerText = ` COST OF ORDER:RS. ${0}` 








 }


 
const PO=document.getElementById("po");
PO.addEventListener("click",message)
function message(){
  alert("THANK YOU!");
LAD.value=0; //reset value
LCH.value=0;
FAD.value=0;
FCH.value=0;
INF.value-0;

document.getElementById('OOC').innerText = ` OVERALL COST OF ORDER:RS. ${0}`
document.getElementById('COO').innerText = ` COST OF ORDER:RS. ${0}`

};
 
  
 

const btnaddfav=document.getElementById("addfav")
btnaddfav.addEventListener("click", addFav);
function addFav(){
  del();
  let a = getInputvalue('LAD') ;
  let b = getInputvalue('LCH');
  let c = getInputvalue('FAD'); 
  let d = getInputvalue('FCH');
  let e = getInputvalue('INF');

  localStorage.setItem("Local adult", a)
  localStorage.setItem("Local child", b) //set item
  localStorage.setItem("Foreign child", c)
  localStorage.setItem("Foreign Child", d)
  localStorage.setItem("Infant", e)

}
function del(){
  localStorage.clear
}

const btnOrdfa=document.getElementById("ordfav")
btnOrdfa.addEventListener("click", ordFav);
function ordFav(){
  let a = localStorage.getItem("Local Adult");
  let b = localStorage.getItem("Local Child"); //retreive
  let c = localStorage.getItem("Foreign Adult");
  let d = localStorage.getItem("Foreign Child");
  let e = localStorage.getItem("Infant");

  let aa = parseInt(a);
  let bb = parseInt(b);
  let cc = parseInt(c);
  let dd = parseInt(d);
  let ee = parseInt(e);

  costoforder= (aa*1200)+(bb*700)+(cc*5500)+(dd*2700)+(ee*0);

  
  document.getElementById('OOC').innerText = ` OVERALL COST OF ORDER:RS. ${costoforder}`
}
