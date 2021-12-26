declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * Represents a compass that can track a specific location.
                 */
                // @ts-ignore
                interface CompassMeta extends org.bukkit.inventory.meta.ItemMeta {
                    /**
                     * Checks if this compass has been paired to a lodestone.
                     * @return paired status
                     */
                    // @ts-ignore
                    hasLodestone(): boolean
                    /**
                     * Gets the location that this compass will point to.
                     * Check {@link #hasLodestone()} first!
                     * @return lodestone location
                     */
                    // @ts-ignore
                    getLodestone(): org.bukkit.Location
                    /**
                     * Sets the location this lodestone compass will point to.
                     * @param lodestone new location or null to clear
                     */
                    // @ts-ignore
                    setLodestone(lodestone: org.bukkit.Location): void
                    /**
                     * Gets if this compass is tracking a specific lodestone.
                     * If true the compass will only work if there is a lodestone at the tracked
                     * location.
                     * @return lodestone tracked
                     */
                    // @ts-ignore
                    isLodestoneTracked(): boolean
                    /**
                     * Sets if this compass is tracking a specific lodestone.
                     * If true the compass will only work if there is a lodestone at the tracked
                     * location.
                     * @param tracked new tracked status
                     */
                    // @ts-ignore
                    setLodestoneTracked(tracked: boolean): void
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.CompassMeta
                }
            }
        }
    }
}
