declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * Represents a suspicious stew that can have custom effects.
                 */
                // @ts-ignore
                interface SuspiciousStewMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Checks for the presence of custom potion effects.
                     * @return true if custom potion effects are applied
                     */
                    // @ts-ignore
                    hasCustomEffects(): boolean
                    /**
                     * Gets an immutable list containing all custom potion effects applied to
                     * this suspicious stew.
                     * <p>
                     * Plugins should check that hasCustomEffects() returns true before calling
                     * this method.
                     * @return the immutable list of custom potion effects
                     */
                    // @ts-ignore
                    getCustomEffects(): Array<org.bukkit.potion.PotionEffect>
                    /**
                     * Adds a custom potion effect to this suspicious stew.
                     * @param effect the potion effect to add
                     * @param overwrite true if any existing effect of the same type should be
                     *  overwritten
                     * @return true if the suspicious stew meta changed as a result of this call
                     */
                    // @ts-ignore
                    addCustomEffect(effect: org.bukkit.potion.PotionEffect, overwrite: boolean): boolean
                    /**
                     * Removes a custom potion effect from this suspicious stew.
                     * @param type the potion effect type to remove
                     * @return true if the suspicious stew meta changed as a result of this call
                     */
                    // @ts-ignore
                    removeCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean
                    /**
                     * Checks for a specific custom potion effect type on this suspicious stew.
                     * @param type the potion effect type to check for
                     * @return true if the suspicious stew has this effect
                     */
                    // @ts-ignore
                    hasCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean
                    /**
                     * Removes all custom potion effects from this suspicious stew.
                     * @return true if the suspicious stew meta changed as a result of this call
                     */
                    // @ts-ignore
                    clearCustomEffects(): boolean
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.SuspiciousStewMeta
                }
            }
        }
    }
}
