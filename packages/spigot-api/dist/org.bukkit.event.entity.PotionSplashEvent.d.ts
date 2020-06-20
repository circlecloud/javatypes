declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a splash potion hits an area
                 */
                // @ts-ignore
                class PotionSplashEvent extends org.bukkit.event.entity.ProjectileHitEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(potion: org.bukkit.entity.ThrownPotion, affectedEntities: java.util.Map<org.bukkit.entity.LivingEntity, java.lang.Double>)
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.ThrownPotion
                    /**
                     * Gets the potion which caused this event
                     * @return The thrown potion entity
                     */
                    // @ts-ignore
                    getPotion(): org.bukkit.entity.ThrownPotion
                    /**
                     * Retrieves a list of all effected entities
                     * @return A fresh copy of the affected entity list
                     */
                    // @ts-ignore
                    getAffectedEntities(): java.util.Collection<org.bukkit.entity.LivingEntity>
                    /**
                     * Gets the intensity of the potion's effects for given entity; This
                     * depends on the distance to the impact center
                     * @param entity Which entity to get intensity for
                     * @return intensity relative to maximum effect; 0.0: not affected; 1.0:
                     *      fully hit by potion effects
                     */
                    // @ts-ignore
                    getIntensity(entity: org.bukkit.entity.LivingEntity): double
                    /**
                     * Overwrites the intensity for a given entity
                     * @param entity For which entity to define a new intensity
                     * @param intensity relative to maximum effect
                     */
                    // @ts-ignore
                    setIntensity(entity: org.bukkit.entity.LivingEntity, intensity: number /*double*/): void
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
