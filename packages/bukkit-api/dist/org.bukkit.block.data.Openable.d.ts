declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'open' denotes whether this door-like block is currently opened.
                 */
                // @ts-ignore
                interface Openable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'open' property.
                     * @return the 'open' value
                     */
                    // @ts-ignore
                    isOpen(): boolean
                    /**
                     * Sets the value of the 'open' property.
                     * @param open the new 'open' value
                     */
                    // @ts-ignore
                    setOpen(open: boolean): void
                }
            }
        }
    }
}
