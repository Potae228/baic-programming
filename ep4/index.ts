function sayHi(dayOfweek:number){
    if(dayOfweek === 1){
        console.log('สวัสดีวันอาทิตย์')
    }else if (dayOfweek ===2){
        console.log('สวัสดีวันจันทร์')
    }else if (dayOfweek ===3){
        console.log('สวัสดีวันอังคาร')
    }else if (dayOfweek ===4){
        console.log('สวัสดีวันพุธ')
    }else if (dayOfweek ===5){
        console.log('สวัสดีวันพฤหัสบดี')
    }else if (dayOfweek ===6){
        console.log('สวัสดีวันศุกร์')
    }else if (dayOfweek ===7){
        console.log('สวัสดีวันเสาร์')
    }
}

function sayHiSwitch(dayOfweek:number){
    switch (dayOfweek){
    case 1:
    console.log('สวัสดีวันอาทิตย์')
    break
case 2:
    console.log('สวัสดีวันจันทร์')
    break
case 3:   
    console.log('สวัสดีวันอังคาร')
    break
case 4:   
    console.log('สวัสดีวันพุธ')
    break
case 5:   
    console.log('สวัสดีวันพฤหัสบดั')
    break
case 6:   
    console.log('สวัสดีวันศุกร์')
    break
case 7:   
    console.log('สวัสดีวันเสาร์')
    break
    default :
    console.log('error')
    break
}
}
sayHiSwitch('2')
function  shirt(size:string){
    switch (size) {
    case 's' :
    console.log ('ผอม')
    break
    case 'm':
    console.log ('ผอม')
    break
    case 'l':
    console.log('ท้วม')
    break
    case 'xl':
    console.log('อ้วน')
    break
     case '2xl':
    console.log('อ้วน')
    break
    }
    
}
shirt('m')

function  fixedDemical(n:number, digit : number){
    const x = n.toFixed(digit)
    return x

}
console.log(fixedDemical(40,50,7))

function num(a:number){
    const b = a.toLocaleString()
    return b 
}

const str : string = "Phanuphon"

console.log (str.toUpperCase())

function checkStringLength(str : string){
 
    console.log (str.length)
   
   }
   
     checkStringLength ("ควาย")



     function getCharByindex(str : string, index : number){
  
        return str.charAt(index)


     }
console.log (getCharByindex('ข้าวเหนียว',5))
   
const str: string ='อยากกลับบ้าน'
 
 console.log(str.lastIndexOf('บ'))

 const r: string ='อยากกลับบ้าน'
 
 console.log(r.includes('ไม่อยาก'))


 function checkStrIndex(str : string, search : string){
    if(str.includes(search)){
      console.log (str.indexOf(search))
    }else{
     console.log('ไม่พบคำที่ค้นหา')
    }
 }
 checkStrIndex('อยากกลับ home','m')