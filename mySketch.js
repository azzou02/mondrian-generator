const MONDRIAN_PALETTE = [
	'#D40920', // Red
	'#1356A2', // Blue
	'#F7D842' // Yellow
];

const BACKGROUND_COLOR = '#F2F5F1';
const MIN_SIZE = 100;
const STROKE_WEIGHT = 8;

function setup() {
	// responsive canvas
	let canvasSize = min(windowWidth - 100, windowHeight - 100, 600);
	createCanvas(canvasSize, canvasSize);

	// drawing defaults
	strokeWeight(STROKE_WEIGHT);
	stroke(0); 
	noLoop(); 

	redraw();
}

function draw() {
	// clear the canvas
	background(BACKGROUND_COLOR);
	// start the recursive subdivision process
	subdivide(0, 0, width, height);
}

function mousePressed() {
	redraw();
}

/**
 * Recursively subdivides a rectangle.
 * @param {number} x - The x-coordinate of the rectangle.
 * @param {number} y - The y-coordinate of the rectangle.
 * @param {number} w - The width of the rectangle.
 * @param {number} h - The height of the rectangle.
 */
function subdivide(x, y, w, h) {
	// --- Base Case ---
	if (w < MIN_SIZE || h < MIN_SIZE || (w * h < 40000 && random() > 0.5)) {
		if (random() < 0.25) { // 25% chance to color a rectangle
			fill(random(MONDRIAN_PALETTE));
			stroke(0);
			strokeWeight(STROKE_WEIGHT);
			rect(x, y, w, h);
		}
		return; // Stop the recursion for this branch
	}

	// --- Recursive Step ---
	if (w > h) {
		// Split vertically
		const splitX = random(w * 0.2, w * 0.8);
		stroke(0);
		strokeWeight(STROKE_WEIGHT);
		line(x + splitX, y, x + splitX, y + h);
		subdivide(x, y, splitX, h);
		subdivide(x + splitX, y, w - splitX, h);

	} else {
		// Split horizontally
		const splitY = random(h * 0.2, h * 0.8);
		stroke(0);
		strokeWeight(STROKE_WEIGHT);
		line(x, y + splitY, x + w, y + splitY);
		subdivide(x, y, w, splitY);
		subdivide(x, y + splitY, w, h - splitY);
	}
}

// redraw the canvas when the window is resized
function windowResized() {
	let canvasSize = min(windowWidth - 100, windowHeight - 100, 600);
	resizeCanvas(canvasSize, canvasSize);
	redraw();
}