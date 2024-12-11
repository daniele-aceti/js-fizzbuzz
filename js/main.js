for (let i = 1; i<= 100; i++){
    let x = (i % 3)
    let y = (i % 5)
    if(!x && !y){
        console.log(`FizzBuzz`)
    }else if(!x){
        console.log(`Fiz`)
    }else if (!y){
        console.log(`Buzz`)
    }else{
        console.log(i)
    }
}


/*oppure


for (let i = 1; i<= 100; i++){
    let x = (i % 3)=== 0
    let y = (i % 5)=== 0
    if(x && y){
        console.log(`FizzBuzz`)
    }else if(x){
        console.log(`Fiz`)
    }else if (y){
        console.log(`Buzz`)
    }else{
        console.log(i)
    }
}*/