declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        /**
                         * Represents a rabbit.
                         */
                        // @ts-ignore
                        interface Rabbit extends org.spongepowered.api.entity.living.animal.Animal {
                            /**
                             * Gets a copy of the {@link RabbitData} representing the specific data for
                             * this {@link Rabbit}.
                             * @return A copy of the rabbit data
                             */
                            // @ts-ignore
                            getRabbitData(): org.spongepowered.api.data.manipulator.mutable.entity.RabbitData
                            /**
                             * Gets the {@link Value} for the {@link RabbitType} of this {@link Rabbit}.
                             * @return The rabbit type for this rabit
                             */
                            // @ts-ignore
                            variant(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.RabbitType>
                        }
                    }
                }
            }
        }
    }
}
