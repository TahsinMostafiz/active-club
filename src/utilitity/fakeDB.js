
const addToDB = (id) => {
    let storagelist = {};

    const storedlist = localStorage.getItem('list-storage');
    if(storedlist) {
        storagelist = JSON.parse(storedlist);
    } else {
        storagelist = {};
    }

    const quantity = storagelist[id];
    if(quantity) {
        const newQuantity = parseInt(quantity) + 1;
        storagelist[id] = newQuantity;
    }else {
        storagelist[id] = 1;
    }

    localStorage.setItem('list-storage', JSON.stringify(storagelist));
}

const removeToBD = (id) => {
    const storedlist = localStorage.getItem('list-storage');
    if (storedlist) {
        const storagelist = JSON.parse(storedlist);
        if (id in storagelist) {
            delete storagelist[id];
            localStorage.setItem('list-storage', JSON.stringify(storagelist));
        }
    }
}

export {addToDB, removeToBD};

