const n: number = 50.515

console.log(n.toFixed(17))


function getPrefix(fName: string) {
    if (fName.includes('นาย')) {
        return 'นาย'
    } else if (fName.includes('นางสาว')) {
        return 'นางสาว'
    } else {
        return '-'
    }
}



console.log(getPrefix('นายภาณุพล ชาติปักษี'))