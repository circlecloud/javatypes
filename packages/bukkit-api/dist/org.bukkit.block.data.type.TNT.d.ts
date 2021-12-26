declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'unstable' indicates whether this TNT will explode on punching.
                     */
                    // @ts-ignore
                    interface TNT extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'unstable' property.
                         * @return the 'unstable' value
                         */
                        // @ts-ignore
                        isUnstable(): boolean
                        /**
                         * Sets the value of the 'unstable' property.
                         * @param unstable the new 'unstable' value
                         */
                        // @ts-ignore
                        setUnstable(unstable: boolean): void
                    }
                }
            }
        }
    }
}
