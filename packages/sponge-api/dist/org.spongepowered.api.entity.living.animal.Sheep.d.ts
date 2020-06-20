declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        /**
                         * Represents a Sheep.
                         */
                        // @ts-ignore
                        interface Sheep extends org.spongepowered.api.entity.living.animal.Animal {
                            /**
                             * Gets a copy of the {@link DyeableData} representing the color of this
                             * {@link Sheep} entity.
                             * @return A copy of the dye data
                             */
                            // @ts-ignore
                            getDyeData(): org.spongepowered.api.data.manipulator.mutable.DyeableData
                            /**
                             * Gets the current {@link Value} of {@link DyeColor} for this
                             * {@link Sheep}.
                             * @return The current value of dye color for this sheep
                             */
                            // @ts-ignore
                            color(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.DyeColor>
                        }
                    }
                }
            }
        }
    }
}
