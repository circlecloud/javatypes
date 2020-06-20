declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'facing' represents the face towards which the block is pointing.
                 * <br>
                 * Some blocks may not be able to face in all directions, use
                 * {@link #getFaces()} to get all possible directions for this block.
                 */
                // @ts-ignore
                interface Directional extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'facing' property.
                     * @return the 'facing' value
                     */
                    // @ts-ignore
                    getFacing(): org.bukkit.block.BlockFace
                    /**
                     * Sets the value of the 'facing' property.
                     * @param facing the new 'facing' value
                     */
                    // @ts-ignore
                    setFacing(facing: org.bukkit.block.BlockFace): void
                    /**
                     * Gets the faces which are applicable to this block.
                     * @return the allowed 'facing' values
                     */
                    // @ts-ignore
                    getFaces(): java.util.Set<org.bukkit.block.BlockFace>
                }
            }
        }
    }
}
