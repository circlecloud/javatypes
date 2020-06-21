declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'stage' represents the growth stage of a sapling.
                     * <br>
                     * When the sapling reaches {@link #getMaximumStage()} it will attempt to grow
                     * into a tree as the next stage.
                     */
                    // @ts-ignore
                    interface Sapling extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'stage' property.
                         * @return the 'stage' value
                         */
                        // @ts-ignore
                        getStage(): number /*int*/
                        /**
                         * Sets the value of the 'stage' property.
                         * @param stage the new 'stage' value
                         */
                        // @ts-ignore
                        setStage(stage: number /*int*/): void
                        /**
                         * Gets the maximum allowed value of the 'stage' property.
                         * @return the maximum 'stage' value
                         */
                        // @ts-ignore
                        getMaximumStage(): number /*int*/
                    }
                }
            }
        }
    }
}
