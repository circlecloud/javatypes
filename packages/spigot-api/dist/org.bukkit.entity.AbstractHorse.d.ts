declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Horse-like creature.
             */
            // @ts-ignore
            interface AbstractHorse extends org.bukkit.entity.Vehicle, org.bukkit.inventory.InventoryHolder, org.bukkit.entity.Tameable {
                /**
                 * Gets the horse's variant.
                 * <p>
                 * A horse's variant defines its physical appearance and capabilities.
                 * Whether a horse is a regular horse, donkey, mule, or other kind of horse
                 * is determined using the variant.
                 * @return a {#link Horse.Variant} representing the horse's variant
                 * @deprecated different variants are different classes
                 */
                // @ts-ignore
                getVariant(): org.bukkit.entity.Horse.Variant
                /**
                 * @param variant variant
                 * @deprecated you are required to spawn a different entity
                 */
                // @ts-ignore
                setVariant(variant: org.bukkit.entity.Horse.Variant): void
                /**
                 * Gets the domestication level of this horse.
                 * <p>
                 * A higher domestication level indicates that the horse is closer to
                 * becoming tame. As the domestication level gets closer to the max
                 * domestication level, the chance of the horse becoming tame increases.
                 * @return domestication level
                 */
                // @ts-ignore
                getDomestication(): number /*int*/
                /**
                 * Sets the domestication level of this horse.
                 * <p>
                 * Setting the domestication level to a high value will increase the
                 * horse's chances of becoming tame.
                 * <p>
                 * Domestication level must be greater than zero and no greater than
                 * the max domestication level of the horse, determined with
                 * {@link #getMaxDomestication()}
                 * @param level domestication level
                 */
                // @ts-ignore
                setDomestication(level: number /*int*/): void
                /**
                 * Gets the maximum domestication level of this horse.
                 * <p>
                 * The higher this level is, the longer it will likely take
                 * for the horse to be tamed.
                 * @return the max domestication level
                 */
                // @ts-ignore
                getMaxDomestication(): number /*int*/
                /**
                 * Sets the maximum domestication level of this horse.
                 * <p>
                 * Setting a higher max domestication will increase the amount of
                 * domesticating (feeding, riding, etc.) necessary in order to tame it,
                 * while setting a lower max value will have the opposite effect.
                 * <p>
                 * Maximum domestication must be greater than zero.
                 * @param level the max domestication level
                 */
                // @ts-ignore
                setMaxDomestication(level: number /*int*/): void
                /**
                 * Gets the jump strength of this horse.
                 * <p>
                 * Jump strength defines how high the horse can jump. A higher jump strength
                 * increases how high a jump will go.
                 * @return the horse's jump strength
                 */
                // @ts-ignore
                getJumpStrength(): number /*double*/
                /**
                 * Sets the jump strength of this horse.
                 * <p>
                 * A higher jump strength increases how high a jump will go.
                 * Setting a jump strength to 0 will result in no jump.
                 * You cannot set a jump strength to a value below 0 or
                 * above 2.
                 * @param strength jump strength for this horse
                 */
                // @ts-ignore
                setJumpStrength(strength: number /*double*/): void
                // @ts-ignore
                getInventory(): org.bukkit.inventory.AbstractHorseInventory
            }
        }
    }
}
