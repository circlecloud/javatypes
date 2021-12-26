declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'lit' denotes whether this block (either a redstone torch or furnace) is
                 * currently lit - that is not burned out.
                 */
                // @ts-ignore
                interface Lightable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'lit' property.
                     * @return the 'lit' value
                     */
                    // @ts-ignore
                    isLit(): boolean
                    /**
                     * Sets the value of the 'lit' property.
                     * @param lit the new 'lit' value
                     */
                    // @ts-ignore
                    setLit(lit: boolean): void
                }
            }
        }
    }
}
