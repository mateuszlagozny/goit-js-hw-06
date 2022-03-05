

const h2 = document.querySelectorAll("h2");
const countCategory = h2.length;

console.log(`Number of categories: ${countCategory}`);

for (const item of h2) {
	const itemsCategory = item.nextElementSibling.children;

	console.log(`Category: ${item.textContent}`);

	console.log(`Elements: ${itemsCategory.length}`);
}
