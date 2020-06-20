declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'axis' represents the axis along whilst this block is oriented.
                 * <br>
                 * Some blocks such as the portal block may not be able to be placed in all
                 * orientations, use {@link #getAxes()} to retrieve all possible such
                 * orientations.
                 */
                // @ts-ignore
                interface Orientable extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'axis' property.
                     * @return the 'axis' value
                     */
                    // @ts-ignore
                    getAxis(): org.bukkit.Axis
                    /**
                     * Sets the value of the 'axis' property.
                     * @param axis the new 'axis' value
                     */
                    // @ts-ignore
                    setAxis(axis: org.bukkit.Axis): void
                    /**
                     * Gets the axes which are applicable to this block.
                     * @return the allowed 'axis' values
                     */
                    // @ts-ignore
                    getAxes(): java.util.Set<org.bukkit.Axis>
                }
            }
        }
    }
}
