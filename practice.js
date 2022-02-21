
console.log('aaa');
let lastName ='有田';
let firstName = '祐馬';
console.log(firstName);
console.log(lastName);
console.log(lastName + firstName);

let age = 20;
if(age >= 20){
    console.log('成人です');
}else{
    console.log('未成年です');
}

let j = 0;
for(i=0;i<=10;i++){
     j += i; 
}console.log(j);

let k = 0;
let l = 0;
let m = 0;
for(let k=1;k<=9;k++){
    m = '';
    for(let l=1;l<=9;l++){
        if(k*l < 10){
            console.log(m);
        }else{console.log(m)} m += " "+k*l;
    }
}

let nums = [1,2,3,4,5,6,7,8,9,10];
for(let num of nums){
    num = num + nums;
    console.log(nums);
}