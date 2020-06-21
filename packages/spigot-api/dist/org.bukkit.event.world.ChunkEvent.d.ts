declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                /**
                 * Represents a Chunk related event
                 */
                // @ts-ignore
                abstract class ChunkEvent extends org.bukkit.event.world.WorldEvent {
                    // @ts-ignore
                    constructor(chunk: org.bukkit.Chunk)
                    // @ts-ignore
                    chunk: org.bukkit.Chunk
                    /**
                     * Gets the chunk being loaded/unloaded
                     * @return Chunk that triggered this event
                     */
                    // @ts-ignore
                    public getChunk(): org.bukkit.Chunk
                }
            }
        }
    }
}
