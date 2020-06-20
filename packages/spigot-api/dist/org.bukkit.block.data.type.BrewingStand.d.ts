declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * Interface to the 'has_bottle_0', 'has_bottle_1', 'has_bottle_2' flags on a
                     * brewing stand which indicate which bottles are rendered on the outside.
                     * <br>
                     * Stand may have 0, 1... {@link #getMaximumBottles()}-1 bottles.
                     */
                    // @ts-ignore
                    interface BrewingStand extends org.bukkit.block.data.BlockData {
                        /**
                         * Checks if the stand has the following bottle
                         * @param bottle to check
                         * @return if bottle is present
                         */
                        // @ts-ignore
                        hasBottle(bottle: number /*int*/): boolean
                        /**
                         * Set whether the stand has this bottle present.
                         * @param bottle to set
                         * @param has bottle
                         */
                        // @ts-ignore
                        setBottle(bottle: number /*int*/, has: boolean): void
                        /**
                         * Get the indexes of all the bottles present on this block.
                         * @return set of all bottles
                         */
                        // @ts-ignore
                        getBottles(): java.util.Set<java.lang.Integer>
                        /**
                         * Get the maximum amount of bottles present on this stand.
                         * @return maximum bottle count
                         */
                        // @ts-ignore
                        getMaximumBottles(): int
                    }
                }
            }
        }
    }
}
