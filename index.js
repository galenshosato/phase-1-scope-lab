
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()   
}


function setBestCustomer() {
    globalThis.bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Galen'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bobby'
}

