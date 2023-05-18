const likeOrDislike = (array) => {
    let status = "Nothing"

    for (let i = 0; i < array.length; i++) {
         if(array[i] == "Like")
            if(status != "Like"){
                status = "Like";
            }else status = "Nothing";

        if(array[i] == "Dislike") 
                if(status != "Dislike"){
                    status = "Dislike";
                } else status = "Nothing";
    }

    return status;
}

module.exports = {
    likeOrDislike
}