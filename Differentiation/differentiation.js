function ToRound(num,decimal_points){
    return Math.round(num*10**decimal_points)/10**decimal_points;
  }
  
  function NumericalDifferentiation(x_value){
    return ToRound((ToIntegrateFunction(x_value+10**-5)-ToIntegrateFunction(x_value))/10**-5,2);
  }