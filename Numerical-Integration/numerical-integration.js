function ToIntegrateFunction(x_cord){
    return x_cord**3;
};

function NumericalIntegration(rectangles,start,end){
    let total = 0;
    let rectangle_length = Math.abs(start-end)/rectangles
    for (let i = start+rectangle_length/2;i < end;i+=rectangle_length){
        total += ToIntegrateFunction(i)*rectangle_length
    };
    return total;
};


//Version 2
function ToIntegrateFunction(x_cord){
    return x_cord**3;
};

function NumericalIntegration(rectangles,start,end){
    let total = 0;
    let rectangle_length = (end-start)/rectangles
    for (let i = 0;i<rectangles;i++){
        total += ToIntegrateFunction(start+rectangle_length/2+i*rectangle_length)*rectangle_length
    };
    return total;
};


