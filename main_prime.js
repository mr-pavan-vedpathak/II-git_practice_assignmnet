//main code merge here
function prime_num(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
    }
    if(count==2){
        console.log("prime number");
    }
    else{
        console.log("not prime");
    }
}
prime_num(7);
