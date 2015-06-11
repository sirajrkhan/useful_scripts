//console.log('Bismillah');

(function(){

    //accessing the command line parameters
    var param = new Array(process.argv[2]);
    //var strArray = ['Apple','Orange','Mango','Banana','Guava'];
    //var numArray = [21,1,101,40,301];

    //check for String for Numeric Array and sort accordingly
    var iSort = function(a){
        if (chkNum(a) === false){
            a.sort(); 
            console.log(a.toString());
        } else{
            a.sort(function(num1,num2){return num1-num2});
            console.log(a.toString());
        } 
    }

    //Check for pure Numeric Array
    var chkNum = function (ar){
        var x = 0;
        while ( ar.length > x ){
            if (isNaN(ar[x])){
                return false;
            } else {			
                x++;
            }
        }
    }

    //Command line would work like this: node arraySort.js[space][array]
    //Example: "node arraySort.js [1,3,6,2]"
    iSort(param);

})();