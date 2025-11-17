// 3. Напишите функцию, которая принимает массив объектов и сортирует его по возрастанию значения свойства “age”
function sortByAge(objects) {
	return objects.sort((a, b) => a.age - b.age);
}

export default sortByAge;
