let outer = document.getElementById("outer"),
    wrapper = document.getElementById("wrap"),
    maxWidth = outer.clientWidth,
    maxHeight = outer.clientHeight;
window.addEventListener("resize", resize);
resize();
function resize() {
    let scale,
        width = window.innerWidth,
        height = window.innerHeight,
        isMax = width >= maxWidth && height >= maxHeight;
    console.log("🚀 : isMax", isMax);

    scale = Math.min(width / maxWidth, height / maxHeight);
    outer.style.transform = isMax ? "" : "scale(" + scale + ")";
    // wrapper.style.width = isMax ? "" : maxWidth * scale;
    // wrapper.style.height = isMax ? "" : maxHeight * scale;
}
