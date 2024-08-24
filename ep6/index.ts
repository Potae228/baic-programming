for(let i =0;i< cars.length; i++) {
    if (cars[i] === 'Yamaha') {
      console.log('รถซื้อแกง จะแรงได้ไง')
    }
}
    let i : number = 0

    while ( i < cars.length) {
        if (cars [i] === 'Yamaha') {
      console.log('รถซื้อแกง จะแรงได้ไง')
        }
        i++
    }
    const lek: number[] = [1,2,3,4,5,6,7,8,9,10]

for(let x = 0; x < 10; x++) {
    if(lek[x] === 3 || lek[x] === 5 || lek[x] === 7) {
       lek[x] = 0
    }
}
console.log(lek)
const freind: string[] = ['ตะวันฉาย','ภูริทัต','สารโรจ','ภานุพล','ภูวนาถ']

for (let i = 0; i < 5; i++) {
    if(freind[i] === 'ตะวันฉาย') {
        console.log('ไปกินหมูกระทะกัน')
    }
}