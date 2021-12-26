declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an {@link Entity} that has health and can take damage.
             */
            // @ts-ignore
            interface Damageable extends org.bukkit.entity.Entity {
                /**
                 * Deals the given amount of damage to this entity.
                 * @param amount Amount of damage to deal
                 */
                // @ts-ignore
                damage(amount: number /*double*/): void
                /**
                 * Deals the given amount of damage to this entity, from a specified
                 * entity.
                 * @param amount Amount of damage to deal
                 * @param source Entity which to attribute this damage from
                 */
                // @ts-ignore
                damage(amount: number /*double*/, source: org.bukkit.entity.Entity): void
                /**
                 * Gets the entity's health from 0 to {@link #getMaxHealth()}, where 0 is dead.
                 * @return Health represented from 0 to max
                 */
                // @ts-ignore
                getHealth(): number /*double*/
                /**
                 * Sets the entity's health from 0 to {@link #getMaxHealth()}, where 0 is
                 * dead.
                 * @param health New health represented from 0 to max
                 * @throws IllegalArgumentException Thrown if the health is {#literal < 0 or >}
                 *      {@link #getMaxHealth()}
                 */
                // @ts-ignore
                setHealth(health: number /*double*/): void
                /**
                 * Gets the entity's absorption amount.
                 * @return absorption amount from 0
                 */
                // @ts-ignore
                getAbsorptionAmount(): number /*double*/
                /**
                 * Sets the entity's absorption amount.
                 * @param amount new absorption amount from 0
                 * @throws IllegalArgumentException thrown if health is {#literal < 0} or
                 *  non-finite.
                 */
                // @ts-ignore
                setAbsorptionAmount(amount: number /*double*/): void
                /**
                 * Gets the maximum health this entity has.
                 * @return Maximum health
                 * @deprecated use {#link Attribute#GENERIC_MAX_HEALTH}.
                 */
                // @ts-ignore
                getMaxHealth(): number /*double*/
                /**
                 * Sets the maximum health this entity can have.
                 * <p>
                 * If the health of the entity is above the value provided it will be set
                 * to that value.
                 * <p>
                 * Note: An entity with a health bar ({@link Player}, {@link EnderDragon},
                 * {@link Wither}, etc...} will have their bar scaled accordingly.
                 * @param health amount of health to set the maximum to
                 * @deprecated use {#link Attribute#GENERIC_MAX_HEALTH}.
                 */
                // @ts-ignore
                setMaxHealth(health: number /*double*/): void
                /**
                 * Resets the max health to the original amount.
                 * @deprecated use {#link Attribute#GENERIC_MAX_HEALTH}.
                 */
                // @ts-ignore
                resetMaxHealth(): void
            }
        }
    }
}
