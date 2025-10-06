document.getElementById("calculate").addEventListener("click", function () {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (dob === "" ) {
        result.textContent = "Please Enter Valid Date!";
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    if(dobDate > today){
        result.textContent= "Invalid date! Please Enter A Correct Birth Date"
        return;
    }

    let years = today.getFullYear() - dobDate.getFullYear();
    let months = today.getMonth() - dobDate.getMonth();
    let days = today.getDate() - dobDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }
    result.textContent = `You are ${years} years, ${months} months, and ${days} days old. 🎉`;
});
