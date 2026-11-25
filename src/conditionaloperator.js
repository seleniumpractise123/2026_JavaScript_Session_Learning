
console.log( 10 == 10 );

//if else block
//if if if-else
//if else-if else
//nested-if
//switch case

let x = 10;
if( x >= 10){
  console.log('h1');
}else{
  console.log('Bye');
}

console.log('--------------');

if(true){
    console.log('hello');
}else{
    console.log('byeee');
}

console.log('--------------');

if(false){
    console.log('hello');
}else{
    console.log('byeee');
}
console.log('--------------');
let isEleExist = true; //pw -- web -- element -- true
if(isEleExist){
    console.log('click on the element');
}else{
    console.log('throw error');
}
console.log('--------------');
let marks = 100;
if( marks >= 90){
    console.log('A grade');
    if(marks >= 95){
        console.log( 'A++ grade');
        if( marks === 100){
            console.log('eligible for scholarship');
        }else{
            console.log('not eligible for scholarship');
        }
    }
}else{
    if( marks <= 80){
        console.log("Grade B");
    }else{
        console.log("Grade B++");
    }
}
console.log('------------');
let browser = 'chrome';

if(browser === 'chrome'){
    console.log('launch chrome');
}

if(browser === 'firefox'){
    console.log('launch firefox');
}

if(browser === 'edge'){
    console.log('launch edge');
}

if(browser === 'safari'){
    console.log('launch safari');
}else{
    console.log('Plz pass the right browser:, invalid browser........');
}

console.log('----if else-if else-if-------');

let browserName = 'chrome';
if(browserName === 'chrome'){
    console.log('launch chrome');
}else if(browserName === 'firefox'){
    console.log('launch firefox');
}else if(browserName === 'edge'){
    console.log('launch edge');
}else if(browserName === 'safari'){
    console.log('launch safari');
}else{
    console.log('Plz pass the right browser:, invalid browser........');
}



