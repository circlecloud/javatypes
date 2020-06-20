declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * The 'moisture' level of farmland indicates how close it is to a water source
                     * (if any).
                     * <br>
                     * A higher moisture level leads, to faster growth of crops on this block, but
                     * cannot be higher than {@link #getMaximumMoisture()}.
                     */
                    // @ts-ignore
                    interface Farmland extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'moisture' property.
                         * @return the 'moisture' value
                         */
                        // @ts-ignore
                        getMoisture(): int
                        /**
                         * Sets the value of the 'moisture' property.
                         * @param moisture the new 'moisture' value
                         */
                        // @ts-ignore
                        setMoisture(moisture: number /*int*/): void
                        /**
                         * Gets the maximum allowed value of the 'moisture' property.
                         * @return the maximum 'moisture' value
                         */
                        // @ts-ignore
                        getMaximumMoisture(): int
                    }
                }
            }
        }
    }
}
