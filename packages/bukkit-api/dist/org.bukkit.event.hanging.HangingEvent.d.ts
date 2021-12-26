declare namespace org {
    namespace bukkit {
        namespace event {
            namespace hanging {
                /**
                 * Represents a hanging entity-related event.
                 */
                // @ts-ignore
                abstract class HangingEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(painting: org.bukkit.entity.Hanging)
                    // @ts-ignore
                    hanging: org.bukkit.entity.Hanging
                    /**
                     * Gets the hanging entity involved in this event.
                     * @return the hanging entity
                     */
                    // @ts-ignore
                    public getEntity(): org.bukkit.entity.Hanging
                }
            }
        }
    }
}
