const submit = () => {
    let name = document.getElementById("nameid").value;
    let password = document.getElementById("passid").value;
    if ((name == "anilesh") && (password == "1234")) {
        alert("login successfull")
    } else if ((name != "anilesh") && (password == "1234")) {
        alert("Username is Invalid")
    } else if ((name == "anilesh") && (password != "1234")){
        alert("Password is Invalid")
    }else{
        alert("Invalid Username and password")
    }
}

