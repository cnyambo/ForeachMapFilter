//FOREACH FUNCTION
const body =document.body;
function doubleValues(arr)
{
    const h3 = document.createElement('h3');
    h3.innerHTML = "DOUBLE VALUES FUNCTION";
    body.appendChild(h3);
    let newArr = [];
    arr.forEach(function(val) {
        let newVal= val*2;
        newArr.push(newVal);
    });
    const p = document.createElement('p');
    p.innerHTML = `[${newArr}]`;
    body.appendChild(p);    
    return newArr;
}

function onlyEvenValues(arr)
{
    const h3 = document.createElement('h3');
    h3.innerHTML = "ONLY EVEN VALUES FUNCTION";
    body.appendChild(h3);
    let newArr = [];
    arr.forEach(function(val) {
        if(val%2===0) newArr.push(val);
        return false;
    });
    const p = document.createElement('p');
    p.innerHTML = `[${newArr}]`;
    body.appendChild(p);    
    return newArr;
}
/* const arr =[5,1,2,3,10];
 const onlyEvenValues = arr.filter(function(value, index,array){
     return value%2===0;
 })*/
 function showFirstAndLast(arr)
 {
     const h3 = document.createElement('h3');
     h3.innerHTML = "SHOW FIRST AND LAST CHAR FUNCTION";
     body.appendChild(h3);
     let newArr = [];
     arr.forEach(function(val,index, array) {
          newArr[index] = val.charAt(0)+ val.charAt(val.length-1);
     });
     const p = document.createElement('p');
     p.innerHTML = `[${newArr}]`;
     body.appendChild(p);
     return newArr;
 }
 


    function addKeyAndValue(obj, akey, avalue)
    {
       
       const h3 = document.createElement('h3');
       h3.innerHTML = "ADD KEY AND VALUE FUNCTION";
       body.appendChild(h3);
       obj.forEach(function(value) {
         
            value[akey] = avalue;
         
        });
        const p = document.createElement('p');
        p.innerHTML = JSON.stringify(obj);
        body.appendChild(p);
        console.log(obj);
        return obj;
    }    

    function vowelCount(str)
    {
        const h3 = document.createElement('h3');
        h3.innerHTML = "VOWEL COUNT FUNCTION";
        body.appendChild(h3);
        const vowels = 'aeiou';
        let newObj = {};
        let charOfStr = [];
        str = str.toLowerCase();
        for (let i = 0; i < str.length; i++) {
            charOfStr[i] = str.charAt(i);
        }
        
        charOfStr =[...new Set(charOfStr)];
        console.log(charOfStr);
        charOfStr.forEach(function(val){
            if(vowels.includes(val))
            {
                const stVowel = new RegExp('' + val, 'gi');
                const count = str.match(stVowel).length;
                newObj[val] = count;
               

            } 
            
        });
        const p = document.createElement('p');
        p.innerHTML = JSON.stringify(newObj);
        body.appendChild(p);

        return newObj;

    }

    //MAP FUNCTION


function doubleValuesWithMap(arr){
    return arr.map(function(value){
        return value*2;
    });        
}
//Simplified way
/*

const arr = [1,2,3];
const arr1 =[1,-2,-3];
const  doubleValuesWithMap = arr.map(function(value,index, array){
        return value *2 ;
    });

*/

function valTimesIndex(arr){
    
    return arr.map(function(value,index,array){
        return value*index;
    });
}
//simplified way
/*
const  valTimesIndex = arr1.map(function(value,index, array){
    return value *index ;
});*/


function extractKey(arr,val){
    return arr.map(function(value){
        return value[val];
    });
}

function extractFullName(arr){
    return arr.map(function(value){
        return value.first + " " +value.last;
    });
}


//FILTER FUNCTION

function filterByValue(arr, akey){
    
    return arr.filter(function(value){
        return akey in value;
    });
}

function find(arr, akey){
    return arr.filter(function(value){
        return value === akey;
    })[0];
  
}

function findInObj(arr, akey){
    
    return arr.filter(function(value){
        return akey in value;
    })[0];
}
const isVowel = function(char){
    return 'aeiou'.indexOf(char);
}
const containsVowel = function(val){
    val = val.toLowerCase();
    for(let i of val)
    {
        if(isVowel(i)) return true;
    }
}

function removeVowels(str){
    str = str.toLowerCase();
    const arr =[];
    for (let i = 0; i < str.length; i++) {
        arr[i] = str.charAt(i);
    }
    //console.log(charOfStr);
    return arr.filter(function(value){
        return 'aeiou'.indexOf(value) === -1;
    });
  
}

function doubleOddNumbers(arr){
    
    return arr.filter(function(value){
        return value%2==1;
    }).map(function(newVal){
        return newVal*2;
    });
}
