function getCurrentmmddhh (){
    const now = new Date()
    return `${now.getMonth() + 1}/${now.getDate()}: ${now.getHours()}h`
}


module.exports ={ 
    getCurrentmmddhh
}