declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an entity is about to be replaced by another entity.
                 */
                // @ts-ignore
                class EntityTransformEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(original: org.bukkit.entity.Entity, convertedList: Array<org.bukkit.entity.Entity>, transformReason: org.bukkit.event.entity.EntityTransformEvent.TransformReason)
                    /**
                     * Gets the entity that the original entity was transformed to.
                     * This returns the first entity in the transformed entity list.
                     * @return The transformed entity.
                     * @see #getTransformedEntities()
                     */
                    // @ts-ignore
                    getTransformedEntity(): org.bukkit.entity.Entity
                    /**
                     * Gets the entities that the original entity was transformed to.
                     * @return The transformed entities.
                     */
                    // @ts-ignore
                    getTransformedEntities(): java.util.List<org.bukkit.entity.Entity>
                    /**
                     * Gets the reason for the conversion that has occurred.
                     * @return The reason for conversion that has occurred.
                     */
                    // @ts-ignore
                    getTransformReason(): org.bukkit.event.entity.EntityTransformEvent.TransformReason
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
