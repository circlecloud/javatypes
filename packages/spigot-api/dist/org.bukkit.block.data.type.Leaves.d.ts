declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'persistent' indicates whether or not leaves will be checked by the server to
                     * see if they are subject to decay or not.
                     * <br>
                     * 'distance' denotes how far the block is from a tree and is used in
                     * conjunction with 'persistent' flag to determine if the leaves will decay or
                     * not.
                     */
                    // @ts-ignore
                    interface Leaves extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'persistent' property.
                         * @return the persistent value
                         */
                        // @ts-ignore
                        isPersistent(): boolean
                        /**
                         * Sets the value of the 'persistent' property.
                         * @param persistent the new 'persistent' value
                         */
                        // @ts-ignore
                        setPersistent(persistent: boolean): void
                        /**
                         * Gets the value of the 'distance' property.
                         * @return the 'distance' value
                         */
                        // @ts-ignore
                        getDistance(): int
                        /**
                         * Sets the value of the 'distance' property.
                         * @param distance the new 'distance' value
                         */
                        // @ts-ignore
                        setDistance(distance: number /*int*/): void
                    }
                }
            }
        }
    }
}