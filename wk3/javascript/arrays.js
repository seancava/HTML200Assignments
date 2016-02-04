var colorList = ["Red", "Blue", "Green", "Purple", "Orange", "Yellow"];

////start drawing thumbs///////////////
var drawingList = new Array();
  drawingList[0] = "images/drawing/thumbs/artwork_1.jpg";
  drawingList[1] = "images/drawing/thumbs/artwork_2.jpg";
  drawingList[2] = "images/drawing/thumbs/artwork_3.jpg";
  drawingList[3] = "images/drawing/thumbs/artwork_4.jpg";
  drawingList[4] = "images/drawing/thumbs/artwork_5.jpg";
  drawingList[5] = "images/drawing/thumbs/artwork_6.jpg";
  drawingList[6] = "images/drawing/thumbs/artwork_7.jpg";
  drawingList[7] = "images/drawing/thumbs/artwork_8.jpg";
  drawingList[8] = "images/drawing/thumbs/artwork_9.jpg";
  drawingList[9] = "images/drawing/thumbs/artwork_10.jpg";
  drawingList[10] = "images/drawing/thumbs/artwork_11.jpg";
  drawingList[11] = "images/drawing/thumbs/artwork_12.jpg";
  drawingList[12] = "images/drawing/thumbs/artwork_13.jpg";
  drawingList[13] = "images/drawing/thumbs/artwork_14.jpg";
  drawingList[14] = "images/drawing/thumbs/artwork_15.jpg";
  drawingList[15] = "images/drawing/thumbs/artwork_16.jpg";
  drawingList[16] = "images/drawing/thumbs/artwork_17.jpg";
  drawingList[17] = "images/drawing/thumbs/artwork_18.jpg";
  drawingList[18] = "images/drawing/thumbs/artwork_19.jpg";
  drawingList[19] = "images/drawing/thumbs/artwork_20.jpg";
  drawingList[20] = "images/drawing/thumbs/artwork_21.jpg";
  drawingList[21] = "images/drawing/thumbs/artwork_22.jpg";
  drawingList[22] = "images/drawing/thumbs/artwork_23.jpg";
  drawingList[23] = "images/drawing/thumbs/artwork_24.jpg";
  drawingList[24] = "images/drawing/thumbs/artwork_25.jpg";

////start oil thumbs/////////////////
var oilList = new Array();
  oilList[0] = "images/oil/thumbs/artwork_1.jpg";
  oilList[1] = "images/oil/thumbs/artwork_2.jpg";
  oilList[2] = "images/oil/thumbs/artwork_3.jpg";
  oilList[3] = "images/oil/thumbs/artwork_4.jpg";
  oilList[4] = "images/oil/thumbs/artwork_5.jpg";
  oilList[5] = "images/oil/thumbs/artwork_6.jpg";
  oilList[6] = "images/oil/thumbs/artwork_7.jpg";
  oilList[7] = "images/oil/thumbs/artwork_8.jpg";

//////start watercolor thumbs////////////////
var waterList = new Array();
  waterList[0] = "images/watercolor/thumbs/artwork_1.jpg";
  waterList[1] = "images/watercolor/thumbs/artwork_2.jpg";
  waterList[2] = "images/watercolor/thumbs/artwork_3.jpg";
  waterList[3] = "images/watercolor/thumbs/artwork_4.jpg";
  waterList[4] = "images/watercolor/thumbs/artwork_5.jpg";
  waterList[5] = "images/watercolor/thumbs/artwork_6.jpg";
  waterList[6] = "images/watercolor/thumbs/artwork_7.jpg";
  waterList[7] = "images/watercolor/thumbs/artwork_8.jpg";
  waterList[8] = "images/watercolor/thumbs/artwork_9.jpg";
  waterList[9] = "images/watercolor/thumbs/artwork_10.jpg";

function buildThumbs()  
{
  var thumbsDiv = document.getElementById("thumbs");
  var output = "";
  
  for(var d = 0; d < drawingList.length; d++)
  {
    output += '<img src="' + drawingList[d] + '" />';
  }
  
  for(var o = 0; o < oilList.length; o++)
  {
    output += '<img src="' + oilList[o] + '" />';
  }
  
  for(var w = 0; w < waterList.length; w++)
  {
    output += '<img src="' + waterList[w] + '" />';
  }
  
  thumbsDiv.innerHTML = output;
};
window.onload = function()
{
 buildThumbs();
};