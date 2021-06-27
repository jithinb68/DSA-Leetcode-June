const multiple = (x) => {
    return (y) => {
        return x * y;
    };
};

const val = multiple(2)(6);
console.log(val);