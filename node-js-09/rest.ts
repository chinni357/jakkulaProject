let addNumbers=function(...nums:number[])
{
	let p;
	let sum:number=0;
	for(p=0;p<nums.length;p++)
	{
	sum=sum+nums[p];
	}
	return sum;
}
console.log(addNumbers(10,20));
console.log(addNumbers(10,20,30));
console.log(addNumbers(10,20,50,10,20));