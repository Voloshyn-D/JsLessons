'use strict'

function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    } else no()
}

/*function showOk() {
    alert("Дякую за згоду")
}

function showCancel() {
    alert("Відміна")
}*/

ask("Ви згодні?", () => alert("Дякую за згоду"), () => alert("Відміна"));
