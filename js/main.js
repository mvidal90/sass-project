
function displayToast() {
    const toast = document.getElementById("toast")
    const btnToast = document.getElementById("btn-toast")
    if (toast.style.display === "none") {
        toast.style.display = "block"
        btnToast.innerHTML = "Hide Toast"
        setTimeout(() => {
            toast.style.display = "none"
            btnToast.innerHTML = "Show Toast"
        }, 7000);
    } else{
        toast.style.display = "none"
        btnToast.innerHTML = "Show Toast"
    }
}