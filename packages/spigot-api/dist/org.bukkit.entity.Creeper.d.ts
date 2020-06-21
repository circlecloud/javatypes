declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Creeper
             */
            // @ts-ignore
            interface Creeper extends org.bukkit.entity.Monster {
                /**
                 * Checks if this Creeper is powered (Electrocuted)
                 * @return true if this creeper is powered
                 */
                // @ts-ignore
                isPowered(): boolean
                /**
                 * Sets the Powered status of this Creeper
                 * @param value New Powered status
                 */
                // @ts-ignore
                setPowered(value: boolean): void
                /**
                 * Set the maximum fuse ticks for this Creeper, where the maximum ticks
                 * is the amount of time in which a creeper is allowed to be in the
                 * primed state before exploding.
                 * @param ticks the new maximum fuse ticks
                 */
                // @ts-ignore
                setMaxFuseTicks(ticks: number /*int*/): void
                /**
                 * Get the maximum fuse ticks for this Creeper, where the maximum ticks
                 * is the amount of time in which a creeper is allowed to be in the
                 * primed state before exploding.
                 * @return the maximum fuse ticks
                 */
                // @ts-ignore
                getMaxFuseTicks(): number /*int*/
                /**
                 * Set the explosion radius in which this Creeper's explosion will affect.
                 * @param radius the new explosion radius
                 */
                // @ts-ignore
                setExplosionRadius(radius: number /*int*/): void
                /**
                 * Get the explosion radius in which this Creeper's explosion will affect.
                 * @return the explosion radius
                 */
                // @ts-ignore
                getExplosionRadius(): number /*int*/
                /**
                 * Makes this Creeper explode instantly.
                 * The resulting explosion can be cancelled by an
                 * {@link org.bukkit.event.entity.ExplosionPrimeEvent} and obeys the mob
                 * griefing gamerule.
                 */
                // @ts-ignore
                explode(): void
                /**
                 * Ignites this Creeper, beginning its fuse.
                 * The amount of time the Creeper takes to explode will depend on what
                 * {@link #setMaxFuseTicks} is set as.
                 * The resulting explosion can be cancelled by an
                 * {@link org.bukkit.event.entity.ExplosionPrimeEvent} and obeys the mob
                 * griefing gamerule.
                 */
                // @ts-ignore
                ignite(): void
            }
        }
    }
}
