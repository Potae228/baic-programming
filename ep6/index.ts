let sum: number = 0
let i: number = 1

while (i<=31) {
    sum = sum + i++
}

console.log('Total:',sum)

let sum: number = 0
let i: number = 1

while (i<=31) {
    sum = sum + i
    i++
}

console.log('Total:',sum)

let count: number = 0

while (true) {
    console.log("โสดโว้ย")
    count++
    if(count === 10) {
        break
    }
}

for (let i = 1; i <= 13; i++) {
    console.log('ฉันอายุ' + i +' ปี')
}


let i: number = 1
while (i <= 13) {
   console.log('ฉันอายุ' + i +' ปี')
   i++
}


let i: number = 1
do {
    console.log('ฉันอายุ' + i +' ปี')
    i++
}while(i <=13)

    const cars: string[] = ['Toyota','honda','Suzuki']

const str:string = 'ชอบก็จัดประหยัดทำไม'

console.log(str[2])

const cars: string[] = ['Toyota','honda','Suzuki','Yamaha','Mazda']

for (let i = 0; i < 5; i++)
    if(cars[i] === 'Yamaha') {
        console.log('รถซื้อแกง')
    }


const freind: string[] = ['ตะวันฉาย','ภูริทัต','สารโรจ','ภานุพล','ภูวนาถ']

for (let i = 0; i < 5; i++) {
    if(freind[i] === 'ตะวันฉาย') {
        console.log('ไปกินหมูกระทะกัน')
    }
}

const lek: number[] = [1,2,3,4,5,6,7,8,9,10]

for(let x = 0; x < 10; x++) {
    if(lek[x] === 3 || lek[x] === 5 || lek[x] === 7) {
       lek[x] = 0
    }
}
console.log(lek)
