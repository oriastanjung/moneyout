const setPrice = (price) => {
    let temp =  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    // console.log("temp >> ", temp)
    return temp
}

export {setPrice}