declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Piglin / Piglin Brute.
             */
            // @ts-ignore
            interface PiglinAbstract extends org.bukkit.entity.Monster, org.bukkit.entity.Ageable {
                /**
                 * Gets whether the piglin is immune to zombification.
                 * @return Whether the piglin is immune to zombification
                 */
                // @ts-ignore
                isImmuneToZombification(): boolean
                /**
                 * Sets whether the piglin is immune to zombification.
                 * @param flag Whether the piglin is immune to zombification
                 */
                // @ts-ignore
                setImmuneToZombification(flag: boolean): void
                /**
                 * Gets the amount of ticks until this entity will be converted to a
                 * Zombified Piglin.
                 * When this reaches 300, the entity will be converted.
                 * @return conversion time
                 * @throws IllegalStateException if {#link #isConverting()} is false.
                 */
                // @ts-ignore
                getConversionTime(): number /*int*/
                /**
                 * Sets the amount of ticks until this entity will be converted to a
                 * Zombified Piglin.
                 * When this reaches 0, the entity will be converted. A value of less than 0
                 * will stop the current conversion process without converting the current
                 * entity.
                 * @param time new conversion time
                 */
                // @ts-ignore
                setConversionTime(time: number /*int*/): void
                /**
                 * Get if this entity is in the process of converting to a Zombified Piglin.
                 * @return conversion status
                 */
                // @ts-ignore
                isConverting(): boolean
                /**
                 * Gets whether the piglin is a baby
                 * @return Whether the piglin is a baby
                 * @deprecated see {#link Ageable#isAdult()}
                 */
                // @ts-ignore
                isBaby(): boolean
                /**
                 * Sets whether the piglin is a baby
                 * @param flag Whether the piglin is a baby
                 * @deprecated see {#link Ageable#setBaby()} and {@link Ageable#setAdult()}
                 */
                // @ts-ignore
                setBaby(flag: boolean): void
            }
        }
    }
}
