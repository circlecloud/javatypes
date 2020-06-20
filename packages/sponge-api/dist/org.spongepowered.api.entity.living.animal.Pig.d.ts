declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        /**
                         * Represents a Pig.
                         */
                        // @ts-ignore
                        interface Pig extends org.spongepowered.api.entity.living.animal.Animal {
                            /**
                             * Gets the {@link PigSaddleData} for this {@link Pig}.
                             * @return The pig saddle data
                             */
                            // @ts-ignore
                            getPigSaddleData(): org.spongepowered.api.data.manipulator.mutable.entity.PigSaddleData
                            /**
                             * Gets the {@link Value} for whether this {@link Pig} is saddled.
                             * @return The value whether this pig is saddled
                             */
                            // @ts-ignore
                            saddled(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                        }
                    }
                }
            }
        }
    }
}
