declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'hatch' is the number of turtles which may hatch from these eggs.
                     * <br>
                     * 'eggs' is the number of eggs which appear in this block.
                     */
                    // @ts-ignore
                    interface TurtleEgg extends org.bukkit.block.data.BlockData {
                        /**
                         * Gets the value of the 'eggs' property.
                         * @return the 'eggs' value
                         */
                        // @ts-ignore
                        getEggs(): number /*int*/
                        /**
                         * Sets the value of the 'eggs' property.
                         * @param eggs the new 'eggs' value
                         */
                        // @ts-ignore
                        setEggs(eggs: number /*int*/): void
                        /**
                         * Gets the minimum allowed value of the 'eggs' property.
                         * @return the minimum 'eggs' value
                         */
                        // @ts-ignore
                        getMinimumEggs(): number /*int*/
                        /**
                         * Gets the maximum allowed value of the 'eggs' property.
                         * @return the maximum 'eggs' value
                         */
                        // @ts-ignore
                        getMaximumEggs(): number /*int*/
                        /**
                         * Gets the value of the 'hatch' property.
                         * @return the 'hatch' value
                         */
                        // @ts-ignore
                        getHatch(): number /*int*/
                        /**
                         * Sets the value of the 'hatch' property.
                         * @param hatch the new 'hatch' value
                         */
                        // @ts-ignore
                        setHatch(hatch: number /*int*/): void
                        /**
                         * Gets the maximum allowed value of the 'hatch' property.
                         * @return the maximum 'hatch' value
                         */
                        // @ts-ignore
                        getMaximumHatch(): number /*int*/
                    }
                }
            }
        }
    }
}
