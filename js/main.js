for (let i = 1; i<= 100; i++){
    let mod3 = (i % 3)
    let mod5 = (i % 5)
    if(!mod3 && !mod5){
        console.log(`FizzBuzz`)
    }else if(!mod3){
        console.log(`Fiz`)
    }else if (!mod5){
        console.log(`Buzz`)
    }else{
        console.log(i)
    }
}


/*oppure


for (let i = 1; i<= 100; i++){
    let mod3 = (i % 3) === 0
    let mod5 = (i % 5) === 0
    if(mod3 && mod5){
        console.log(`FizzBuzz`)
    }else if(mod3){
        console.log(`Fiz`)
    }else if (mod5){
        console.log(`Buzz`)
    }else{
        console.log(i)
    }
}
    
*/