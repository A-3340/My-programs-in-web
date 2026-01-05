let b = document.getElementById('t')
let username = document.getElementById('tr')
let A7 = document.getElementById('A')
let pass = document.getElementById('u')
let d = document.getElementById('d')
let scr = document.getElementById('scr')
let A = document.getElementById('A2')
let nt = document.getElementById('nt')
let nt2 = document.getElementById('nt2')
let t1 = document.getElementById('ah')
let t2 = document.getElementById('ah2')
let slid = document.getElementById('slid')
let mouse = document.getElementById("Ms")
let g = false
let lw = false
let k = ""
A7.volume = 1
d.addEventListener('click', function(){
  A.play()
  A.currentTime = 0
if(username.value ==='admin' && pass.value ==='1234'){
  window.location.href = 'soo.html'
}else  if(username.value === "" && pass.value === ""){
    alert("لاتوجد بيانات مدخله")
  }
else if (username.value !== 'admin' && pass.value !== '1234') {
  alert('يوجد خطئ في كلمة المرور او اسم المستخدم اعد المحاولة او اضغط تلميح')
}
});

scr.addEventListener('click', function(){
  lw = !lw
  if(lw){
    nt2.style.display = "block"
    t1.style.display = "block"
    t2.style.display = "block"
  }else{
    nt2.style.display = "none"
    t1.style.display = "none"
    t2.style.display = "none"
  }
  nt.play()
});

document.addEventListener('click', function () {
  A7.play()

  setTimeout(() => {
    const fadeOut = setInterval(() => {
      if (A7.volume > 0.3) {
        A7.volume -= 0.01
        slid.value = A7.volume * 100
        slid.style.display = "block"
      } else{
        
        slid.value = A7.volume * 100
        A7.volume = 0.3
        slid.value = 30
        slid.style.display = "none"
        clearInterval(fadeOut)
      }
    }, 200)
  }, 1000)

}, { once: true })

b.addEventListener('click', function () {
   
   if(!g){
   k= pass.value
   pass.value = "******"
   pass.readOnly = true
    g = true
  }else{
    pass.value = k
    pass.readOnly = false
    g = false
  }
})
