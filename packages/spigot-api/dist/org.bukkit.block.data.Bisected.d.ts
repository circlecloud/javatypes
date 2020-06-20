declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'half' denotes which half of a two block tall material this block is.
                 * <br>
                 * In game it may be referred to as either (top, bottom) or (upper, lower).
                 */
                // @ts-ignore
                interface Bisected extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'half' property.
                     * @return the 'half' value
                     */
                    // @ts-ignore
                    getHalf(): org.bukkit.block.data.Bisected.Half
                    /**
                     * Sets the value of the 'half' property.
                     * @param half the new 'half' value
                     */
                    // @ts-ignore
                    setHalf(half: org.bukkit.block.data.Bisected.Half): void
                }
            }
        }
    }
}
