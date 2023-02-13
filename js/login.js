document.getElementById('btn-submit').addEventListener('click',function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    if(email==='abdullahnoman4537@gmail.com' && password==='secret')
    {
        window.open('http://127.0.0.1:5500/bank.html')
    }
    else{
        alert('Please Input Your Correct Email And Password')
    }
})