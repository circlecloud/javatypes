declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a fishing hook.
             */
            // @ts-ignore
            interface FishHook extends org.bukkit.entity.Projectile {
                /**
                 * Gets the chance of a fish biting.
                 * <p>
                 * 0.0 = No Chance.<br>
                 * 1.0 = Instant catch.
                 * @return chance the bite chance
                 * @deprecated has no effect in newer Minecraft versions
                 */
                // @ts-ignore
                getBiteChance(): number /*double*/
                /**
                 * Sets the chance of a fish biting.
                 * <p>
                 * 0.0 = No Chance.<br>
                 * 1.0 = Instant catch.
                 * @param chance the bite chance
                 * @throws IllegalArgumentException if the bite chance is not between 0
                 *      and 1
                 * @deprecated has no effect in newer Minecraft versions
                 */
                // @ts-ignore
                setBiteChance(chance: number /*double*/): void
            }
        }
    }
}
