import { Quote } from "../models/DataModels.js"
import { setHTML } from "../utils/Writer.js"
import { api } from "./AxiosService.js"

class PageLoadsService {

    async GetBackgroundImg() {
        const response = await api.get('api/images')
        console.log(response.data.url)
        //document.getElementById('body').style.backgroundImage = 
        document.body.style.backgroundImage = `url(${response.data.largeImgUrl})`
    }

    async GetQuote() {
        const response = await api.get('api/quotes')
        console.log(response.data)

        setHTML('quote-area', new Quote(response.data).QuoteTemplate)
    }
}

export const pageLoadsService = new PageLoadsService