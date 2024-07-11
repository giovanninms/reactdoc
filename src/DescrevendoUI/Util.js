function getImageUrl(person, size = "s"){
    return(
        'https://i.imgur.com/' +
        person.imageId + '.webp'+
        size + 
        'jpg'
    )
}

export default getImageUrl