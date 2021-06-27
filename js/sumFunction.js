function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}

sum(1, 2, 3, 4)