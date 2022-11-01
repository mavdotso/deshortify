let parent;

const observer = new MutationObserver(function (mutations, mutationInstance) {
    let element = document.querySelectorAll("[overlay-style=SHORTS]");
    if (element) {
        OnlyLongs(element, parent);
    }
});

observer.observe(document, {
    childList: true,
    subtree:   true
});

function OnlyLongs(element, parent) {
	for (let i = 0; i < element.length; i++) {
		parent = element[i].closest("[lockup=true]");
		parent.style.display = "none";
	}
}
