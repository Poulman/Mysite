var el_1 = document.getElementById('some-blog');
var el_2 = document.getElementsByTagName('div');

function changeSingleEL(element) {
	element.innerHTML = "Here is some content";
}

function changeCollection(element) {
	for (var i = 0; i<element.length ; i++) {
		element[i].innerHTML = "We all changed";
	}

}