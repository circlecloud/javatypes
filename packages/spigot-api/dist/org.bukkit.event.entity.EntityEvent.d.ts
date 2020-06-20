declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Represents an Entity-related event
                 */
                // @ts-ignore
                class EntityEvent extends org.bukkit.event.Event {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Entity)
                    // @ts-ignore
                    entity: org.bukkit.entity.Entity
                    /**
                     * Returns the Entity involved in this event
                     * @return Entity who is involved in this event
                     */
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Entity
                    /**
                     * Gets the EntityType of the Entity involved in this event.
                     * @return EntityType of the Entity involved in this event
                     */
                    // @ts-ignore
                    getEntityType(): org.bukkit.entity.EntityType
                }
            }
        }
    }
}
