//console.log('Bismillah');

(function(){

    //Dummy data for checking
    //var strArray = "['Apple','Orange','Mango','Banana','Guava']";
    //var numArray = [21,1,101,40,301];

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
    
    //makeshift solution for converting the command-line inputs to Array
    var makeArr = function (str){
        if (str && !(str instanceof Array)){
            str = str.substring(1,str.length-1);
            str = str.split(",");
            return str;
        }
    }

    //accessing the command line parameter
    //Expectation: "node arraySort.js [1,3,6,2]"
    var param = makeArr(process.argv[2]);
    
    //check for String for Numeric Array and sort accordingly
    var iSort = function(a){
        if (!param || false === (param instanceof Array)){
            console.log ('invalid or no parameters');
        }else if (chkNum(a) === false){
            a.sort(); 
        } else{
            a.sort(function(num1,num2){return num1-num2});
        } 
    }

    //Command line would work like this: node arraySort.js[space][array]
    iSort(param);
})();