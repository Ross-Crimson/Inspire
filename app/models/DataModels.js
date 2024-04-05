

export class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
    }

    get QuoteTemplate() {
        return `
        <div class="reveal fst-italic">"${this.content}"</div>
        <div class="hidden">-${this.author}</div>
        `
    }
}

export class Temperature {
    constructor(data) {
        this.temp = data.main.temp
        this.status = data.weather[0].main
        this.icon = data.weather.icon
        this.fahrenheit = this.DegreesF
        this.celsius = this.DegreesC
        this.displayF = true
    }

    flipTemp() {
        this.displayF = !this.displayF
    }

    get WeatherTemplate() {
        return `
        <div onclick="app.PageLoadsController.ChangeTempStyle()" class="d-flex justify-content-center align-items-center">
        
            <div class="text-start">
                <h5 class="pe-3">
                    ${this.fahrOrCel}
                </h5>
                <h5>
                    ${this.status}
                </h5>
            </div>

            <div>
                <img class="img-lg" src="${this.icon}">
            </div>
        </div>
        `
    }

    get fahrOrCel() {
        if (this.displayF) return `${this.fahrenheit} F`
        else return `${this.celsius} C`
    }

    get DegreesF() {
        return ((this.temp - 273.15) * (9 / 5) + 32).toFixed(1)
    }
    get DegreesC() {
        return (this.temp - 273.15).toFixed(1)
    }
}