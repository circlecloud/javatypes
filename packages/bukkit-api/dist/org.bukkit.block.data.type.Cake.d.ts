declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'bites' represents the amount of bites which have been taken from this slice
                     * of cake.
                     * <br>
                     * A value of 0 indicates that the cake has not been eaten, whilst a value of
                     * {@link #getMaximumBites()} indicates that it is all gone :(
                     */
                    // @ts-ignore
                    interface Cake extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'bites' property.
                         * @return the 'bites' value
                         */
                        // @ts-ignore
                        getBites(): number /*int*/
                        /**
                         * Sets the value of the 'bites' property.
                         * @param bites the new 'bites' value
                         */
                        // @ts-ignore
                        setBites(bites: number /*int*/): void
                        /**
                         * Gets the maximum allowed value of the 'bites' property.
                         * @return the maximum 'bites' value
                         */
                        // @ts-ignore
                        getMaximumBites(): number /*int*/
                    }
                }
            }
        }
    }
}
