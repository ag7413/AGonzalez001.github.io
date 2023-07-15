window.requestAnimFrame = window.requestAnimationFrame;
var centerX, centerY, star, i, canvas = document.getElementById("space"), c = canvas.getContext("2d"), numStars = 2500, radius = "0." + Math.floor(9 * Math.random()) + 1, focalLength = 1.8 * canvas.width, warp = 0, stars = [], animate = !0;
function executeFrame() {
    animate && requestAnimFrame(executeFrame),
    moveStars(),
    drawStars()
}
function initializeStars() {
    for (centerX = canvas.width / 2,
    centerY = canvas.height / 2,
    stars = [],
    i = 0; i < numStars; i++)
        star = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            z: Math.random() * canvas.width,
            o: "0." + Math.floor(99 * Math.random()) + 1
        },
        stars.push(star)
}
function moveStars() {
    for (i = 0; i < numStars; i++)
        (star = stars[i]).z--,
        star.z <= 0 && (star.z = canvas.width)
}
function drawStars() {
    var t, e, a;
    for (canvas.width == window.innerWidth && canvas.width == window.innerWidth || (canvas.width = window.innerWidth,
    canvas.height = window.innerHeight,
    initializeStars()),
    0 == warp && (c.fillStyle = "rgba(0,0,0,1)",
    c.fillRect(0, 0, canvas.width, canvas.height)),
    c.fillStyle = "rgba(200, 255, 255, " + radius + ")",
    i = 0; i < numStars; i++)
        t = ((star = stars[i]).x - centerX) * (focalLength / star.z),
        t += centerX,
        e = (star.y - centerY) * (focalLength / star.z),
        e += centerY,
        a = focalLength / star.z * 1,
        c.fillRect(t, e, a, a),
        c.fillStyle = "rgba(200, 255, 255, " + star.o + ")"
}
function warpTimeout() {
    warp = 0,
    setTimeout(messageTimeout, 1e3),
    setTimeout(animationTimeout, 2e3)
}
function messageTimeout() {
    document.getElementById("message").remove()
}
function animationTimeout() {
    animate = !1,
    setTimeout(NothingTiming, 1e3)
}
function NothingTiming() {
    document.getElementById("nothing").style.display = "inline-block"
}
initializeStars(),
document.getElementById("warp").addEventListener("click", function(t) {
    window.warp = 1 == window.warp ? 0 : 1,
    document.getElementById("warp").remove(),
    document.getElementById("message").style.display = "inline-block",
    setTimeout(warpTimeout, 4e3),
    window.c.clearRect(0, 0, window.canvas.width, window.canvas.height),
    executeFrame()
}),
executeFrame();
