declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'type' represents what state the slab is in - either top, bottom, or a double
                     * slab occupying the full block.
                     */
                    // @ts-ignore
                    interface Slab extends org.bukkit.block.data.Waterlogged {
                        /**
                         * Gets the value of the 'type' property.
                         * @return the 'type' value
                         */
                        // @ts-ignore
                        getType(): org.bukkit.block.data.type.Slab.Type
                        /**
                         * Sets the value of the 'type' property.
                         * @param type the new 'type' value
                         */
                        // @ts-ignore
                        setType(type: org.bukkit.block.data.type.Slab.Type): void
                    }
                }
            }
        }
    }
}
