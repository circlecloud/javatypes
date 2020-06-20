declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'age' represents the different growth stages that a crop-like block can go
                 * through.
                 * <br>
                 * A value of 0 indicates that the crop was freshly planted, whilst a value
                 * equal to {@link #getMaximumAge()} indicates that the crop is ripe and ready
                 * to be harvested.
                 */
                // @ts-ignore
                interface Ageable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'age' property.
                     * @return the 'age' value
                     */
                    // @ts-ignore
                    getAge(): int
                    /**
                     * Sets the value of the 'age' property.
                     * @param age the new 'age' value
                     */
                    // @ts-ignore
                    setAge(age: number /*int*/): void
                    /**
                     * Gets the maximum allowed value of the 'age' property.
                     * @return the maximum 'age' value
                     */
                    // @ts-ignore
                    getMaximumAge(): int
                }
            }
        }
    }
}
