document.getElementById('Save/Load').onclick = function() {
	saveLoadPuzzle();
}
document.getElementById('Clear Cells').onclick = function() {
	clearCells();
}
document.getElementById('Save/Load').onclick = function() {
	saveLoadPuzzle();
}
document.getElementById('1').onclick = function() {
	highlight(1);
}
document.getElementById('2').onclick = function() {
	highlight(2);
}
document.getElementById('3').onclick = function() {
	highlight(3);
}
document.getElementById('4').onclick = function() {
	highlight(4);
}
document.getElementById('5').onclick = function() {
	highlight(5);
}
document.getElementById('6').onclick = function() {
	highlight(6);
}
document.getElementById('7').onclick = function() {
	highlight(7);
}
document.getElementById('8').onclick = function() {
	highlight(8);
}
document.getElementById('9').onclick = function() {
	highlight(9);
}
document.getElementById('Clear').onclick = function() {
	highlight(0);
}
document.getElementById('Update').onclick = function() {
	updatePencilmarks();
}
document.getElementById('Reset').onclick = function() {
	clearPencilmarks();
}
document.getElementById('show_duplicates').onclick = function() {
	showDuplicates();
}
document.getElementById('mark_blank_cells_0').onclick = function() {
	setBlankCells(0);
}
document.getElementById('mark_blank_cells_1').onclick = function() {
	setBlankCells(1);
}
document.getElementById('mark_blank_cells_2').onclick = function() {
	setBlankCells(2);
}
document.getElementById('mark_blank_cells_3').onclick = function() {
	setBlankCells(3);
}
document.getElementById('mark_blank_cells_4').onclick = function() {
	setBlankCells(4);
}
document.getElementById('Black').onclick = function() {
	deleteColoredCells('0');
}
document.getElementById('Blue').onclick = function() {
	deleteColoredCells(1);
}
document.getElementById('Red').onclick = function() {
	deleteColoredCells(2);
}
document.getElementById('Green').onclick = function() {
	deleteColoredCells(3);
}
document.getElementById('Purple').onclick = function() {
	deleteColoredCells(4);
}
document.getElementById('show_solution').onclick = function() {
	showSolution();
}
document.getElementById('get_hint').onclick = function() {
	getHint();
}
document.getElementById('begin_solving_button').onclick = function() {
	submitGivens();
}
document.getElementById('begin_solving_button').onmouseover = function() {
	this.classList.add('large_button_hover'); this.classList.remove('large_button');
}
document.getElementById('begin_solving_button').onmousedown = function() {
	this.classList.add('large_button_hover'); this.classList.remove('large_button');
}
document.getElementById('begin_solving_button').onmouseout = function() {
	this.classList.add('large_button'); this.classList.remove('large_button_hover');
}
document.getElementById('Close').onclick = function() {
	document.getElementById('side_bar').style.display='none';
}
document.getElementById('paste_puzzle').onkeydown = function() {
	if (event && event.keyCode === 13){pastePuzzle();};
}
document.getElementById('paste_puzzle_button').onclick = function() {
	pastePuzzle();
}
document.getElementById('copy_puzzle').onclick = function() {
	this.value = cells.toString().replace(/[^0-9]/g, ''); javascript:select();
}
document.getElementById('import_save').onkeydown = function() {
	if (event && event.keyCode === 13){decode(this.value);};
}
document.getElementById('import_save_button').onclick = function() {
	decode(document.getElementById('import_save').value);
}
document.getElementById('export_save').onclick = function() {
	this.value = encode(); javascript:select();
}
document.getElementById('save_cookie').onclick = function() {
	saveToCookie();
}
document.getElementById('load_cookie').onclick = function() {
	loadFromCookie();
}
