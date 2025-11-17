// 10. Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только те объекты, у которых имеется свойство “name”
function getOnlyNamedObjects(arr) {
	return arr.filter((obj) => Object.hasOwn(obj, "name"));
}

export default getOnlyNamedObjects;
