const score = [10,23,26,30,33]

let sum : number = 0

for (let i = 0; i < score.length ; i++) {
   sum = sum + score  [i]
}
let avg = sum / score.length
console.log("total:",sum)
console.log("avg:",avg)
const myStudent: string ="เซน,แทน,เวฟ,รุ้ง,แท็ก,สร"

const myStudentArray : string[] = myStudent.split(',')

console.log(myStudent)
console.log(myStudentArray)




const animal: string ='หมา*แมว*กระต่าย*หมี'

const animalA : string[] = animal.split('*')


console.log(animalA)


const animals: string ='หมา*แมว*กระต่าย*กระทิง'

const animalAn : string[] = animals.split('*')


console.log("ตั้งต้น: ",animalAn)

animalAn.pop()
console.log("เอาตัวสุดท้ายออก:",animalAn)

animalAn.push('กระทิง')

console.log("ใส่ต่อท้าย:",animalAn)

animalAn.shift()
console.log("เอาตัวหน้าออก:",animalAn)

animalAn.unshift('กาบิบาร่า')
console.log("ใส่ตัวหน้า",animalAn)

const names =["แจน","นุ่น","โบว์","กระแต"]

const namesn : string[] = animals.split(',')
names.sort()

console.log(names)

names.reverse()

console.log(names)
const me = {
    firstname : 'phurithat',
    lastname : 'vongsonthi',
    age : 21 ,
    callnumber: "0835454524",
    gender: "men"
 }
 console.log (me)