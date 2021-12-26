declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'hanging' denotes whether the lantern is hanging from a block.
                     */
                    // @ts-ignore
                    interface Lantern extends org.bukkit.block.data.Waterlogged {
                        /**
                         * Gets the value of the 'hanging' property.
                         * @return the 'hanging' value
                         */
                        // @ts-ignore
                        isHanging(): boolean
                        /**
                         * Sets the value of the 'hanging' property.
                         * @param hanging the new 'hanging' value
                         */
                        // @ts-ignore
                        setHanging(hanging: boolean): void
                    }
                }
            }
        }
    }
}
