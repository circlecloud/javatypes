declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace statistic {
                    /**
                     * Represents an event that is triggered if a {@link Statistic}'s value is being
                     * modified.
                     */
                    // @ts-ignore
                    interface ChangeStatisticEvent extends org.spongepowered.api.event.Event, org.spongepowered.api.event.Cancellable {
                        /**
                         * Gets the {@link Statistic}.
                         * @return The statistic
                         */
                        // @ts-ignore
                        getStatistic(): org.spongepowered.api.statistic.Statistic
                        /**
                         * Gets the original value of the statistic.
                         * @return The original value
                         */
                        // @ts-ignore
                        getOriginalValue(): number /*long*/
                        /**
                         * Gets the new value of the statistic.
                         * @return The new value
                         */
                        // @ts-ignore
                        getValue(): number /*long*/
                        /**
                         * Sets the new value of the statistic to the given value.
                         * @param value The new value
                         */
                        // @ts-ignore
                        setValue(value: number /*long*/): void
                    }
                }
            }
        }
    }
}
