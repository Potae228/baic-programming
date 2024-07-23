function add(a: number, b: number) {
    return a + b
 }
     
 
 console.log (add(3,4))
 function Lob(a: number, b: number) {
     return a - b
 }
 
 
 console.log (Lob(8,3))
 function kun(a: number, b: number, c: number, d: number) {
     return a * b *c * d
 }
 
 
 console.log (kun(23,43,23,21))
 function หิว (หิวจริงไหม : boolean) { 
     if( หิว===true) { 
         console.log('หิวโว๊ย')
     }else {
              console.log('ไม่หิว') 
     }
 }
          
  function grade (homework : number, midterm: number,final:number){
      let score : number = homework + midterm +final 
 
      if (score<50){
          return 'สอบตก'
      }else {
          return 'สอบผ่าน' 
       } 
  } 
  console.log(grade(8,20,30))
 
 function grade (homework:number,midterm:number,final:number){
     let score :number = homework+midterm+final
       if (score<50) {
       return 'เกรด F'
     }else if (score < 60){
      return 'เกรด D'
      }else if (score < 70){ 
       return 'เกรด C'
      }else if (score < 80){
       return 'เกรด B'
     }else {
       return 'เกรด A'
     }
  }
  console.log (grade(20,20,30))
 