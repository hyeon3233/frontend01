setTimeout(()=> {
    console.log('A') // 3초 후 A 출력
}, 3000);
setTimeout(()=> {
    console.log('B') // 2초 후 B 출력
}, 2000);
setTimeout(()=> {
    console.log('C') // 1초 후 C 출력
}, 1000);
// setTimeout을 호출하면 콜백 함수를 ~초 후에 실행한다.
//비동기 함수라서 실행 순서는 호출 순서와 관계없이 지정한 시간 후에 실행