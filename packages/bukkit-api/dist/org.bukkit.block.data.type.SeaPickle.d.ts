declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'pickles' indicates the number of pickles in this block.
                     */
                    // @ts-ignore
                    interface SeaPickle extends org.bukkit.block.data.Waterlogged {
                        /**
                         * Gets the value of the 'pickles' property.
                         * @return the 'pickles' value
                         */
                        // @ts-ignore
                        getPickles(): number /*int*/
                        /**
                         * Sets the value of the 'pickles' property.
                         * @param pickles the new 'pickles' value
                         */
                        // @ts-ignore
                        setPickles(pickles: number /*int*/): void
                        /**
                         * Gets the minimum allowed value of the 'pickles' property.
                         * @return the minimum 'pickles' value
                         */
                        // @ts-ignore
                        getMinimumPickles(): number /*int*/
                        /**
                         * Gets the maximum allowed value of the 'pickles' property.
                         * @return the maximum 'pickles' value
                         */
                        // @ts-ignore
                        getMaximumPickles(): number /*int*/
                    }
                }
            }
        }
    }
}
