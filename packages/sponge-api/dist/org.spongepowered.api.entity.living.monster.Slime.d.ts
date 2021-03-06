declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace monster {
                        /**
                         * Represents a Slime.
                         */
                        // @ts-ignore
                        interface Slime extends org.spongepowered.api.entity.living.monster.Monster {
                            /**
                             * Gets a copy of the current {@link SlimeData} for this {@link Slime}.
                             * @return A copy of the current slime data
                             */
                            // @ts-ignore
                            getSlimeData(): org.spongepowered.api.data.manipulator.mutable.entity.SlimeData
                            /**
                             * Gets the {@link MutableBoundedValue value} of this
                             * {@link Slime slime's} current size.
                             * @return The mutable bounded value for the current slime size
                             */
                            // @ts-ignore
                            slimeSize(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                        }
                    }
                }
            }
        }
    }
}
