declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'bottom' indicates whether the scaffolding is floating or not.
                     * <br>
                     * 'distance' indicates the distance from a scaffolding block placed above a
                     * 'bottom' scaffold.
                     * <br>
                     * When 'distance' reaches {@link #getMaximumDistance()} the block will drop.
                     */
                    // @ts-ignore
                    interface Scaffolding extends org.bukkit.block.data.Waterlogged {
                        /**
                         * Gets the value of the 'bottom' property.
                         * @return the 'bottom' value
                         */
                        // @ts-ignore
                        isBottom(): boolean
                        /**
                         * Sets the value of the 'bottom' property.
                         * @param bottom the new 'bottom' value
                         */
                        // @ts-ignore
                        setBottom(bottom: boolean): void
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
                        /**
                         * Gets the maximum allowed value of the 'distance' property.
                         * @return the maximum 'distance' value
                         */
                        // @ts-ignore
                        getMaximumDistance(): int
                    }
                }
            }
        }
    }
}
