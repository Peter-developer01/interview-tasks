// 5. Напишите функцию, которая принимает число и возвращает его факториал
const memo = [1n, 1n];
function factorial(number) {
	if (number <= 1n) {
		return number;
	}
	let result = 1n;
	for (let i = 1n; i <= number; i++) {
		result *= i;
		memo[i] = result;
	}

	return result;
}

export default factorial;
