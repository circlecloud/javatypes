declare namespace org {
    namespace bukkit {
        namespace event {
            namespace hanging {
                /**
                 * Triggered when a hanging entity is removed by an entity
                 */
                // @ts-ignore
                class HangingBreakByEntityEvent extends org.bukkit.event.hanging.HangingBreakEvent {
                    // @ts-ignore
                    constructor(hanging: org.bukkit.entity.Hanging, remover: org.bukkit.entity.Entity)
                    // @ts-ignore
                    constructor(hanging: org.bukkit.entity.Hanging, remover: org.bukkit.entity.Entity, cause: org.bukkit.event.hanging.HangingBreakEvent.RemoveCause)
                    /**
                     * Gets the entity that removed the hanging entity.
                     * May be null, for example when broken by an explosion.
                     * @return the entity that removed the hanging entity
                     */
                    // @ts-ignore
                    getRemover(): org.bukkit.entity.Entity
                }
            }
        }
    }
}
