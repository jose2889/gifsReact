export const getGifs = async (category) =>{
    
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=BVik5Z6VPL0KNPEbGedQITxGBKWKVR65`; 
    const resp = await fetch(url); 
    const { data } = await resp.json(); 

    const gits = data.map( img => {
        return {
            id: img.id,
            title: img.title, 
            url: img.images?.downsized_medium.url
        }
    })
    console.log(gits); 
    return gits;
}