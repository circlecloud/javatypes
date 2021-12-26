declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * Represents a {@link Material#FIREWORK_ROCKET} and its effects.
                 */
                // @ts-ignore
                interface FireworkMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Add another effect to this firework.
                     * @param effect The firework effect to add
                     * @throws IllegalArgumentException If effect is null
                     */
                    // @ts-ignore
                    addEffect(effect: org.bukkit.FireworkEffect): void
                    /**
                     * Add several effects to this firework.
                     * @param effects The firework effects to add
                     * @throws IllegalArgumentException If effects is null
                     * @throws IllegalArgumentException If any effect is null (may be thrown
                     *      after changes have occurred)
                     */
                    // @ts-ignore
                    addEffects(...effects: org.bukkit.FireworkEffect[]): void
                    /**
                     * Add several firework effects to this firework.
                     * @param effects An iterable object whose iterator yields the desired
                     *      firework effects
                     * @throws IllegalArgumentException If effects is null
                     * @throws IllegalArgumentException If any effect is null (may be thrown
                     *      after changes have occurred)
                     */
                    // @ts-ignore
                    addEffects(effects: java.lang.Iterable<org.bukkit.FireworkEffect>): void
                    /**
                     * Get the effects in this firework.
                     * @return An immutable list of the firework effects
                     */
                    // @ts-ignore
                    getEffects(): Array<org.bukkit.FireworkEffect>
                    /**
                     * Get the number of effects in this firework.
                     * @return The number of effects
                     */
                    // @ts-ignore
                    getEffectsSize(): number /*int*/
                    /**
                     * Remove an effect from this firework.
                     * @param index The index of the effect to remove
                     * @throws IndexOutOfBoundsException If index {#literal < 0 or index >} {@link
                     *      #getEffectsSize()}
                     */
                    // @ts-ignore
                    removeEffect(index: number /*int*/): void
                    /**
                     * Remove all effects from this firework.
                     */
                    // @ts-ignore
                    clearEffects(): void
                    /**
                     * Get whether this firework has any effects.
                     * @return true if it has effects, false if there are no effects
                     */
                    // @ts-ignore
                    hasEffects(): boolean
                    /**
                     * Gets the approximate height the firework will fly.
                     * @return approximate flight height of the firework.
                     */
                    // @ts-ignore
                    getPower(): number /*int*/
                    /**
                     * Sets the approximate power of the firework. Each level of power is half
                     * a second of flight time.
                     * @param power the power of the firework, from 0-128
                     * @throws IllegalArgumentException if {#literal height<0 or height>128}
                     */
                    // @ts-ignore
                    setPower(power: number /*int*/): void
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.FireworkMeta
                }
            }
        }
    }
}
