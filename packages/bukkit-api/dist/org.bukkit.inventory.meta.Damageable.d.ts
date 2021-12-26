declare namespace org {
    namespace bukkit {
        namespace inventory {
            namespace meta {
                /**
                 * Represents an item that has durability and can take damage.
                 */
                // @ts-ignore
                interface Damageable {
                    /**
                     * Checks to see if this item has damage
                     * @return true if this has damage
                     */
                    // @ts-ignore
                    hasDamage(): boolean
                    /**
                     * Gets the damage
                     * @return the damage
                     */
                    // @ts-ignore
                    getDamage(): number /*int*/
                    /**
                     * Sets the damage
                     * @param damage item damage
                     */
                    // @ts-ignore
                    setDamage(damage: number /*int*/): void
                    // @ts-ignore
                    clone(): org.bukkit.inventory.meta.Damageable
                }
            }
        }
    }
}
