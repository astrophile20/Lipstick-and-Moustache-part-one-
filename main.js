function preload() {

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
}

function takeSnapshot() {
    save("myPicture.png");
}