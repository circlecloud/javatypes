declare namespace org {
    namespace bukkit {
        namespace event {
            namespace world {
                /**
                 * Represents events within a world
                 */
                // @ts-ignore
                abstract class WorldEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(world: org.bukkit.World)
                    /**
                     * Gets the world primarily involved with this event
                     * @return World which caused this event
                     */
                    // @ts-ignore
                    public getWorld(): org.bukkit.World
                }
            }
        }
    }
}
