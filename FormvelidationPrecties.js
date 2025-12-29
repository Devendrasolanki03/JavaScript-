function Formvalidate() {
    let valid = true;

    // Clear all spans
    document.querySelectorAll("span").forEach(s => s.innerHTML = "");

    let name = document.getElementById("full-name");
    let dob = document.getElementById("date-of-birth");
    let email = document.getElementById("email");
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let confirm = document.getElementById("confirm-password");
    let mobile = document.getElementById("mobile");
    let country = document.getElementById("country");
    let experience = document.getElementById("experience");
    let salary = document.getElementById("salary");
    let terms = document.getElementById("terms");
    let skills = document.getElementsByName("skill");

    if (!/^[A-Za-z ]+$/.test(name.value)) {
        name.className = "error";
        nameErr.innerHTML = "Only alphabets allowed";
        valid = false;
    } else name.className = "success";

 
    let birth = new Date(dob.value);
    let age = new Date().getFullYear() - birth.getFullYear();
    if (!dob.value || age < 18) {
        dob.className = "error";
        dobErr.innerHTML = "Must be 18 or older";
        valid = false;
    } else dob.className = "success";

 
    if (!document.querySelector('input[name="gender"]:checked')) {
        genderErr.innerHTML = "Select gender";
        valid = false;
    }

   
    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        email.className = "error";
        emailErr.innerHTML = "Invalid email";
        valid = false;
    } else email.className = "success";

  
    if (username.value.length < 5 || /[^a-zA-Z0-9]/.test(username.value)) {
        userErr.innerHTML = "Min 5 chars, no special symbols";
        username.className = "error";
        valid = false;
    } else username.className = "success";

   
    if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}/.test(password.value)) {
        passErr.innerHTML = "Strong password required";
        password.className = "error";
        valid = false;
    } else password.className = "success";

    if (password.value !== confirm.value) {
        confirmErr.innerHTML = "Passwords do not match";
        confirm.className = "error";
        valid = false;
    } else confirm.className = "success";


    if (!/^\d{10}$/.test(mobile.value)) {
        mobileErr.innerHTML = "10 digit number required";
        mobile.className = "error";
        valid = false;
    } else mobile.className = "success";

   
    if (!country.value) {
        countryErr.innerHTML = "Select country";
        valid = false;
    }

    let count = 0;
    skills.forEach(s => { if (s.checked) count++; });
    if (count < 2) {
        skillErr.innerHTML = "Select at least 2 skills";
        valid = false;
    }

  
    if (!experience.value) {
        expErr.innerHTML = "Select experience";
        valid = false;
    }

    if (salary.value <= 0) {
        salaryErr.innerHTML = "Salary must be > 0";
        valid = false;
    }


    if (!terms.checked) {
        termsErr.innerHTML = "Accept terms";
        valid = false;
    }

    return valid;
}
