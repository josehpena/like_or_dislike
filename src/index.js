const likeOrDislike = (array) => {
    let status = "Nothing"

    for (let i = 0; i < array.length; i++) {
         if(array[i] == "Like")
            if(status != "Like"){
                status = "Like";
            }else status = "Nothing";
    }

   

    if(array == "Dislike")
        return "Dislike";

    return status;
}

module.exports = {
    likeOrDislike
}