declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'snowy' denotes whether this block has a snow covered side and top texture
                 * (normally because the block above is snow).
                 */
                // @ts-ignore
                interface Snowable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'snowy' property.
                     * @return the 'snowy' value
                     */
                    // @ts-ignore
                    isSnowy(): boolean
                    /**
                     * Sets the value of the 'snowy' property.
                     * @param snowy the new 'snowy' value
                     */
                    // @ts-ignore
                    setSnowy(snowy: boolean): void
                }
            }
        }
    }
}
