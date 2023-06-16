function wait(time = 200) {
    return new Promise(resolve => {
        setTimeout(() => resolve(true), time)
    });
}

export default wait;