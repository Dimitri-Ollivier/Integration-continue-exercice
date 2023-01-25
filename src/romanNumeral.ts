const RomanNumeral = {
    one: "I",
    four: "IV",
    five: "V",
    nine: "IX",
    ten: "X"
}

export function convertToRoman(num: number): string {
    let romanNumeralResult = ""

    if (num >= 10) {
        let tenRomanSize = Math.floor(num / 10);

        if (tenRomanSize >= 1) {
            romanNumeralResult += RomanNumeral.ten.repeat(tenRomanSize);
        }
    }

    romanNumeralResult += getUnit(num % 10)

    return romanNumeralResult
}

function getUnit(num: number): string {
    let currentNum = num
    let romanNumeralResult = ""

    if (currentNum === 9) {        
        romanNumeralResult += RomanNumeral.nine
        currentNum = 0
    }

    if (currentNum >= 5) {        
        let fiveRomanSize = Math.floor(currentNum / 5);

        if (fiveRomanSize >= 1) {
            romanNumeralResult += RomanNumeral.five.repeat(fiveRomanSize);
            currentNum = currentNum % 5;
        }
    }

    if (currentNum === 4) {        
        romanNumeralResult += RomanNumeral.four
        currentNum = 0
    }

    if (currentNum >= 1) {
        for(let i = 0; i < currentNum; i++) {
            romanNumeralResult += RomanNumeral.one
        }
    }

    return romanNumeralResult
}
