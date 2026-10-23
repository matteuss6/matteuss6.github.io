let c = document.getElementById('main-canvas');
let ctx = c.getContext('2d');

let width = c.width;
let height = c.height;

//let n = 20;
//let dx = width / n;
//let dy = height / n;

//for (let i = 0; i < n; i++) {

//ctx.save();
//ctx.translate(i*dx + dx/2, i*dy + dy/2);
//ctx.rotate(i * (Math.PI / (n-1)));
//ctx.fillRect(-dx/2, -dy/2, dx, dy);
//ctx.restore();
//}

function circle(t, r = 1, h=0, k=0) {
	return [h + r * Math.cos(t),k + r * Math.sin(t)];
}

let N = 20;
let r = Math.min(width, height) / 3;
let points = Array.from({length: 2 * N}, () => [0.0, 0.0]);
let origin = [width / 2, height / 2];
ctx.fillRect(origin[0], origin[1], 1, 1);

for (let i = 0; i < 2 * N; i++) {
	let t = i * ((2 * Math.PI) / (2 * N));
	let p = circle(t, r, origin[0], origin[1]);
	points[i] = p;
	ctx.fillRect(p[0], p[1], 1, 1);

}

for (let i = 0; i < N; i++) {
	let from = points[i];
	let to = points[2 * i];
	ctx.beginPath();
	ctx.moveTo(from[0], from[1]);
	ctx.lineTo(to[0], to[1]);
	ctx.strokeStyle = 'blue';
	ctx.stroke();
    
    from = points[N + i];
	to = points[2 * i];
	ctx.beginPath();
	ctx.moveTo(from[0], from[1]);
	ctx.lineTo(to[0], to[1]);
	ctx.strokeStyle = 'blue';
	ctx.stroke();
	

}

