declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                /**
                 * Called when a World is initializing
                 */
                // @ts-ignore
                class WorldInitEvent extends org.bukkit.event.world.WorldEvent {
                    // @ts-ignore
                    constructor(world: org.bukkit.World)
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
