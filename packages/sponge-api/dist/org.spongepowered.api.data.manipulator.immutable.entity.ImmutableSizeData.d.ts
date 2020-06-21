declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} for the bounding box of an
                             * {@link Entity}. Usually the bounding box is not modifiable, but the base,
                             * height, and "scale" is always known. The bounding box is axis aligned.
                             */
                            // @ts-ignore
                            interface ImmutableSizeData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSizeData, org.spongepowered.api.data.manipulator.mutable.entity.SizeData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "base" size.
                                 * @return The immutable value for the base
                                 */
                                // @ts-ignore
                                base(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Float | number>
                                /**
                                 * Gets the {@link ImmutableValue} for the "height" size.
                                 * @return The immutable value for the height
                                 */
                                // @ts-ignore
                                height(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Float | number>
                                /**
                                 * Gets the {@link ImmutableValue} for the "scale" size.
                                 * @return The immutable value for the scale
                                 */
                                // @ts-ignore
                                scale(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Float | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
