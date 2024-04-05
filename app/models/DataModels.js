

export class Quote {
    constructor(data) {
        this.author = data.author
        this.content = data.content
    }

    get QuoteTemplate() {
        return `
        <div class="reveal">${this.content}</div>
        <div class="hidden">${this.author}</div>
        `
    }
}

export class Temperature {
    constructor(data) {

    }
}