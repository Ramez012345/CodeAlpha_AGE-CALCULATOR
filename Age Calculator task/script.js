document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const date_Input = document.getElementById('dob').value;
    const result = document.getElementById('result');
    result.classList.remove('show');

    const date = new Date(date_Input);
    const today = new Date();

    if (!date_Input) {
        alert("Please enter the date of birth");
        return;
    }
    if (date > today) {
        alert('Date of birth cannot be in the future.');
        return;
    }

    let years = today.getFullYear() - date.getFullYear();
    let months = today.getMonth() - date.getMonth();
    let days = today.getDate() - date.getDate();

    if (days < 0) {
        months--;
        const previous_Month = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previous_Month.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML =
        `🎂 You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;
    result.classList.add('show');
});

document.getElementById('toggleTheme').addEventListener('change', function () {
    document.body.classList.toggle('dark');
});
