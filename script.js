var elements = document.getElementsByClassName('name')
var myFunction = function (e) {
    e = e || window.event
    var text = e.target.innerText
    document.getElementById('enterName').value = text
}
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false)
}

function sendMoney() {
    var enterName = document.getElementById('enterName').value
    enterName.toLowerCase()
    var enterAmount = parseInt(document.getElementById('enterAmount').value)
    var myAccountBalance = parseInt(
        document.getElementById('mybalance').innerHTML
    )
    console.log(enterName)
    if (enterAmount > myAccountBalance) {
        alert('Insufficient Balance.')
    } else {
        var findUserBankAccount = enterName + 'balance'
        console.log(findUserBankAccount)
        var finalAmount
        if (document.getElementById(findUserBankAccount) != null) {
            finalAmount =
                parseInt(
                    document.getElementById(findUserBankAccount).innerHTML
                ) + enterAmount
        }
        myAccountBalance = myAccountBalance - enterAmount
        console.log(finalAmount)
        console.log(myAccountBalance)
        document.getElementById('mybalance').innerText =
            myAccountBalance.toString()
        document.getElementById(findUserBankAccount).innerHTML =
            finalAmount.toString()
        alert(
            'Successful Transaction !! \n' +
                enterAmount +
                ' Rs is sent to ' +
                enterName +
                '@gmail.com.'
        )

        // transaction history
        var createPTag = document.createElement('li')
        var textNode = document.createTextNode(
            'Rs ' +
                enterAmount +
                ' is sent to ' +
                enterName +
                '@gmail.com on ' +
                Date()
        )
        createPTag.appendChild(textNode)
        var element = document.getElementById('transaction-history-body')
        element.insertBefore(createPTag, element.firstChild)
    }
}
