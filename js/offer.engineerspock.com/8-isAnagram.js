// 8. Напишите функцию, которая принимает две строки и возвращает true, если одна строка является анаграммой другой (имеют одинаковые символы, но в разном порядке)
function isAnagram(str1, str2) {
	return (
		str1.toLowerCase().split("").sort().join() ===
		str2.toLowerCase().split("").sort().join()
	);
}

export default isAnagram;
