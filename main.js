function makeBanner(num){
    const banner = '######### Challenge '+num+ ' #########'
    console.log(banner)
}

makeBanner(1)
function printNum(){
    let x = 0
    while (x < 5){
        x = x + 1
        console.log(x)
    }
}
printNum()

makeBanner(2)
function printNum2(num){
    let x = 0
    while (x < num){
        x = x + 1
        console.log(x)
    }
}
printNum2(6)

makeBanner(3)
function printNum3(num1,num2){
    while (num1 <= num2){
        console.log(num1)
        num1 = num1 + 1
    }
}
printNum3(2,7)

makeBanner(4)
function printNum4(num){
    let x = 0
    while (x < num){
        x = x + 1
        if (x%2===0){
            console.log(x+ ' Even')
        }
        else {
            console.log(x+ ' Odd')
        }
    }
}
printNum4(5)

makeBanner(5)
function printNum5(num){
    let x = 0
    while (x < num){
        x = x + 1
        if (x%2===0){
            console.log(x)
        }
    }
}
printNum5(11)

makeBanner(6)
function printNum6(){
    let x = 11
    while (x > 1){
        x = x - 1
        console.log(x)
    }
}
printNum6()

makeBanner(7)
function printNum7(){
    let x = 11
    while (x > 1){
        x = x - 1
        console.log(x)
        if (x===1){
            console.log("Blast Off!")
        }
    }
}
printNum7()

makeBanner(8)
function printNum8(num){
    console.log(num)
    while (num-3 > 1){
        console.log(num-3)
        num = num-3
    }
}
printNum8(20)

makeBanner(9)
function printStr9(){
    let n = 0
    while (n<7){
        n = n + 1
        console.log(n+'. Hello!')
    }
}
printStr9()

makeBanner(10)
function printStr10(str){
    let n = 0
    while (n<7){
        n = n + 1
        console.log(n+'. '+str)
    }
}
printStr10('test')

makeBanner(11)
function printStr11(str,num){
    let n = 0
    while (n<num){
        n = n + 1
        console.log(str)
    }
}
printStr11('Good-bye...',4)

makeBanner(12)
function printStr12(str){
    let n = 0
    while (n < str.length){
        console.log(str[n])
        n = n + 1
    }
}
printStr12('think')

makeBanner(13)
function printStr13(str){
    let x = 0
    let y = 0
    while (x < str.length-y-1){
        y = y +1
        console.log(str[x+y])
        x = x + 1
    }
}
printStr13('Nobody')

makeBanner(14)
function printStr14(str){
    let x = str.length-1
    let y =''
    while (x >= 0 && y.length < str.length){
        y = y + str[x]
        x = x-1
    }
    console.log(y)
}
printStr14('backwards')

makeBanner(15)
function printFizzBuzz(num){
    let x = 1
    while (x <= num){
        if (x%3===0 && x%5===0){
            console.log('FizzBuzz')
        }
        else if (x%3===0){
            console.log('Fizz')
        }
        else if (x%5===0){
            console.log('Buzz')
        }
        else {
            console.log(x)
        }
        x = x+1
    }
}
printFizzBuzz(15)

makeBanner(16)
function printFibonacci(num){
    let a = 0
    let b = 1
    let c = 0
    console.log(1)
    while (c < num){
      c = a + b
      console.log(c)
      a = b
      b = c
    }
  }
printFibonacci(144)