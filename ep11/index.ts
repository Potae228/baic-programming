const database = [
    {
       email:'max@utk.ac.th',
       password: 'mint555'
    },

]

function login(email: string, password: string){
   const user = database.filter(function (element, index) {
       return element.email === email
   })
   if (user.length > 0 ) {
       if (atob (user[0].password) === password){
           console.log ('เข้าสู้ระบบสําเร็จ ยินดีต้องรับ')
       }else{
           console.log('ไม่ถุกต้อง โปรดตรวจสอบ')
       }
   }else{
       console.log('ไม่พบผู้ใช้งาน')
   }
}
login('user@gmail.com', 'bWludDU1NQ==')