declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * Represents a meta that can store a single FireworkEffect. An example
                 * includes {@link Material#FIREWORK_STAR}.
                 */
                // @ts-ignore
                interface FireworkEffectMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Sets the firework effect for this meta.
                     * @param effect the effect to set, or null to indicate none.
                     */
                    // @ts-ignore
                    setEffect(effect: org.bukkit.FireworkEffect): void
                    /**
                     * Checks if this meta has an effect.
                     * @return true if this meta has an effect, false otherwise
                     */
                    // @ts-ignore
                    hasEffect(): boolean
                    /**
                     * Gets the firework effect for this meta.
                     * @return the current effect, or null if none
                     */
                    // @ts-ignore
                    getEffect(): org.bukkit.FireworkEffect
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.FireworkEffectMeta
                }
            }
        }
    }
}
