function createArray() {
    let n = document.getElementById("tb-1");
    let p1 = document.getElementById("p1")
    let randomArray = []
    let number = Number(n.value)

  
        for (let i = 0; i < number; i++) {
            randomArray.push(Math.floor(Math.random() * 10))
    } 

    p1.innerText = "Random numbers: " + randomArray 
 }


 /*for the number(n) of times the user specific
    convert (n) to a number (var n = Number(textboxValue))
    make a random number (https://github.com/dbrown973/If-else/blob/10e904a95a826e92aeec5931a285514b9f5bfc3f/Then/if%20else.js#L7)
    push the random number onto the random array (randomNumber.push(value))
    display random array in p1 
    For loop (https://www.w3schools.com/js/js_loop_for.asp)
*/