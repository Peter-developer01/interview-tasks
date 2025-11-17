// 9. Напишите функцию, которая принимает массив чисел и возвращает самое большое число из массива
function getBiggestNumber(arr) {
	// Since Math.max() returns -Infinity if you pass it no arguments
	// and -Infinity is not a false boolean value, we need to check it manually
	const result = Math.max(...arr);
	return Number.isFinite(result) ? result : undefined;
}

export default getBiggestNumber;
