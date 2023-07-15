window.requestAnimFrame = window.requestAnimationFrame;
var centerX, centerY, star, i, canvas = document.getElementById("space"), c = canvas.getContext("2d"), numStars = 3000, radius = "0." + Math.floor(9 * Math.random()) + 1, focalLength = 1.8 * canvas.width, warp = 0, stars = [], animate = !0;
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
initializeStars(),
executeFrame();