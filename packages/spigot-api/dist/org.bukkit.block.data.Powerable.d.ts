declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'powered' indicates whether this block is in the powered state or not, i.e.
                 * receiving a redstone current of power &gt; 0.
                 */
                // @ts-ignore
                interface Powerable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'powered' property.
                     * @return the 'powered' value
                     */
                    // @ts-ignore
                    isPowered(): boolean
                    /**
                     * Sets the value of the 'powered' property.
                     * @param powered the new 'powered' value
                     */
                    // @ts-ignore
                    setPowered(powered: boolean): void
                }
            }
        }
    }
}
