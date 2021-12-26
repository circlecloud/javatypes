declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'shape' represents the texture and bounding box shape of these stairs.
                     */
                    // @ts-ignore
                    interface Stairs extends org.bukkit.block.data.Bisected, org.bukkit.block.data.Directional, org.bukkit.block.data.Waterlogged {
                        /**
                         * Gets the value of the 'shape' property.
                         * @return the 'shape' value
                         */
                        // @ts-ignore
                        getShape(): org.bukkit.block.data.type.Stairs.Shape
                        /**
                         * Sets the value of the 'shape' property.
                         * @param shape the new 'shape' value
                         */
                        // @ts-ignore
                        setShape(shape: org.bukkit.block.data.type.Stairs.Shape): void
                    }
                }
            }
        }
    }
}
