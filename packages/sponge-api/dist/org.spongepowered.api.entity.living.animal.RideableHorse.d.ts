declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        /**
                         * Represents a RideableHorse.
                         */
                        // @ts-ignore
                        interface RideableHorse extends org.spongepowered.api.entity.living.animal.Horse {
                            /**
                             * Gets a copy of the {@link HorseData} representing this {@link RideableHorse}.
                             * @return A copy of the horse data
                             */
                            // @ts-ignore
                            getHorseData(): org.spongepowered.api.data.manipulator.mutable.entity.HorseData
                            /**
                             * Gets the style of the horse.
                             * @return The value of the horse's style
                             */
                            // @ts-ignore
                            style(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.HorseStyle>
                            /**
                             * Gets the color of the horse.
                             * @return The value of the horse's color
                             */
                            // @ts-ignore
                            color(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.HorseColor>
                        }
                    }
                }
            }
        }
    }
}
