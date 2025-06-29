// Author: Justin Feng
function MonteCarlo(sample_size){
    let in_circle = 0;
    // Iterate through each point
    for (let i = 0;i < sample_size;i++){
        // Generate random coordinate for point
        let x_cord = Math.random()*2;
        let y_cord = Math.random()*2;
        // Check if point in circle
        if ((x_cord-1)**2 + (y_cord-1)**2<= 1){
            in_circle += 1;
        };
    };
    return in_circle/sample_size*4;
};

