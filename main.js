import "./index.css";

function password() {
    const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let all = " ";

    let length = document.getElementById("length").value;
    // console.log(length);

    let isnum = document.getElementById("num").checked;
    // console.log(isnum);

    let issymbol = document.getElementById("symbol").checked;
    // console.log(issymbol);

    let isupper = document.getElementById("upper").checked;
    // console.log(isupper);
    let islower = document.getElementById("lower").checked;

    if (isnum) {
        all = all + numbers;
    }
    if (issymbol) {
        all = all + symbols;
    }
    if (isupper) {
        all = all + capitals;
    }
    if (islower) {
        all = all + letters;
    }
    console.log(all);

    let password = "";

    while (password.length < length) {
        let index = Math.floor(Math.random() * all.length);
        if (index <= 0) {
            index = 1;
        }
        password = password + all.charAt(index);
    }

    console.log(password);
    return password;
}

const button = document.getElementById("button");

// Add an event listener for the 'click' event
button.addEventListener("click", function() {
    document.getElementById("p").innerHTML = password();
});

// vim: ts=4 sts=4 sw=4 et
