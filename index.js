const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let sum = 0;

let totalBatteries = sum

for (let i = 0; i < batteryBatches.length; i++){
    sum += batteryBatches[i];
}
console.log(totalBatteries);

const initialValue = 0;
totalBatteries = batteryBatches.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 
    initialValue
    );

//     console.log(sumWithInitial)