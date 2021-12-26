declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                /**
                 * Called when a chunk is unloaded
                 */
                // @ts-ignore
                class ChunkUnloadEvent extends org.bukkit.event.world.ChunkEvent {
                    // @ts-ignore
                    constructor(chunk: org.bukkit.Chunk)
                    // @ts-ignore
                    constructor(chunk: org.bukkit.Chunk, save: boolean)
                    /**
                     * Return whether this chunk will be saved to disk.
                     * @return chunk save status
                     */
                    // @ts-ignore
                    public isSaveChunk(): boolean
                    /**
                     * Set whether this chunk will be saved to disk.
                     * @param saveChunk chunk save status
                     */
                    // @ts-ignore
                    public setSaveChunk(saveChunk: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
