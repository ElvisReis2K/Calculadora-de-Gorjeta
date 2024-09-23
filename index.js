function formatMoney(value) {
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value 
}

function formatSplit(value) {
    if (value == 1) return value + ' person'
    return value + ' people'
    }