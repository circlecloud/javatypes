declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'layers' represents the amount of layers of snow which are present in this
                     * block.
                     * <br>
                     * May not be lower than {@link #getMinimumLayers()} or higher than
                     * {@link #getMaximumLayers()}.
                     */
                    // @ts-ignore
                    interface Snow extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'layers' property.
                         * @return the 'layers' value
                         */
                        // @ts-ignore
                        getLayers(): number /*int*/
                        /**
                         * Sets the value of the 'layers' property.
                         * @param layers the new 'layers' value
                         */
                        // @ts-ignore
                        setLayers(layers: number /*int*/): void
                        /**
                         * Gets the minimum allowed value of the 'layers' property.
                         * @return the minimum 'layers' value
                         */
                        // @ts-ignore
                        getMinimumLayers(): number /*int*/
                        /**
                         * Gets the maximum allowed value of the 'layers' property.
                         * @return the maximum 'layers' value
                         */
                        // @ts-ignore
                        getMaximumLayers(): number /*int*/
                    }
                }
            }
        }
    }
}
