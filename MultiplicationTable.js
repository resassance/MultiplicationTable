const temp = document.querySelector('#template');

const createColumn = () => {
	const column = document.createElement('div');
	column.classList.add('column');
	return column;
}

const createRow = (str) => {
	const node = temp.content.cloneNode(true);
	const div = node.querySelector('div');
	div.textContent = str;
	return div;
}

const createTable = () => {
	const container = document.querySelector('.container');
	const fragment = document.createDocumentFragment();
	
	for(let i = 1; i <= 10; i++){
		const column = createColumn();
		for(let j = 1; j <= 10; j++){
			column.appendChild(createRow(i + ' * ' + j + ' = ' + i * j));
		}
		fragment.appendChild(column);
	}
	
	container.appendChild(fragment);
}

createTable();