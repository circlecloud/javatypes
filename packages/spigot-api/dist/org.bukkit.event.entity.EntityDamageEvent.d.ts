declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                /**
                 * Stores data for damage events
                 */
                // @ts-ignore
                class EntityDamageEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, damage: number /*double*/)
                    // @ts-ignore
                    constructor(damagee: org.bukkit.entity.Entity, cause: org.bukkit.event.entity.EntityDamageEvent.DamageCause, modifiers: java.util.Map<org.bukkit.event.entity.EntityDamageEvent.DamageModifier, java.lang.Double>, modifierFunctions: java.util.Map<org.bukkit.event.entity.EntityDamageEvent.DamageModifier, <any>>)
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    /**
                     * Gets the original damage for the specified modifier, as defined at this
                     * event's construction.
                     * @param type the modifier
                     * @return the original damage
                     * @throws IllegalArgumentException if type is null
                     */
                    // @ts-ignore
                    getOriginalDamage(type: org.bukkit.event.entity.EntityDamageEvent.DamageModifier): double
                    /**
                     * Sets the damage for the specified modifier.
                     * @param type the damage modifier
                     * @param damage the scalar value of the damage's modifier
                     * @throws IllegalArgumentException if type is null
                     * @throws UnsupportedOperationException if the caller does not support
                     *      the particular DamageModifier, or to rephrase, when {#link
                     *      #isApplicable(DamageModifier)} returns false
                     * @see #getFinalDamage()
                     */
                    // @ts-ignore
                    setDamage(type: org.bukkit.event.entity.EntityDamageEvent.DamageModifier, damage: number /*double*/): void
                    /**
                     * Gets the damage change for some modifier
                     * @param type the damage modifier
                     * @return The raw amount of damage caused by the event
                     * @throws IllegalArgumentException if type is null
                     * @see DamageModifier#BASE
                     */
                    // @ts-ignore
                    getDamage(type: org.bukkit.event.entity.EntityDamageEvent.DamageModifier): double
                    /**
                     * This checks to see if a particular modifier is valid for this event's
                     * caller, such that, {@link #setDamage(DamageModifier, double)} will not
                     * throw an {@link UnsupportedOperationException}.
                     * <p>
                     * {@link DamageModifier#BASE} is always applicable.
                     * @param type the modifier
                     * @return true if the modifier is supported by the caller, false otherwise
                     * @throws IllegalArgumentException if type is null
                     */
                    // @ts-ignore
                    isApplicable(type: org.bukkit.event.entity.EntityDamageEvent.DamageModifier): boolean
                    /**
                     * Gets the raw amount of damage caused by the event
                     * @return The raw amount of damage caused by the event
                     * @see DamageModifier#BASE
                     */
                    // @ts-ignore
                    getDamage(): double
                    /**
                     * Gets the amount of damage caused by the event after all damage
                     * reduction is applied.
                     * @return the amount of damage caused by the event
                     */
                    // @ts-ignore
                    getFinalDamage(): double
                    /**
                     * Sets the raw amount of damage caused by the event.
                     * <p>
                     * For compatibility this also recalculates the modifiers and scales
                     * them by the difference between the modifier for the previous damage
                     * value and the new one.
                     * @param damage The raw amount of damage caused by the event
                     */
                    // @ts-ignore
                    setDamage(damage: number /*double*/): void
                    /**
                     * Gets the cause of the damage.
                     * @return A DamageCause value detailing the cause of the damage.
                     */
                    // @ts-ignore
                    getCause(): org.bukkit.event.entity.EntityDamageEvent.DamageCause
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
