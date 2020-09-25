declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'charges' represents the amount of times the anchor may still be used.
                     */
                    // @ts-ignore
                    interface RespawnAnchor extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'charges' property.
                         * @return the 'charges' value
                         */
                        // @ts-ignore
                        getCharges(): number /*int*/
                        /**
                         * Sets the value of the 'charges' property.
                         * @param charges the new 'charges' value
                         */
                        // @ts-ignore
                        setCharges(charges: number /*int*/): void
                        /**
                         * Gets the maximum allowed value of the 'charges' property.
                         * @return the maximum 'charges' value
                         */
                        // @ts-ignore
                        getMaximumCharges(): number /*int*/
                    }
                }
            }
        }
    }
}
