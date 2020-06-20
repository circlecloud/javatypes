declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                /**
                 * An event that is called when a world's spawn changes. The world's previous
                 * spawn location is included.
                 */
                // @ts-ignore
                class SpawnChangeEvent extends org.bukkit.event.world.WorldEvent {
                    // @ts-ignore
                    constructor(world: org.bukkit.World, previousLocation: org.bukkit.Location)
                    /**
                     * Gets the previous spawn location
                     * @return Location that used to be spawn
                     */
                    // @ts-ignore
                    getPreviousLocation(): org.bukkit.Location
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
