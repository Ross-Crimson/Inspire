import { AppState } from "../AppState.js"
import { Quote, Temperature } from "../models/DataModels.js"
import { setHTML } from "../utils/Writer.js"
import { api } from "./AxiosService.js"

class PageLoadsService {

    async GetBackgroundImg() {
        const response = await api.get('api/images')

        document.body.style.backgroundImage = `url(${response.data.largeImgUrl})`
    }

    async GetQuote() {
        const response = await api.get('api/quotes')

        AppState.activeQuote = new Quote(response.data)
    }

    async GetTemperature() {
        const response = await api.get('api/weather')

        AppState.activeTemp = new Temperature(response.data)
    }

}



export const pageLoadsService = new PageLoadsService