declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace weather {
                    /**
                     * Represents weather, such as {@link Lightning}.
                     */
                    // @ts-ignore
                    interface WeatherEffect extends org.spongepowered.api.entity.Entity {
                        /**
                         * Returns whether this weather effect is an effect and doesn't deal damage.
                         * @return Whether this weather effect is an effect
                         */
                        // @ts-ignore
                        isEffect(): boolean
                        /**
                         * Sets whether this weather effect is an effect and doesn't deal damage.
                         * @param effect Whether this weather effect is an effect
                         */
                        // @ts-ignore
                        setEffect(effect: boolean): void
                        /**
                         * Gets a copy of the {@link ExpirableData} for this weather entity.
                         * @return A copy of the expirable data
                         */
                        // @ts-ignore
                        getExpiringData(): org.spongepowered.api.data.manipulator.mutable.entity.ExpirableData
                        /**
                         * Gets the {@link MutableBoundedValue} for the amount of "ticks" remaining
                         * before the "expiration" occurs.
                         * @return The immutable bounded value for the amount of ticks remaining
                         */
                        // @ts-ignore
                        expireTicks(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                    }
                }
            }
        }
    }
}
