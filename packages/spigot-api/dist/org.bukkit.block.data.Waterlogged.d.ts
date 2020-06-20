declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'waterlogged' denotes whether this block has fluid in it.
                 */
                // @ts-ignore
                interface Waterlogged extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'waterlogged' property.
                     * @return the 'waterlogged' value
                     */
                    // @ts-ignore
                    isWaterlogged(): boolean
                    /**
                     * Sets the value of the 'waterlogged' property.
                     * @param waterlogged the new 'waterlogged' value
                     */
                    // @ts-ignore
                    setWaterlogged(waterlogged: boolean): void
                }
            }
        }
    }
}
