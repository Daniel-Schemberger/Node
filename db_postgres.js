import { randomUUID } from 'node:crypto'
import { sql } from './db.js'

export class DatabasePostgres {
    async list(search) {
      let itens

      if (search) {
        itens = await sql`SELECT * FROM itens WHERE title ilike "%${search}%"`

      } else {
        itens = await sql`SELECT * FROM itens`
      }

      return itens
    }

    async create(itens) {
      const itensId = randomUUID()
      const { title, info} = itens
 
      await sql`INSERT INTO itens (id, title, info) VALUES (${itensId}, ${title}, ${info})`
    }
    async update(id, itens) {
      const { title, info} = itens

      await sql`UPDATE itens SET title = ${title}, info = ${info} WHERE id = ${id}`

    }
    async delete(id) {
      await sql`DELETE FROM itens WHERE id = ${id}`
    }
}