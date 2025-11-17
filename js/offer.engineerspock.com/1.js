// 1. Напишите функцию, которая принимает массив целых чисел и возвращает сумму всех чисел, кратных 3
function sumMultiplesOf3(numbers) {
	let sum = 0;
	numbers.forEach((number) => {
		if (number % 3 === 0) sum += number;
	});

	return sum;
}

export default sumMultiplesOf3;
