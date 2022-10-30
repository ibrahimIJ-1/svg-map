var canvasSVGContext = new CanvasSVG.Deferred();

function drawCanvas(ctx) {
  var c = document.getElementById("can");
  canvasSVGContext.wrapCanvas(c);
  var canvasContext = c.getContext("2d");
  let region = new Path2D();
  region.moveTo(30, 90);
  region.lineTo(110, 20);
  region.lineTo(240, 130);
  region.lineTo(60, 130);
  region.lineTo(190, 20);
  region.lineTo(270, 90);
  region.closePath();
  ctx.fillStyle = "green";
  ctx.fill(region, "evenodd");
  //   ctx.fillStyle = "#FF0000";
  //   ctx.fillRect(0, 0, 150, 75);
  document.getElementById("captions").appendChild(canvasContext.getSVG());
}
// drawCanvas(canvasContext);
