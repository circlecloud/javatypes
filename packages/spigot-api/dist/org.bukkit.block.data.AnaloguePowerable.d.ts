declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'power' represents the redstone power level currently being emitted or
                 * transmitted via this block.
                 * <br>
                 * May not be over 9000 or {@link #getMaximumPower()} (usually 15).
                 */
                // @ts-ignore
                interface AnaloguePowerable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'power' property.
                     * @return the 'power' value
                     */
                    // @ts-ignore
                    getPower(): number /*int*/
                    /**
                     * Sets the value of the 'power' property.
                     * @param power the new 'power' value
                     */
                    // @ts-ignore
                    setPower(power: number /*int*/): void
                    /**
                     * Gets the maximum allowed value of the 'power' property.
                     * @return the maximum 'power' value
                     */
                    // @ts-ignore
                    getMaximumPower(): number /*int*/
                }
            }
        }
    }
}
