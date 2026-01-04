let b = document.getElementById('t')
let username = document.getElementById('tr')
let a = document.getElementById('a')
let pass = document.getElementById('u')
let d = document.getElementById('d')
let scr = document.getElementById('scr')
let A = document.getElementById('A2')
let nt = document.getElementById('nt')
let nt2 = document.getElementById('nt2')
let t1 = document.getElementById('ah')
let t2 = document.getElementById('ah2')
let g = false
let lw = false
let k = ""
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
  let A = document.getElementById('A')
  A.play()
}, {once:true})

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