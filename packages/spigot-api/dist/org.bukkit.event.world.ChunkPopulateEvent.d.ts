declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                /**
                 * Thrown when a new chunk has finished being populated.
                 * <p>
                 * If your intent is to populate the chunk using this event, please see {@link
                 * BlockPopulator}
                 */
                // @ts-ignore
                class ChunkPopulateEvent extends org.bukkit.event.world.ChunkEvent {
                    // @ts-ignore
                    constructor(chunk: org.bukkit.Chunk)
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
