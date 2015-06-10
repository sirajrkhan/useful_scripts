//console.log('Bismillah');

(function(){

    //accessing the command line parameters
    var wNum = process.argv[2];
    var wUnit = process.argv[3];
    
    // the real action happens here...........
    var con = function(u,n){
        if (u === "F" || u === "f"){
            console.log ((n-32) * (5/9) + 'C');
        } else if (u === "C" || u === "c"){
            console.log ((n * (9/5)) + 32 +'F');
        } else{
            console.log('invalid input');
        }
    }
      
    //Command line would work like this: node conversion.js[space][temperature][space][unit]
    //Example: "node conversion.js 42 C"
    con(wUnit,wNum);
    
})();