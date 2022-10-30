var c = document.getElementById("myCanvas");
var canvasSVGContext = new CanvasSVG.Deferred();
canvasSVGContext.wrapCanvas(c);
var canvasContext = c.getContext("2d");
function drawCanvas(ctx) {
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(0, 0, 150, 75);
}
drawCanvas(canvasContext);
document.getElementById("captions").appendChild(canvasContext.getSVG());
