/**
 * 
 * @param {object} Input 
 */
function InsertSort (Input) {
    for (var j = 1; j < Input.length; j++) {
        var temp = Input[j];
        for (var l = j - 1; l >= 0 && (Input[l] > temp); l--) {
            Input[l + 1] = Input[l];
        }
        Input[l + 1] = temp;
    }
    return Input;
}
/**
 * @param {object} Input
 */
function BubbleSort (Input) {
    for (var i = (Input.length - 1) ; i >= 0; i--) {
        for (var j = (Input.length - 1); j >= 0; j--) {
            if (Input[j] < Input[j - 1]) {
                var temp = Input[j];
                Input[j] = Input[j - 1];
                Input[j - 1] = temp;
            }
        }
    }
    return Input;
}