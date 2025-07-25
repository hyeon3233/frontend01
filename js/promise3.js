
const p = new Promise((resolve, reject) => {
    setTimeout( () => {
        console.log('A');
        resolve('B');
    }, 3000)
    });

    p.then( item => {
        return new Promise((resolve)=> {
            setTimeout(() => {
                console.log(item);
            }, 2000)
        })
    }).then ( item => {
        setTimeout(() => {
            console.log(item);
        }, 1000);
    });