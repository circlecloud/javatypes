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
                    constructor(original: org.bukkit.entity.Entity, convertedList: java.util.List<org.bukkit.entity.Entity> | Array<org.bukkit.entity.Entity>, transformReason: org.bukkit.event.entity.EntityTransformEvent.TransformReason)
                    /**
                     * Gets the entity that the original entity was transformed to.
                     * This returns the first entity in the transformed entity list.
                     * @return The transformed entity.
                     * @see #getTransformedEntities()
                     */
                    // @ts-ignore
                    public getTransformedEntity(): org.bukkit.entity.Entity
                    /**
                     * Gets the entities that the original entity was transformed to.
                     * @return The transformed entities.
                     */
                    // @ts-ignore
                    public getTransformedEntities(): Array<org.bukkit.entity.Entity>
                    /**
                     * Gets the reason for the conversion that has occurred.
                     * @return The reason for conversion that has occurred.
                     */
                    // @ts-ignore
                    public getTransformReason(): org.bukkit.event.entity.EntityTransformEvent.TransformReason
                    // @ts-ignore
                    public isCancelled(): boolean
                    // @ts-ignore
                    public setCancelled(cancel: boolean): void
                    // @ts-ignore
                    public getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    public static getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
