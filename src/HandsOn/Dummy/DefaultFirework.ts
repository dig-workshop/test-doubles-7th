import {Firework} from './Types'

export default class DefaultFirework implements Firework {
    fire(): void {
        throw new Error("🎆🎆🎆花火打ち上げ装置は修理中です🎆🎆🎆")
    }
}