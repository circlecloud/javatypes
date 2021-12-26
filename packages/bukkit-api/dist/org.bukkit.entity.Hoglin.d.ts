declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a Hoglin.
             */
            // @ts-ignore
            interface Hoglin extends org.bukkit.entity.Animals {
                /**
                 * Gets whether the hoglin is immune to zombification.
                 * @return Whether the hoglin is immune to zombification
                 */
                // @ts-ignore
                isImmuneToZombification(): boolean
                /**
                 * Sets whether the hoglin is immune to zombification.
                 * @param flag Whether the hoglin is immune to zombification
                 */
                // @ts-ignore
                setImmuneToZombification(flag: boolean): void
                /**
                 * Get whether the hoglin is able to be hunted by piglins.
                 * @return Whether the hoglin is able to be hunted by piglins
                 */
                // @ts-ignore
                isAbleToBeHunted(): boolean
                /**
                 * Sets whether the hoglin is able to be hunted by piglins.
                 * @param flag Whether the hoglin is able to be hunted by piglins.
                 */
                // @ts-ignore
                setIsAbleToBeHunted(flag: boolean): void
                /**
                 * Gets the amount of ticks until this entity will be converted to a Zoglin.
                 * When this reaches 300, the entity will be converted.
                 * @return conversion time
                 * @throws IllegalStateException if {#link #isConverting()} is false.
                 */
                // @ts-ignore
                getConversionTime(): number /*int*/
                /**
                 * Sets the amount of ticks until this entity will be converted to a Zoglin.
                 * When this reaches 0, the entity will be converted. A value of less than 0
                 * will stop the current conversion process without converting the current
                 * entity.
                 * @param time new conversion time
                 */
                // @ts-ignore
                setConversionTime(time: number /*int*/): void
                /**
                 * Get if this entity is in the process of converting to a Zoglin.
                 * @return conversion status
                 */
                // @ts-ignore
                isConverting(): boolean
            }
        }
    }
}
