function onButtonClick() {
	//target = document.getElementById("output");
	//target.innerText = document.forms.id_form1.id_textBox1.value;
	
	target2 = document.getElementById("mod_out");
	target2.innerHTML = colorize(document.forms.id_form1.id_textBox1.value);
}
function colorize(t){
	var m = '';
	var color = 'aaaaaa';
	for(var i=0;i<t.length;i++){
		color = decideColor(t[i]);
		//console.log(t[i]);
		m = m + '<font color="' + color + '" class="edge">' + t[i] + '</font>'
	}
	return m;
}
function decideColor(c){
   <!-- カラーコードを好きに変えて使えます(*´∀｀*) -->
   <!-- Color selected by OTSUMURA -->
	switch(c){
		case 'a':
		case 'A':
			return '#FF0000';
		case 'b':
		case 'B':
			return '#4B0082';
		case 'c':
		case 'C':
			return '#FFFF00';
		case 'd':
		case 'D':
			return '#000000';
		case 'e':
		case 'E':
			return '#FFA500';
		case 'f':
		case 'F':
			return '#00FFFF';
		case 'g':
		case 'G':
			return '#FF8C00';
		case 'h':
		case 'H':
			return '#9400D3';
		case 'i':
		case 'I':
			return '#FFD700';
		case 'j':
		case 'J':
			return '#2F4F4F';
		case 'k':
		case 'K':
			return '#A52A2A';
		case 'l':
		case 'L':
			return '#228B22';
		case 'm':
		case 'M':
			return '#FF7F50';
		case 'n':
		case 'N':
			return '#A9A9A9';
		case 'o':
		case 'O':
			return '#FFE4B5';
		case 'p':
		case 'P':
			return '#DDA0DD';
		case 'q':
		case 'Q':
			return '#BA55D3';
		case 'r':
		case 'R':
			return '#B22222';
		case 's':
		case 'S':
			return '#7FFF00';
		case 't':
		case 'T':
			return '#FF6347';
		case 'u':
		case 'U':
			return '#89BDDE';
		case 'v':
		case 'V':
			return '#708090';
		case 'w':
		case 'W':
			return '#BE0032';
		case 'x':
		case 'X':
			return '#1E90FF';
		case 'y':
		case 'Y':
			return '#0000CD';
		case 'z':
		case 'Z':
			return '#72777D';
		default:
			return '#000';
	}
}
