"use strict"

function wrapTags(text,tag) {
    const mainText = `<${tag}> ${text} </${tag}>`;
    const outBlock = document.querySelector(".out");
    const result = outBlock.textContent = mainText;
    console.log(result);
}

console.log(wrapTags("Що ви пацики на мотиках","div"));


