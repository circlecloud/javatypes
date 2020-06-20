declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        /**
                         * Represents a Wolf.
                         */
                        // @ts-ignore
                        interface Wolf extends org.spongepowered.api.entity.living.animal.Animal {
                            /**
                             * Gets a copy of the current {@link AggressiveData} for this
                             * {@link Wolf}.
                             * @return A copy of the current aggressive data
                             */
                            // @ts-ignore
                            getAggressiveData(): org.spongepowered.api.data.manipulator.mutable.entity.AggressiveData
                            /**
                             * Gets if this {@link Wolf} is currently aggressive, as a {@link Value}.
                             * @return The current aggressive value
                             */
                            // @ts-ignore
                            aggressive(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            /**
                             * Gets a copy of the current {@link DyeableData} for this
                             * {@link Wolf}'s collar.
                             * @return A copy of the current dyeable collar data
                             */
                            // @ts-ignore
                            getCollarColorData(): org.spongepowered.api.data.manipulator.mutable.DyeableData
                            /**
                             * Gets the {@link Wolf}'s {@link DyeColor} of it's collar.
                             * @return The current dyecolor of the collar
                             */
                            // @ts-ignore
                            collarColor(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.DyeColor>
                        }
                    }
                }
            }
        }
    }
}
