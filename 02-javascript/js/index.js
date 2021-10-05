const btn = document.getElementById("btn-add");
const input = document.getElementById("shopping-input");
const list = document.getElementById("shopping-list");

const button = document.getElementById('initial')
button.addEventListener("click", () => {button.parentElement.parentElement.remove();});

function addList(eve) {
	eve.preventDefault();
	if (input.value == "") {
		alert("Item cannot be empty!");
		return;
	}

	const entry = list.getElementsByTagName("LI");

	for (let i = 0; i < entry.length; i++) {
		if (entry[i].innerText === input.value) {
			alert("Item already exist!");
			input.focus();
			return;
		}
	}

	const node = document.createElement("li");

	// left span
	const leftSpan = document.createElement("span");
	leftSpan.className = 'left';
	const textnode = document.createTextNode(input.value + " ");
	leftSpan.append(textnode);
	node.appendChild(leftSpan);

	// right side
	const rightSpan = document.createElement("span");
	rightSpan.className = 'right';
	const x = document.createElement("BUTTON");
	x.className = 'btn';
	x.innerHTML = '<i class="fa fa-close"></i>';
	x.addEventListener("click", () => {x.parentElement.parentElement.remove();});
	rightSpan.append(x);
	node.appendChild(rightSpan);
	list.appendChild(node);

	input.value = "";
}


input.focus();
btn.addEventListener('click', addList);
