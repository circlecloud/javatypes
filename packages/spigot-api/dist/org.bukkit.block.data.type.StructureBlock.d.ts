declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'mode' represents the different modes in which this structure block may
                     * operate.
                     */
                    // @ts-ignore
                    interface StructureBlock extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'mode' property.
                         * @return the 'mode' value
                         */
                        // @ts-ignore
                        getMode(): org.bukkit.block.data.type.StructureBlock.Mode
                        /**
                         * Sets the value of the 'mode' property.
                         * @param mode the new 'mode' value
                         */
                        // @ts-ignore
                        setMode(mode: org.bukkit.block.data.type.StructureBlock.Mode): void
                    }
                }
            }
        }
    }
}
