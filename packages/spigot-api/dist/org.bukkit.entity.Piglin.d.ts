declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Piglin.
             */
            // @ts-ignore
            interface Piglin extends org.bukkit.entity.PiglinAbstract {
                /**
                 * Get whether the piglin is able to hunt hoglins.
                 * @return Whether the piglin is able to hunt hoglins
                 */
                // @ts-ignore
                isAbleToHunt(): boolean
                /**
                 * Sets whether the piglin is able to hunt hoglins.
                 * @param flag Whether the piglin is able to hunt hoglins.
                 */
                // @ts-ignore
                setIsAbleToHunt(flag: boolean): void
            }
        }
    }
}
