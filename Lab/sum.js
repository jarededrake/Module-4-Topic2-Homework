let domModifier = (function() {
    let selectorObject = {};

    let temp = (state) => ({
        init:function(selector1, selector2, resultSelector) {
            state["selector1"] = selector1;
            state["selector2"] = selector2;
            state["resultSelector"] = resultSelector;
        },
        add:function() {
            state.resultSelector.textContent = Number(state.selector1.textContent) + Number(state.selector2.textContent);
        },
        subtract: function() {
            state.resultSelector.textContent = Number(state.selector2.textContent) - Number(state.selector1.textContent);
        }
    });
    return Object.assign(selectorObject.temp(selectorObject));
})()

domModifier.init(document.getElementById("num1"), document.getElementById("num2"), document.getElementById("result"));


document.getElementById("sumButton").addEventListener("click", function() {
    domModifier.add()
});

document.getElementById("subtractButton").addEventListener("click", function() {
    domModifier.subtract()
});
