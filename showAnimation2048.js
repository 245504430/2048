/**
 * Created by hc on 2016/10/21.
 */

function showNumWithAnimation (i, j, randomNum) {
    var numCell = $("#number-cell-"+i+"-"+j);
    numCell.css('background-color',getNumberCellBackgroundColor(randomNum));
    numCell.css('color',getNumberColor(randomNum));
    //numCell.text(randomNum);
    // numCell.text('<img src="../20181004225158.jpg" height="100" width="100" />');
    // numCell.append("<img src='../20181004225158.jpg' height='100' width='100'/>");
    switch (randomNum) {
        case 2:
            numCell.append("<img src='../photo/02100x100.jpg' height='100' width='100'/>");
            break;
        case 4:
            numCell.append("<img src='../photo/04100x100.jpg' height='100' width='100'/>");
            break;
        case 8:
            numCell.append("<img src='../photo/08100x100.jpg' height='100' width='100'/>");
            break;
        case 16:
            numCell.append("<img src='../photo/16100x100.jpg' height='100' width='100'/>");
            break;
        case 32:
            numCell.append("<img src='../photo/32100x100.jpg' height='100' width='100'/>");
            break;
        case 64:
            numCell.append("<img src='../photo/64100x100.jpg' height='100' width='100'/>");
            break;
        case 128:
            numCell.append("<img src='../photo/128100x100.jpg' height='100' width='100'/>");
            break;
        case 256:
            numCell.append("<img src='../photo/256100x100.jpg' height='100' width='100'/>");
            break;
        case 512:
            numCell.append("<img src='../photo/512100x100.jpg' height='100' width='100'/>");
            break;
        case 1024:
            numCell.append("<img src='../photo/1024100x100.jpg' height='100' width='100'/>");
            break;
        case 2048:
            numCell.append("<img src='../photo/2048x100.jpg' height='100' width='100'/>");
            break;

        default:
            numCell.text(randomNum);
            break;

    }
    numCell.animate({
        width: cellWidth,
        height: cellWidth,
        top: getPosTop(i,j),
        left: getPosLeft(i,j)
    },50)

}

function showMoveAnimation(fromX,fromY,toX,toY) {
    var numCell = $("#number-cell-"+fromX+"-"+fromY);
    numCell.animate({
        top:getPosTop(toX,toY),
        left:getPosLeft(toX,toY)
    },200)
}


function updateScore() {
    $("#score").text(score);
}