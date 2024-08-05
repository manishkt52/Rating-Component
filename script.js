let val1 = document.querySelector('.val1');
let val2 = document.querySelector('.val2');
let val3 = document.querySelector('.val3');
let val4 = document.querySelector('.val4');
let val5 = document.querySelector('.val5');

let finalValue = null;  

// Button1 
val1.addEventListener('click',function(event){
    if(val2.classList.contains('clicked')){
        val2.classList.remove('clicked');
    }
    else if(val3.classList.contains('clicked')){
        val3.classList.remove('clicked');
    }
    else if(val4.classList.contains('clicked')){
        val4.classList.remove('clicked');
    }
    else if(val5.classList.contains('clicked')){
        val5.classList.remove('clicked');
    }
    val1.classList.add('clicked');
    finalValue = event.target.value;
})


// Button2
val2.addEventListener('click',function(event){
    if(val1.classList.contains('clicked')){
        val1.classList.remove('clicked');
    }
    else if(val3.classList.contains('clicked')){
        val3.classList.remove('clicked');
    }
    else if(val4.classList.contains('clicked')){
        val4.classList.remove('clicked');
    }
    else if(val5.classList.contains('clicked')){
        val5.classList.remove('clicked');
    }
    val2.classList.add('clicked');
    finalValue = event.target.value;
})


// Button3
val3.addEventListener('click',function(event){
    if(val1.classList.contains('clicked')){
        val1.classList.remove('clicked');
    }
    else if(val2.classList.contains('clicked')){
        val2.classList.remove('clicked');
    }
    else if(val4.classList.contains('clicked')){
        val4.classList.remove('clicked');
    }
    else if(val5.classList.contains('clicked')){
        val5.classList.remove('clicked');
    }
    val3.classList.add('clicked');
    finalValue = event.target.value;
})


// Button4
val4.addEventListener('click',function(event){
    if(val1.classList.contains('clicked')){
        val1.classList.remove('clicked');
    }
    else if(val2.classList.contains('clicked')){
        val2.classList.remove('clicked');
    }
    else if(val3.classList.contains('clicked')){
        val3.classList.remove('clicked');
    }
    else if(val5.classList.contains('clicked')){
        val5.classList.remove('clicked');
    }
    val4.classList.add('clicked');
    finalValue = event.target.value;
})


// Button5
val5.addEventListener('click',function(event){
    if(val1.classList.contains('clicked')){
        val1.classList.remove('clicked');
    }
    else if(val2.classList.contains('clicked')){
        val2.classList.remove('clicked');
    }
    else if(val3.classList.contains('clicked')){
        val3.classList.remove('clicked');
    }
    else if(val4.classList.contains('clicked')){
        val4.classList.remove('clicked');
    }
    val5.classList.add('clicked');
    finalValue = event.target.value;
})

// Submit Button
let submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click',function(){
    console.log(finalValue);
    if(finalValue !== null) {
    localStorage.setItem('finalResult',finalValue);
    window.location.href = 'thank.html'
    }
    else {
        alert("Please Submit Your Rating")
    }
    
})