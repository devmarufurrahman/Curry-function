//! curry function discount & price calculate

function disCalculateCurry(discount) {
	return function (price) {
		return discount * price;
	};
}

let fivePercentDis = disCalculateCurry(0.05);
let tenPercentDis = disCalculateCurry(0.1);
let fifteenPercentDis = disCalculateCurry(0.15);

console.log(fivePercentDis(900));
console.log(tenPercentDis(1200));
console.log(fifteenPercentDis(2100));
