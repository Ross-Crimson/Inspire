import { Pop } from "../utils/Pop.js"
import { pageLoadsService } from "../services/PageLoadsService.js"


export class PageLoadsController {
    constructor() {
        this.GetBackgroundImg()
    }

    async GetBackgroundImg() {
        try {
            await pageLoadsService.GetBackgroundImg()
        } catch (error) {
            console.log(error)
            Pop.error(error)
        }
    }

    async GetQuote() {
        try {
            await pageLoadsService.GetQuote()
        } catch (error) {
            console.log(error)
            Pop.error(error)
        }
    }
}