import axios from "axios"

const BASE_URL_API = "https://653b11162e42fd0d54d4aa03.mockapi.io"
console.log(BASE_URL_API)

const artikelList = async () => {
    try {
        const url = `${BASE_URL_API}/artikel`
        const response = await axios.get(url)
        return response.data
    } catch (err) {
        console.log(err)
        return null;
    }
}

const artikelDetail = async (id) => {
    try {
        const url = `${BASE_URL_API}/artikel/${id}`
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log(error)
        return null;
    }
}

export{
    artikelList,
    artikelDetail
}