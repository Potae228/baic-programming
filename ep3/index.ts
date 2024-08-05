function helloWorld(){
    console.log("สวัสดี")
}
้helloWorld() 

function helloName (name:string) {
    console.log(name)
}
helloName('Max')

function getP1() {
    return 3.14
}
 console.log(getP1())

 function st (fname :string,sname: string , dname: string){
    if(fname === 'mix'&& sname ==='zane'&& dname=== 'forth'){
        console.log('พร้อมเรียน')
    }else{
        console.log('ไม่พร้อมเรียน')
 }
 st('mix','zane')
 function cs(vname :string,dname: string , aname: string){
    if(vname === 'mix'&& dname ==='zane'|| aname=== 'forth'){
        console.log('พร้อมเรียน')
    }else{
        console.log('ไม่พร้อมเรียน')
 }
 } 
 cs('mix','zane','forth')
 function ss(  gender:string, height: number, weight :number , exceeding:number ){
    if( gender === 'ชาย'&& height>170 ||weight > 50 &&exceeding <= 110 ){
     console.log('จับใบดำจับใบแดง')
    }else{
        console.log('ไม่เข้าเกณฑ์')
 }
 }
 ss('ชาย','170','110' )
 function sc( age: number ,month:number , dep:number){
    if( age >'16'&& month <70000 && dep < 500000 ){
     console.log('รับ100000')
    }else{
      console.log('อด')
    }
 }
  sc('20','2000','50000' )