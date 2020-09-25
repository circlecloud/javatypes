declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Zoglin.
             */
            // @ts-ignore
            interface Zoglin extends org.bukkit.entity.Monster, org.bukkit.entity.Ageable {
                /**
                 * Gets whether the zoglin is a baby
                 * @return Whether the zoglin is a baby
                 * @deprecated see {#link Ageable#isAdult()}
                 */
                // @ts-ignore
                isBaby(): boolean
                /**
                 * Sets whether the zoglin is a baby
                 * @param flag Whether the zoglin is a baby
                 * @deprecated see {#link Ageable#setBaby()} and {@link Ageable#setAdult()}
                 */
                // @ts-ignore
                setBaby(flag: boolean): void
            }
        }
    }
}
