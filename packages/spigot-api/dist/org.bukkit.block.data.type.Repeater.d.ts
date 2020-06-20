declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                namespace type {
                    /**
                     * 'delay' is the propagation delay of a repeater, i.e. how many ticks before it
                     * will be activated from a current change and propagate it to the next block.
                     * <br>
                     * Delay may not be lower than {@link #getMinimumDelay()} or higher than
                     * {@link #getMaximumDelay()}.
                     * <br>
                     * 'locked' denotes whether the repeater is in the locked state or not.
                     * <br>
                     * A locked repeater will not change its output until it is unlocked. In game, a
                     * locked repeater is created by having a constant current perpendicularly
                     * entering the block.
                     */
                    // @ts-ignore
                    interface Repeater extends org.bukkit.block.data.Directional, org.bukkit.block.data.Powerable {
                        /**
                         * Gets the value of the 'delay' property.
                         * @return the 'delay' value
                         */
                        // @ts-ignore
                        getDelay(): int
                        /**
                         * Sets the value of the 'delay' property.
                         * @param delay the new 'delay' value
                         */
                        // @ts-ignore
                        setDelay(delay: number /*int*/): void
                        /**
                         * Gets the minimum allowed value of the 'delay' property.
                         * @return the minimum 'delay' value
                         */
                        // @ts-ignore
                        getMinimumDelay(): int
                        /**
                         * Gets the maximum allowed value of the 'delay' property.
                         * @return the maximum 'delay' value
                         */
                        // @ts-ignore
                        getMaximumDelay(): int
                        /**
                         * Gets the value of the 'locked' property.
                         * @return the 'locked' value
                         */
                        // @ts-ignore
                        isLocked(): boolean
                        /**
                         * Sets the value of the 'locked' property.
                         * @param locked the new 'locked' value
                         */
                        // @ts-ignore
                        setLocked(locked: boolean): void
                    }
                }
            }
        }
    }
}
