declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * 'shape' represents the current layout of a minecart rail.
                 * <br>
                 * Some types of rail may not be able to be laid out in all shapes, use
                 * {@link #getShapes()} to get those applicable to this block.
                 */
                // @ts-ignore
                interface Rail extends org.bukkit.block.data.BlockData {
                    /**
                     * Gets the value of the 'shape' property.
                     * @return the 'shape' value
                     */
                    // @ts-ignore
                    getShape(): org.bukkit.block.data.Rail.Shape
                    /**
                     * Sets the value of the 'shape' property.
                     * @param shape the new 'shape' value
                     */
                    // @ts-ignore
                    setShape(shape: org.bukkit.block.data.Rail.Shape): void
                    /**
                     * Gets the shapes which are applicable to this block.
                     * @return the allowed 'shape' values
                     */
                    // @ts-ignore
                    getShapes(): java.util.Set<org.bukkit.block.data.Rail.Shape>
                }
            }
        }
    }
}
