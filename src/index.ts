let a;
a = 10;
const b = 30;
let sum;
{
	let a = 30;
	let sum = b + a;
	console.log(sum);
}
console.log(a);
console.log(b);
console.log(sum);
{
	a = 50;
	sum = b + a;
	console.log(sum);
}
console.log(a);
console.log(b);
console.log(sum);
