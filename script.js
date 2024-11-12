//prime number--
let n=+prompt('enter prime ')
if(n>1){
prime=true
i=2
while(i<n){
    if(n%i==0){
      prime=false
      console.log('not prime')
        break
    }
     i++
}
if(prime){
    console.log('prime')
}

}
else {
    console.log('1 is not composite')
}


//---even number sum 1 to 50

let nn=50
let sum=0
i=1
while(i<=nn){
  if(i%2===0){  
    sum+=i
  }
    i++
}
console.log(sum)

///count digit
n=prompt('enter')
count=0
i=0
while(i<n.length){
    count=count+1
    i++
}
console.log(count)

// Find Minimum Digit
n=927648
let small=9
while(n>0){
    digit=n%10
    if(digit<small){
    small=digit
    }
 n=Math.floor(n/10)
}
console.log(small)

//Sum of Odd Digits
numm=135879
su=0
while(0<numm){
  let digit=numm%10
    if(digit%2==1){
        su+=digit
        // console.log(digit)
    }
    numm=Math.floor(numm/10)
}
console.log(su)
/*5. Perfect Number Check

A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding itself). Write a program to check if a given number is a perfect number.

Example: Input: 28 → Output: true (since 1 + 2 + 4 + 7 + 14 = 28)
*/
let num = 12;  
let summ = 0;    
for (let i = 1; i <= Math.floor(num / 2); i++) {
  if (num % i === 0) {  
    summ += i;  
  }
}

if (summ === num) {
  console.log(num + " is a perfect number.");
} else {
  console.log(num + " is not a perfect number.");
}

