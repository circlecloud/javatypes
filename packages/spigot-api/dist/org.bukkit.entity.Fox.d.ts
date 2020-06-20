declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * What does the fox say?
             */
            // @ts-ignore
            interface Fox extends org.bukkit.entity.Animals, org.bukkit.entity.Sittable {
                /**
                 * Gets the current type of this fox.
                 * @return Type of the fox.
                 */
                // @ts-ignore
                getFoxType(): org.bukkit.entity.Fox.Type
                /**
                 * Sets the current type of this fox.
                 * @param type New type of this fox.
                 */
                // @ts-ignore
                setFoxType(type: org.bukkit.entity.Fox.Type): void
                /**
                 * Checks if this animal is crouching
                 * @return true if crouching
                 */
                // @ts-ignore
                isCrouching(): boolean
                /**
                 * Sets if this animal is crouching.
                 * @param crouching true if crouching
                 */
                // @ts-ignore
                setCrouching(crouching: boolean): void
                /**
                 * Sets if this animal is sleeping.
                 * @param sleeping true if sleeping
                 */
                // @ts-ignore
                setSleeping(sleeping: boolean): void
                /**
                 * Gets the first trusted player.
                 * @return the owning AnimalTamer, or null if not owned
                 */
                // @ts-ignore
                getFirstTrustedPlayer(): org.bukkit.entity.AnimalTamer
                /**
                 * Set the first trusted player.
                 * <p>
                 * The first trusted player may only be removed after the second.
                 * @param player the AnimalTamer to be trusted
                 */
                // @ts-ignore
                setFirstTrustedPlayer(player: org.bukkit.entity.AnimalTamer): void
                /**
                 * Gets the second trusted player.
                 * @return the owning AnimalTamer, or null if not owned
                 */
                // @ts-ignore
                getSecondTrustedPlayer(): org.bukkit.entity.AnimalTamer
                /**
                 * Set the second trusted player.
                 * <p>
                 * The second trusted player may only be added after the first.
                 * @param player the AnimalTamer to be trusted
                 */
                // @ts-ignore
                setSecondTrustedPlayer(player: org.bukkit.entity.AnimalTamer): void
            }
        }
    }
}
