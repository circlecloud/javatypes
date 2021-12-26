declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Husk - variant of {@link Zombie}.
             */
            // @ts-ignore
            interface Husk extends org.bukkit.entity.Zombie {
                /**
                 * Get if this entity is in the process of converting to a Zombie as a
                 * result of being underwater.
                 * @return conversion status
                 */
                // @ts-ignore
                isConverting(): boolean
                /**
                 * Gets the amount of ticks until this entity will be converted to a Zombie
                 * as a result of being underwater.
                 * When this reaches 0, the entity will be converted.
                 * @return conversion time
                 * @throws IllegalStateException if {#link #isConverting()} is false.
                 */
                // @ts-ignore
                getConversionTime(): number /*int*/
                /**
                 * Sets the amount of ticks until this entity will be converted to a Zombie
                 * as a result of being underwater.
                 * When this reaches 0, the entity will be converted. A value of less than 0
                 * will stop the current conversion process without converting the current
                 * entity.
                 * @param time new conversion time
                 */
                // @ts-ignore
                setConversionTime(time: number /*int*/): void
            }
        }
    }
}
