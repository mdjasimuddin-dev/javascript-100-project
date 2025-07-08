let coupon = document.querySelector('.coupon')
let btn = document.querySelector('.btn')

btn.addEventListener('click', copyText)

function copyText(e) {
    e.preventDefault();

    coupon.select();
    coupon.setSelectionRange(0, 999999);
    btn.textContent = "Copied!!!";
    document.execCommand("copy");

    setTimeout(() => {
        btn.textContent = "Copy";
    }, 3000)
}