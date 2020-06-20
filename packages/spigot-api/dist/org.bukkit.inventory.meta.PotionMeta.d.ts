declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * Represents a potion or item that can have custom effects.
                 */
                // @ts-ignore
                interface PotionMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Sets the underlying potion data
                     * @param data PotionData to set the base potion state to
                     */
                    // @ts-ignore
                    setBasePotionData(data: org.bukkit.potion.PotionData): void
                    /**
                     * Returns the potion data about the base potion
                     * @return a PotionData object
                     */
                    // @ts-ignore
                    getBasePotionData(): org.bukkit.potion.PotionData
                    /**
                     * Checks for the presence of custom potion effects.
                     * @return true if custom potion effects are applied
                     */
                    // @ts-ignore
                    hasCustomEffects(): boolean
                    /**
                     * Gets an immutable list containing all custom potion effects applied to
                     * this potion.
                     * <p>
                     * Plugins should check that hasCustomEffects() returns true before calling
                     * this method.
                     * @return the immutable list of custom potion effects
                     */
                    // @ts-ignore
                    getCustomEffects(): java.util.List<org.bukkit.potion.PotionEffect>
                    /**
                     * Adds a custom potion effect to this potion.
                     * @param effect the potion effect to add
                     * @param overwrite true if any existing effect of the same type should be
                     *  overwritten
                     * @return true if the potion meta changed as a result of this call
                     */
                    // @ts-ignore
                    addCustomEffect(effect: org.bukkit.potion.PotionEffect, overwrite: boolean): boolean
                    /**
                     * Removes a custom potion effect from this potion.
                     * @param type the potion effect type to remove
                     * @return true if the potion meta changed as a result of this call
                     */
                    // @ts-ignore
                    removeCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean
                    /**
                     * Checks for a specific custom potion effect type on this potion.
                     * @param type the potion effect type to check for
                     * @return true if the potion has this effect
                     */
                    // @ts-ignore
                    hasCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean
                    /**
                     * Moves a potion effect to the top of the potion effect list.
                     * <p>
                     * This causes the client to display the potion effect in the potion's name.
                     * @param type the potion effect type to move
                     * @return true if the potion meta changed as a result of this call
                     * @deprecated use {#link org.bukkit.potion.PotionType#PotionType}
                     */
                    // @ts-ignore
                    setMainEffect(type: org.bukkit.potion.PotionEffectType): boolean
                    /**
                     * Removes all custom potion effects from this potion.
                     * @return true if the potion meta changed as a result of this call
                     */
                    // @ts-ignore
                    clearCustomEffects(): boolean
                    /**
                     * Checks for existence of a potion color.
                     * @return true if this has a custom potion color
                     */
                    // @ts-ignore
                    hasColor(): boolean
                    /**
                     * Gets the potion color that is set. A custom potion color will alter the
                     * display of the potion in an inventory slot.
                     * <p>
                     * Plugins should check that hasColor() returns <code>true</code> before
                     * calling this method.
                     * @return the potion color that is set
                     */
                    // @ts-ignore
                    getColor(): org.bukkit.Color
                    /**
                     * Sets the potion color. A custom potion color will alter the display of
                     * the potion in an inventory slot.
                     * @param color the color to set
                     */
                    // @ts-ignore
                    setColor(color: org.bukkit.Color): void
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.PotionMeta
                }
            }
        }
    }
}
