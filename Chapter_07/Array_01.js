
let arr = [22,54,67,87,90,35]
let sum=0;
let avg;

for (let marks of arr) {
    sum += marks;
    avg = sum / arr.length;

}
    console.log("sum " + sum);
    console.log("avg " + avg);

