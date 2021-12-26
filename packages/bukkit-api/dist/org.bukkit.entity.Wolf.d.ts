declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Wolf
             */
            // @ts-ignore
            interface Wolf extends org.bukkit.entity.Tameable, org.bukkit.entity.Sittable {
                /**
                 * Checks if this wolf is angry
                 * @return Anger true if angry
                 */
                // @ts-ignore
                isAngry(): boolean
                /**
                 * Sets the anger of this wolf.
                 * <p>
                 * An angry wolf can not be fed or tamed.
                 * @param angry true if angry
                 * @see #setTarget(org.bukkit.entity.LivingEntity)
                 */
                // @ts-ignore
                setAngry(angry: boolean): void
                /**
                 * Get the collar color of this wolf
                 * @return the color of the collar
                 */
                // @ts-ignore
                getCollarColor(): org.bukkit.DyeColor
                /**
                 * Set the collar color of this wolf
                 * @param color the color to apply
                 */
                // @ts-ignore
                setCollarColor(color: org.bukkit.DyeColor): void
            }
        }
    }
}
