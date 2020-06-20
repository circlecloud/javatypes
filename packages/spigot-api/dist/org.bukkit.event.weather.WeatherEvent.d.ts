declare namespace org {
    namespace bukkit {
        namespace event {
            namespace weather {
                /**
                 * Represents a Weather-related event
                 */
                // @ts-ignore
                class WeatherEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(where: org.bukkit.World)
                    // @ts-ignore
                    world: org.bukkit.World
                    /**
                     * Returns the World where this event is occurring
                     * @return World this event is occurring in
                     */
                    // @ts-ignore
                    getWorld(): org.bukkit.World
                }
            }
        }
    }
}
