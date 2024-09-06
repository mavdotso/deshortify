let parent;

const observer = new MutationObserver(function (mutations, mutationInstance) {
    let shortsElement = document.querySelectorAll('[overlay-style=SHORTS]');
    if (shortsElement) {
        OnlyLongs(shortsElement, parent);
    }

    let gridGroupElement = document.querySelector('ytd-rich-grid-group.YtdRichGridGroupHost');
    if (gridGroupElement) {
        removeYtdRichGridGroup(gridGroupElement);
    }
});

observer.observe(document, {
    childList: true,
    subtree: true,
});

function OnlyLongs(element, parent) {
    for (let i = 0; i < element.length; i++) {
        parent = element[i].closest('[lockup=true]');
        parent.style.display = 'none';
    }
}

function removeYtdRichGridGroup(element) {
    if (element) {
        element.remove();
        console.log('ytd-rich-grid-group element removed successfully');
    }
}
