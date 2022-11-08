const number_1 = document.getElementById("num_1")
const number_2 = document.getElementById("num_2")
const submit = document.getElementById("submit")

function add(number_1 , number_2) {
    return number_1 + number_2
}

submit.addEventListener('click' , function(){
    console.log(add(number_1.value , number_2.value));
});