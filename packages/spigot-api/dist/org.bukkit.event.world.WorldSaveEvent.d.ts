declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                /**
                 * Called when a World is saved.
                 */
                // @ts-ignore
                class WorldSaveEvent extends org.bukkit.event.world.WorldEvent {
                    // @ts-ignore
                    constructor(world: org.bukkit.World)
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
