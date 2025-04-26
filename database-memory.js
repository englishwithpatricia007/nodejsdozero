import { randomUUID } from "crypto";

export class DatabaseMemory {
    #videos = new Map()

    list() {
        return Array.from(this.#videos.values())
    }

    create(video) {
        const id = randomUUID()
        this.#videos.set(id, video )
    }   

    update(id, video) {
        if (!this.#videos.has(id)) {
            return null
        }

        this.#videos.set(id, video)
    }

    delete(id) {
        if (!this.#videos.has(id)) {
            return null
        }

        const video = this.#videos.get(id)
        this.#videos.delete(id)
        return video
    }   


}