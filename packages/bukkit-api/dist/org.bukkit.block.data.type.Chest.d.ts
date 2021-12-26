declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'type' represents which part of a double chest this block is, or if it is a
                     * single chest.
                     */
                    // @ts-ignore
                    interface Chest extends org.bukkit.block.data.Directional, org.bukkit.block.data.Waterlogged {
                        /**
                         * Gets the value of the 'type' property.
                         * @return the 'type' value
                         */
                        // @ts-ignore
                        getType(): org.bukkit.block.data.type.Chest.Type
                        /**
                         * Sets the value of the 'type' property.
                         * @param type the new 'type' value
                         */
                        // @ts-ignore
                        setType(type: org.bukkit.block.data.type.Chest.Type): void
                    }
                }
            }
        }
    }
}
