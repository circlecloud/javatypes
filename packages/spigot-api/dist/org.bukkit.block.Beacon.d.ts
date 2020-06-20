declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of a beacon.
             */
            // @ts-ignore
            interface Beacon extends org.bukkit.block.TileState, org.bukkit.block.Lockable, org.bukkit.Nameable {
                /**
                 * Returns the list of players within the beacon's range of effect.
                 * <p>
                 * This will return an empty list if the block represented by this state is
                 * no longer a beacon.
                 * @return the players in range
                 * @throws IllegalStateException if this block state is not placed
                 */
                // @ts-ignore
                getEntitiesInRange(): java.util.Collection<org.bukkit.entity.LivingEntity>
                /**
                 * Returns the tier of the beacon pyramid (0-4). The tier refers to the
                 * beacon's power level, based on how many layers of blocks are in the
                 * pyramid. Tier 1 refers to a beacon with one layer of 9 blocks under it.
                 * @return the beacon tier
                 */
                // @ts-ignore
                getTier(): int
                /**
                 * Returns the primary effect set on the beacon
                 * @return the primary effect or null if not set
                 */
                // @ts-ignore
                getPrimaryEffect(): org.bukkit.potion.PotionEffect
                /**
                 * Set the primary effect on this beacon, or null to clear.
                 * @param effect new primary effect
                 */
                // @ts-ignore
                setPrimaryEffect(effect: org.bukkit.potion.PotionEffectType): void
                /**
                 * Returns the secondary effect set on the beacon.
                 * @return the secondary effect or null if no secondary effect
                 */
                // @ts-ignore
                getSecondaryEffect(): org.bukkit.potion.PotionEffect
                /**
                 * Set the secondary effect on this beacon, or null to clear. Note that tier
                 * must be &gt;= 4 for this effect to be active.
                 * @param effect desired secondary effect
                 */
                // @ts-ignore
                setSecondaryEffect(effect: org.bukkit.potion.PotionEffectType): void
            }
        }
    }
}
