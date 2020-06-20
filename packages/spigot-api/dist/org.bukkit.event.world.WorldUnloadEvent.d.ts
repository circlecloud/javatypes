declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                /**
                 * Called when a World is unloaded
                 */
                // @ts-ignore
                class WorldUnloadEvent extends org.bukkit.event.world.WorldEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(world: org.bukkit.World)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
