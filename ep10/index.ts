const database =[
    {
        email: 'user@gmail.com',
        password: 'ducet888'
    }
]

function register(email: string,password: string){
    if (email.includes('0') && email.lastIndexOf('0') !== email.length -1) {
       if (password.length > 8 && password.length < 16 ){
       const userObject = {
        email: email,
        password: password
       }
       database.push(userObject)
       alert('สมัครสมาชิกแล้ว ยินดีต้องรับ คุณ' + email)
       }else{
       alert('รหัสต้องมากกว่า 8 ตัว และไม่เกิน 16')
       }
    }else{
        alert('email ไม่ถูกต้อง')
    }
}

register('kew.com', '86412265')

const database =[
    {
        email: 'user@gmail.com',
        password: 'ducet888'
    },
    {
        email: 'max@gmail.com',
        password: 'foxc45465'
    }
]

function decrypassword(password: string){
    return password.replaceAll('+','u').replaceAll('*','6').replaceAll('*','0')

}

function login(email: string,password: string){
    const user = database.filter(function(element, index){
          return element.email === email
    })
    if (user.length > 0 ) {
        if (user[0].password === password){
            alert('เข้าสู้ระบบสําเร็จ ยินดีต้องรับ')
        }else{
            alert('ไม่ถูกต้อง โปรดตรวจสอบ')
        }
    }else{
        alert('ไม่พบผู้ใช้งาน')
    }
}
login('max@gmail.com','6556fdoew')



  