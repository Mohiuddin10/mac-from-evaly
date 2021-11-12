// try and error section 
function getTotalCost() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryCost = parseInt(document.getElementById('ram-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);
    let totalCost = bestPrice + memoryCost + storageCost + deliveryCost;
    return totalCost;

}
function getPromoCode() {
    document.getElementById("promoCodeApply").addEventListener('click', function () {
        const promo = document.getElementById("promo-code");
        const promoInput = promo.value;
        const totalCost = getTotalCost();
        if (promoInput == 'stevekaku') {
            console.log('steve kaku koise discount dibe');
            const totalCost = getTotalCost();
            const discount = totalCost * 0.2;
            const afterDiscount = totalCost - discount;
            console.log(afterDiscount);
            document.getElementById('final-price').innerText = afterDiscount;
        }
        else {
            console.log("steve kaku ture chine nai");
            document.getElementById('final-price').innerText = totalCost;
            document.getElementById("promo-fail").innerText = "❌ Promocode Didn't Match, Please try again";




        }
    })
}




function getValue(item, value) {
    const productItem = document.getElementById(item + '-cost');
    productItem.innerText = value;

    const totalCost = getTotalCost();

    document.getElementById('total-price').innerText = totalCost;
    document.getElementById('final-price').innerText = totalCost;

    const finalPrice = getPromoCode();



}




// Ram 8GB
document.getElementById('ram-8GB').addEventListener('click', function () {
    getValue('ram', 0);
})
// Ram 16GB
document.getElementById('ram-16GB').addEventListener('click', function () {
    getValue('ram', 180);
})
//256GB storage 
document.getElementById('storage256GB-cost').addEventListener('click', function () {
    getValue('storage', 0);
})
//512GB storage 
document.getElementById('storage512GB-cost').addEventListener('click', function () {
    getValue('storage', 100);
})
//1TB storage 
document.getElementById('storage1TB-cost').addEventListener('click', function () {
    getValue('storage', 180);
})
// delivery free 
document.getElementById('delivery-free').addEventListener('click', function () {
    getValue('delivery', 0);
})
document.getElementById('delivery-early').addEventListener('click', function () {
    getValue('delivery', 20);
})

// final price 
const promoCode = getPromoCode();

