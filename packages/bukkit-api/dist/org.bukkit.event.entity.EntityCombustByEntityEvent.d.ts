declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity causes another entity to combust.
                 */
                // @ts-ignore
                class EntityCombustByEntityEvent extends org.bukkit.event.entity.EntityCombustEvent {
                    // @ts-ignore
                    constructor(combuster: org.bukkit.entity.Entity, combustee: org.bukkit.entity.Entity, duration: number /*int*/)
                    /**
                     * Get the entity that caused the combustion event.
                     * @return the Entity that set the combustee alight.
                     */
                    // @ts-ignore
                    public getCombuster(): org.bukkit.entity.Entity
                }
            }
        }
    }
}
