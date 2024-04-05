import { api } from "./AxiosService.js"

class PageLoadsService {

    async GetBackgroundImg() {
        const response = await api.get('api/images')
        console.log(response.data.url)
        //document.getElementById('body').style.backgroundImage = 
        document.body.style.backgroundImage = `url(${response.data.largeImgUrl})`
    }

    GetQuote() {

    }
}

export const pageLoadsService = new PageLoadsService