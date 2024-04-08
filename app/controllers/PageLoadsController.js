import { Pop } from "../utils/Pop.js"
import { pageLoadsService } from "../services/PageLoadsService.js"
import { setHTML, setText } from "../utils/Writer.js"
import { AppState } from "../AppState.js"

export class PageLoadsController {
    constructor() {
        AppState.on('activeQuote', this.DrawQuote)
        AppState.on('activeTemp', this.DrawTemp)
        this.GetBackgroundImg()
        this.GetQuote()
        this.GetTemperature()
        this.GetTime()
        this.StartTimeInterval()
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

    DrawQuote() {
        setHTML('quote-area', AppState.activeQuote.QuoteTemplate)
    }

    async GetTemperature() {
        try {
            await pageLoadsService.GetTemperature()

        } catch (error) {
            console.log(error)
            Pop.error(error)
        }
    }

    ChangeTempStyle() {
        AppState.activeTemp.flipTemp()
        console.log(AppState.activeTemp)
    }

    DrawTemp() {
        setHTML('weather-area', AppState.activeTemp.WeatherTemplate)
    }

    StartTimeInterval() {
        setInterval(this.GetTime, 10000);
    }

    GetTime() {
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes().toString()
        if (minutes.length == 1) minutes = "0" + minutes
        else if (minutes.length == 0) minutes = "00"

        let amPm = hours >= 12 ? 'pm' : 'am'
        if (hours > 12) hours = hours - 12
        else if (hours == 0) hours = 12

        let currTime = hours.toString() + ':' + minutes + ' ' + amPm

        setText('currentTime', currTime)
    }
}

