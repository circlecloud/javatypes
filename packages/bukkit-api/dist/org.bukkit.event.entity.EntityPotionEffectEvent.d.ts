declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Called when a potion effect is modified on an entity.
                 * <p>
                 * If the event is cancelled, no change will be made on the entity.
                 */
                // @ts-ignore
                class EntityPotionEffectEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(livingEntity: org.bukkit.entity.LivingEntity, oldEffect: org.bukkit.potion.PotionEffect, newEffect: org.bukkit.potion.PotionEffect, cause: org.bukkit.event.entity.EntityPotionEffectEvent.Cause, action: org.bukkit.event.entity.EntityPotionEffectEvent.Action, override: boolean)
                    /**
                     * Gets the old potion effect of the changed type, which will be removed.
                     * @return The old potion effect or null if the entity did not have the
                     *  changed effect type.
                     */
                    // @ts-ignore
                    public getOldEffect(): org.bukkit.potion.PotionEffect
                    /**
                     * Gets new potion effect of the changed type to be applied.
                     * @return The new potion effect or null if the effect of the changed type
                     *  will be removed.
                     */
                    // @ts-ignore
                    public getNewEffect(): org.bukkit.potion.PotionEffect
                    /**
                     * Gets the cause why the effect has changed.
                     * @return A Cause value why the effect has changed.
                     */
                    // @ts-ignore
                    public getCause(): org.bukkit.event.entity.EntityPotionEffectEvent.Cause
                    /**
                     * Gets the action which will be performed on the potion effect type.
                     * @return An action to be performed on the potion effect type.
                     */
                    // @ts-ignore
                    public getAction(): org.bukkit.event.entity.EntityPotionEffectEvent.Action
                    /**
                     * Gets the modified potion effect type.
                     * @return The effect type which will be modified on the entity.
                     */
                    // @ts-ignore
                    public getModifiedType(): org.bukkit.potion.PotionEffectType
                    /**
                     * Returns if the new potion effect will override the old potion effect
                     * (Only applicable for the CHANGED Action).
                     * @return If the new effect will override the old one.
                     */
                    // @ts-ignore
                    public isOverride(): boolean
                    /**
                     * Sets if the new potion effect will override the old potion effect (Only
                     * applicable for the CHANGED action).
                     * @param override If the new effect will override the old one.
                     */
                    // @ts-ignore
                    public setOverride(override: boolean): void
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
