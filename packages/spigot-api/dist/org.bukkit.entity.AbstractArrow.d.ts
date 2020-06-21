declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an arrow.
             */
            // @ts-ignore
            interface AbstractArrow extends org.bukkit.entity.Projectile {
                /**
                 * Gets the knockback strength for an arrow, which is the
                 * {@link org.bukkit.enchantments.Enchantment#KNOCKBACK KnockBack} level
                 * of the bow that shot it.
                 * @return the knockback strength value
                 */
                // @ts-ignore
                getKnockbackStrength(): number /*int*/
                /**
                 * Sets the knockback strength for an arrow.
                 * @param knockbackStrength the knockback strength value
                 */
                // @ts-ignore
                setKnockbackStrength(knockbackStrength: number /*int*/): void
                /**
                 * Gets the base amount of damage this arrow will do.
                 * Defaults to 2.0 for a normal arrow with
                 * <code>0.5 * (1 + power level)</code> added for arrows fired from
                 * enchanted bows.
                 * @return base damage amount
                 */
                // @ts-ignore
                getDamage(): number /*double*/
                /**
                 * Sets the base amount of damage this arrow will do.
                 * @param damage new damage amount
                 */
                // @ts-ignore
                setDamage(damage: number /*double*/): void
                /**
                 * Gets the number of times this arrow can pierce through an entity.
                 * @return pierce level
                 */
                // @ts-ignore
                getPierceLevel(): number /*int*/
                /**
                 * Sets the number of times this arrow can pierce through an entity.
                 * Must be between 0 and 127 times.
                 * @param pierceLevel new pierce level
                 */
                // @ts-ignore
                setPierceLevel(pierceLevel: number /*int*/): void
                /**
                 * Gets whether this arrow is critical.
                 * <p>
                 * Critical arrows have increased damage and cause particle effects.
                 * <p>
                 * Critical arrows generally occur when a player fully draws a bow before
                 * firing.
                 * @return true if it is critical
                 */
                // @ts-ignore
                isCritical(): boolean
                /**
                 * Sets whether or not this arrow should be critical.
                 * @param critical whether or not it should be critical
                 */
                // @ts-ignore
                setCritical(critical: boolean): void
                /**
                 * Gets whether this arrow is in a block or not.
                 * <p>
                 * Arrows in a block are motionless and may be picked up by players.
                 * @return true if in a block
                 */
                // @ts-ignore
                isInBlock(): boolean
                /**
                 * Gets the block to which this arrow is attached.
                 * @return the attached block or null if not attached
                 */
                // @ts-ignore
                getAttachedBlock(): org.bukkit.block.Block
                /**
                 * Gets the current pickup status of this arrow.
                 * @return the pickup status of this arrow.
                 */
                // @ts-ignore
                getPickupStatus(): org.bukkit.entity.AbstractArrow.PickupStatus
                /**
                 * Sets the current pickup status of this arrow.
                 * @param status new pickup status of this arrow.
                 */
                // @ts-ignore
                setPickupStatus(status: org.bukkit.entity.AbstractArrow.PickupStatus): void
            }
        }
    }
}
