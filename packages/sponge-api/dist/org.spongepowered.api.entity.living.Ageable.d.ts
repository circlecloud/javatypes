declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    /**
                     * Represents a living entity that can change in size as it ages
                     * and can spawn children.
                     */
                    // @ts-ignore
                    interface Ageable extends org.spongepowered.api.entity.living.Creature {
                        /**
                         * Sets the scaling to be 1 if this entity is an adult and 0.5 if it is
                         * a baby.
                         */
                        // @ts-ignore
                        setScaleForAge(): void
                        /**
                         * Gets the {@link AgeableData} that represents age determining whether an
                         * {@link Entity} is a child or an adult.
                         * @return The ageable data
                         */
                        // @ts-ignore
                        getAgeData(): org.spongepowered.api.data.manipulator.mutable.entity.AgeableData
                        /**
                         * Gets the {@link MutableBoundedValue} for the "age" state.
                         * @return The mutable bounded value for the "age"
                         */
                        // @ts-ignore
                        age(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                        /**
                         * Gets the {@link Value} for the "adult" state.
                         * @return The value for the "adult" state
                         */
                        // @ts-ignore
                        adult(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                    }
                }
            }
        }
    }
}
