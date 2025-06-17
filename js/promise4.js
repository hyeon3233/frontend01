function fnA(item){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('A');
            resolve('B');
        }, 3000);
    });
}
function fnB(item){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(item); // B 출력
            resolve('C');
        }, 2000);
    });
}
function fnC(item){
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(item); // C 출력
            resolve();
        }, 1000);
    });
}
fnA()
.then(item => fnB(item))
.then(item => fnC(item)); 