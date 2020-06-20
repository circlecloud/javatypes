declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace monster {
                        /**
                         * Represents an endermite.
                         */
                        // @ts-ignore
                        interface Endermite extends org.spongepowered.api.entity.living.monster.Monster {
                            /**
                             * Gets a copy of the {@link ExpirableData} for this endermite.
                             * @return A copy of the expirable data
                             */
                            // @ts-ignore
                            getExpirableData(): org.spongepowered.api.data.manipulator.mutable.entity.ExpirableData
                            /**
                             * Gets the {@link MutableBoundedValue} for the amount of "ticks"
                             * remaining before the "expiration" occurs.
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
}
