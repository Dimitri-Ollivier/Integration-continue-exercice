const RomanNumeral = {
    one: "I",
    four: "IV",
    five: "V",
    nine: "IX",
    ten: "X"
}

export function convertToRoman(num: number): string {
    let currentNum = num
    let romanNumeralResult = ""

    if (currentNum >= 10) {
        for(let i = 0; i < Math.floor(currentNum / 10); i++) {
            romanNumeralResult += RomanNumeral.ten
        }
        
        currentNum = currentNum % 10
    }

    if (currentNum >= 9) {        
        for(let i = 0; i < Math.floor(currentNum / 9); i++) {
            romanNumeralResult += RomanNumeral.nine
        }

        currentNum = currentNum % 9
    }

    if (currentNum >= 5) {        
        for(let i = 0; i < Math.floor(currentNum / 5); i++) {
            romanNumeralResult += RomanNumeral.five
        }

        currentNum = currentNum % 5
    }

    if (currentNum >= 4) {        
        for(let i = 0; i < Math.floor(currentNum / 4); i++) {
            romanNumeralResult += RomanNumeral.four
        }

        currentNum = currentNum % 4
    }

    if (currentNum > 1) {
        for(let i = 0; i < currentNum; i++) {
            romanNumeralResult += RomanNumeral.one
        }
    } else if (currentNum === 1) {
        romanNumeralResult += RomanNumeral.one
    }

    return romanNumeralResult
}
