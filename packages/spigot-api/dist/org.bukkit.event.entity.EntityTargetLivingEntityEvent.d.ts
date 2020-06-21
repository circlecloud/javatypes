declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when an Entity targets a {@link LivingEntity} and can only target
                 * LivingEntity's.
                 */
                // @ts-ignore
                class EntityTargetLivingEntityEvent extends org.bukkit.event.entity.EntityTargetEvent {
                    // @ts-ignore
                    constructor(entity: org.bukkit.entity.Entity, target: org.bukkit.entity.LivingEntity, reason: org.bukkit.event.entity.EntityTargetEvent.TargetReason)
                    // @ts-ignore
                    public getTarget(): org.bukkit.entity.LivingEntity
                    /**
                     * Set the Entity that you want the mob to target.
                     * <p>
                     * It is possible to be null, null will cause the entity to be
                     * target-less.
                     * <p>
                     * Must be a LivingEntity, or null.
                     * @param target The entity to target
                     */
                    // @ts-ignore
                    public setTarget(target: org.bukkit.entity.Entity): void
                }
            }
        }
    }
}
