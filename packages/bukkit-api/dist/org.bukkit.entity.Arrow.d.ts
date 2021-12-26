declare namespace org {
    namespace bukkit {
        namespace entity {
            // @ts-ignore
            interface Arrow extends org.bukkit.entity.AbstractArrow {
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
                 * Gets the color of this arrow.
                 * @return arrow color
                 */
                // @ts-ignore
                getColor(): org.bukkit.Color
                /**
                 * Sets the color of this arrow. Will be applied as a tint to its particles.
                 * @param color arrow color
                 */
                // @ts-ignore
                setColor(color: org.bukkit.Color): void
                /**
                 * Checks for the presence of custom potion effects.
                 * @return true if custom potion effects are applied
                 */
                // @ts-ignore
                hasCustomEffects(): boolean
                /**
                 * Gets an immutable list containing all custom potion effects applied to
                 * this arrow.
                 * <p>
                 * Plugins should check that hasCustomEffects() returns true before calling
                 * this method.
                 * @return the immutable list of custom potion effects
                 */
                // @ts-ignore
                getCustomEffects(): Array<org.bukkit.potion.PotionEffect>
                /**
                 * Adds a custom potion effect to this arrow.
                 * @param effect the potion effect to add
                 * @param overwrite true if any existing effect of the same type should be
                 *  overwritten
                 * @return true if the effect was added as a result of this call
                 */
                // @ts-ignore
                addCustomEffect(effect: org.bukkit.potion.PotionEffect, overwrite: boolean): boolean
                /**
                 * Removes a custom potion effect from this arrow.
                 * @param type the potion effect type to remove
                 * @return true if the an effect was removed as a result of this call
                 * @throws IllegalArgumentException if this operation would leave the Arrow
                 *  in a state with no Custom Effects and PotionType.UNCRAFTABLE
                 */
                // @ts-ignore
                removeCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean
                /**
                 * Checks for a specific custom potion effect type on this arrow.
                 * @param type the potion effect type to check for
                 * @return true if the potion has this effect
                 */
                // @ts-ignore
                hasCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean
                /**
                 * Removes all custom potion effects from this arrow.
                 * @throws IllegalArgumentException if this operation would leave the Arrow
                 *  in a state with no Custom Effects and PotionType.UNCRAFTABLE
                 */
                // @ts-ignore
                clearCustomEffects(): void
            }
        }
    }
}
