const a = 1;
const b = 5;
let result = 1;

for(let i = a; i <= b; i++) {
   console.log('\n=> 4 =<\n\n')
   for(let j = 1; j <= 10; j++) {
      console.log(i + ' x ' + j + ' = ' + i * j);
   }
}