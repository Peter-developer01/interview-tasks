// 6. Напишите функцию, которая принимает строку и возвращает количество гласных букв в этой строке
function vowelCount(str) {
	// The task did not specify which language's vowels we should count,
	// so I'll count both English and Russian vowels
	return str.match(/[aeiouуеыаёоэяию]/gi)?.length ?? 0;
}

export default vowelCount;
