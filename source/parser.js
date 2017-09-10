var parser = {
    parse: function (inputStr) {
        var resultStr = inputStr.replace(/\s/g, "");

        var findBracketsExpression = /\((-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)\)/;
        resultStr = parser.doSingleCalc(resultStr, findBracketsExpression);

        resultStr = parser.findSingleBracket(resultStr);

        resultStr = parser.doCalcWitoutBrackets(resultStr);

        if( isNaN(parseFloat(resultStr)) ) {
            return undefined;
        }

        return parseFloat(resultStr);
    },
    doCalcWitoutBrackets: function (str) {
        var findMulExp = /(-?\d+(?:\.\d+)?)\s*([*])\s*(-?\d+(?:\.\d+)?)/;
        var findDivExp = /(-?\d+(?:\.\d+)?)\s*([\/])\s*(-?\d+(?:\.\d+)?)/;
        var findAddExp = /(-?\d+(?:\.\d+)?)\s*([\+])\s*(-?\d+(?:\.\d+)?)/;
        var findSubExp = /(-?\d+(?:\.\d+)?)\s*([-])\s*(-?\d+(?:\.\d+)?)/;

        str = parser.doSingleCalc(str, findMulExp);
        str = parser.doSingleCalc(str, findDivExp);
        str = parser.doSingleCalc(str, findAddExp);
        str = parser.doSingleCalc(str, findSubExp);

        return str
    },
    doSingleCalc: function (str, regExp) {
        var expressionResult;
        while (expressionResult = regExp.exec(str)) {
            expressionResult =  parser.calculatePart(str, regExp);
            str = str.replace(regExp, expressionResult);
        }

        return str;
    },
    findSingleBracket: function (str) {
        var findLeftBracket = /\(/;
        var findRightBracket = /\)/;

        if (findLeftBracket.test(str) || findRightBracket.test(str)) {
            return undefined;
        }

        return str;
    },
    add: function (first, second) {
        return parseFloat(first)  + parseFloat(second);
    },
    sub: function (first, second) {
        return parseFloat(first) - parseFloat(second);
    },
    mul: function (first, second) {
        return Math.round((parseFloat(first) * parseFloat(second)) * 100) / 100;
    },
    div: function (first, second) {
        return Math.round((parseFloat(first) / parseFloat(second)) * 100) / 100;
    },
    calculatePart: function (strPart, reg) {
        var arr = strPart.match(reg);
        var result;
        switch (arr[2]) {
            case '+':
                result = parser.add(arr[1], arr[3]);
                break;
            case '-':
                result = parser.sub(arr[1], arr[3]);
                break;
            case '*':
                result = parser.mul(arr[1], arr[3]);
                break;
            case '/':
                result = parser.div(arr[1], arr[3]);
                break;
        }

        return result;
    }
}

module.exports = parser;