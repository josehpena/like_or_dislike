const likeOrDislike = (array) => {
    let status = "Nothing"

    if(array == "Like")
        return "Like";

    if(array == "Dislike")
        return "Dislike";

    return status;
}

module.exports = {
    likeOrDislike
}