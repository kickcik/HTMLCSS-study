const form = document.getElementById('form')

form.addEventListener('submit', function(e){
  e.preventDefault() // submit으로 인한 페이지 새로고침 차단

  let user_id = e.target.id.value
  let user_pw1 = e.target.pw1.value
  let user_pw2 = e.target.pw2.value
  let user_name = e.target.name.value
  let user_phone = e.target.phone.value
  let user_position = e.target.position.value
  let user_gender = e.target.gender.value
  let user_email = e.target.email.value
  let user_intro = e.target.intro.value

  if(user_id.length < 6){
    alert('아이디가 너무 짧습니다. 6자 이상 입력해주세요')
    return
  }

  if(user_pw1 !== user_pw2){
    alert('비밀번호가 일치하지 않습니다.')
    return
  }

  document.body.innerHTML = ''
  document.write(`
    <p>${user_id}님 환영합니다.</p>
    <p>회원가입 시 입력하신 내역은 다음과 같습니다.</p>
    <p>아이디 : ${user_id}</p>
    <p>이름 : ${user_name}</p>
    <p>전화번호 : ${user_phone}</p>
    <p>원하는 직무 : ${user_position}</p>
    
    `)
})