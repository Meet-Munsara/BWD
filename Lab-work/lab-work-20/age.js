function checkAge() {
    const dobValue = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (!dobValue) {
        result.style.color = "orange";
        result.textContent = "Please enter your date of birth.";
        return;
    }

    const dob = new Date(dobValue + "T00:00:00");
    const today = new Date();

    if (dob > today) {
        result.style.color = "red";
        result.textContent =
            "Invalid date of birth. Please try again.";
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
         today.getDate() < dob.getDate())
    ) {
        age--;
    }

    if (age >= 18) {
        result.style.color = "green";
        result.textContent =
            "Congratulations! You meet the minimum age requirement. Please check the university's other admission criteria.";
    } else {
        result.style.color = "red";
        result.textContent =
            "Sorry! You must be at least 18 years old to meet this age requirement.";
    }
}