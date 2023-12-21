
function displayToast() {
    const toast = document.getElementById("toast")
    const btnToast = document.getElementById("btn-toast")

    if (toast.className.includes("fade-out")) {
        toast.className = toast.className.replace("fade-out", "fade-in")
        btnToast.innerHTML = "Hide Toast"
        
        setTimeout(() => {
            toast.className = toast.className.replace("fade-in", "fade-out")
            btnToast.innerHTML = "Show Toast"
        }, 7000);
    } else if (toast.className.includes("fade-in")) {
        toast.className = toast.className.replace("fade-in", "fade-out")
        btnToast.innerHTML = "Show Toast"
    } else {
        toast.className = toast.className.concat(" fade-in")
        btnToast.innerHTML = "Hide Toast"
        setTimeout(() => {
            toast.className = toast.className.replace("fade-in", "fade-out")
            btnToast.innerHTML = "Show Toast"
        }, 7000);
    }
}