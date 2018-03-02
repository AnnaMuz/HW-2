


function DrowTriangle1 (row){
var i=1;
var j=0;
var res="";
var bar="#";

	for (i =1; i <=row; i++){
		for (j = 1;j<=i; j++) {
			res = res + bar;
		}
		res = res +'\n';
	}
	alert(res);
}





function DrowChess (row,col){
var i=0;
var j=0;
var res="";
var bar1="   #";
var bar2="#   "
var mainBar;
var counter;

while (i<row){
	counter = i%2;
	while(j < col){
		if (counter < 1){
			mainBar = bar1
		}else{
			mainBar = bar2;
		}
		res = res + mainBar;
		j++
	}
	j=0;
	i++;
	res= res + '\n';
}
alert(res);
}

function DrowTriangle2 (row){
var i=1;
var j=0;
var k=0;
var c=0;

var res="";
var bar="#";

	for (i =1; i <=row; i++){
		c = row - k;
		k++;
		for (j = 1;j<=c; j++) {
			res = res + bar;
		}

		res = res +'\n';
	}
	alert(res);
}



function DrowTriangle3 (row){
var i=1;
var j=0;
var k=0;
var c=0;

var res="";
var tab = ' ';
var bar="#";

	for (i =1; i <=row; i++){
		c = row - k;
		k++;
		for (j = 1;j<=c; j++) {
			res = res + bar;
		}
		res = res +'\n' + tab;
		tab= tab + tab;
	}
	alert(res);
}

DrowTriangle1(7);
DrowTriangle2(7);
DrowTriangle3(4);
DrowChess(4,7);

















