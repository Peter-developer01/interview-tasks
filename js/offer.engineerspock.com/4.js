// 4. Напишите функцию, которая принимает два массива и возвращает новый массив, состоящий из элементов, которые содержатся только в одном из переданных массивов
function getUniqueItems(arr1, arr2) {
	return [...arr1, ...arr2].filter((item) => {
		// If item is in arr1 and not in arr2, return true
		// Else, if item is in arr2 and not in arr1, return true
		// Else, return false
		return (
			(arr1.includes(item) && !arr2.includes(item)) ||
			(arr2.includes(item) && !arr1.includes(item))
		);
	});
}

export default getUniqueItems;
