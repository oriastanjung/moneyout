const getMonth = (month) => {
    if(month === 0){
        return "Januari";
    }else if (month === 1){
        return "Februari"
    }
    else if (month === 2){
        return "Maret"
    }
    else if (month === 3){
        return "April"
    }
    else if (month === 4){
        return "Mei"
    }
    else if (month === 5){
        return "Juni"
    }
    else if (month === 6){
        return "Juli"
    }
    else if (month === 7){
        return "Agustus"
    }
    else if (month === 8){
        return "September"
    }
    else if (month === 9){
        return "Oktober"
    }
    else if (month === 10){
        return "November"
    }
    else if (month === 11){
        return "Desember"
    }
}

export {getMonth}