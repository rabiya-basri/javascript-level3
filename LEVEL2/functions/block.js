const str1 = 'ouside the function'//global variable,global scope
function greet() {//functional scope
    const str2 = 'inside the function'//functional variable
    if (true) {
        const str3 = 'block scope'
        console.log(str3)//block scope
        console.log(str2)//inside the function
    }
    console.log(str3)//reference error
    console.log(str2)
}
greet()
console.log(str1)//ouside the function
console.log(str2)//reference error
