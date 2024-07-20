function handleSubmit(event) {
    event.preventDefault();  // Prevent the default form submission
    const form = event.target;
    const data = new FormData(form);
    const scriptURL = form.action;  // Retrieve the action attribute from the form

    fetch(scriptURL, { method: 'POST', body: data })
        .then(response => response.json())  // Assuming the Google Script returns JSON
        .then(data => {
            document.getElementById("msg").textContent = "Message has been sent successfully";
            setTimeout(() => {
                document.getElementById("msg").textContent = "";
            }, 5000);
            form.reset();  // Reset the form after successful submission
        })
        .catch(error => {
            console.error('Error!', error.message);
            document.getElementById("msg").textContent = "Failed to send message. Please try again.";
        });

    return false;
}
