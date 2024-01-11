import { randomUUID } from 'node:crypto'

export class Database {
    #itens = new Map()

    list(search) {
       return Array.from(this.#itens.entries()).map((itensArray)=>{
        const id = itensArray[0]
        const data = itensArray[1]

        return {
            id,
            ...data,
        }
       })
       .filter(itens => {
        if (search) {
            return itens.title.include(search)
        }

        return true
       })
    }

    create(itens) {
        const itensId = randomUUID() // unique universal ID
        this.#itens.set(itensId, itens)
    }
    update(id, itens) {
        this.#itens.set(id, itens)
    }
    delete(id) {
        this.#itens.delete(id)
    }
}