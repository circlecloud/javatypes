declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'has_record' is a quick flag to check whether this jukebox has a record
                     * inside it.
                     */
                    // @ts-ignore
                    interface Jukebox extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'has_record' property.
                         * @return the 'has_record' value
                         */
                        // @ts-ignore
                        hasRecord(): boolean
                    }
                }
            }
        }
    }
}
