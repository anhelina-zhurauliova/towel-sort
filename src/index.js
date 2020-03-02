// You should implement your task here.

module.exports = function towelSort(matrix) {
    let final = [];
    let sorted;
    if (matrix == undefined || matrix.length == 0) return [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            sorted = matrix[i].sort(function(a, b) {
                return a - b;
            });
            final.push(sorted);
        } else {
            sorted = matrix[i].sort(function(a, b) {
                return b - a;
            });
            final.push(sorted);
        }
    }
    return final.flat(Infinity);
};
