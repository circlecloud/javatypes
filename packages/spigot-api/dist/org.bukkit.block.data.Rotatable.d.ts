declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'rotation' represents the current rotation of this block.
                 */
                // @ts-ignore
                interface Rotatable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'rotation' property.
                     * @return the 'rotation' value
                     */
                    // @ts-ignore
                    getRotation(): org.bukkit.block.BlockFace
                    /**
                     * Sets the value of the 'rotation' property.
                     * @param rotation the new 'rotation' value
                     */
                    // @ts-ignore
                    setRotation(rotation: org.bukkit.block.BlockFace): void
                }
            }
        }
    }
}
