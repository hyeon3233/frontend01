setTimeout(()=> {
    console.log('A'); // 3초 후 출력

    setTimeout(()=> {
        console.log('B'); // A가 출력되고 2초 후 출력

        setTimeout(()=> {
            console.log('C') // B가 출력되고 1초 후 출력
        }, 1000);

    }, 2000);

}, 3000);


// setTimeout을 호출하면 콜백 함수를 ~초 후에 실행한다.