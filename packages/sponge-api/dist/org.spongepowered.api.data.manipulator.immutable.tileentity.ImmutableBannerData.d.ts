declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace tileentity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the various information for a
                             * {@link Banner} including the {@link PatternLayer}s that customize the
                             * {@link Banner}.
                             */
                            // @ts-ignore
                            interface ImmutableBannerData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableBannerData, org.spongepowered.api.data.manipulator.mutable.tileentity.BannerData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the base {@link DyeColor}.
                                 * @return The immutable value for the base color
                                 */
                                // @ts-ignore
                                baseColor(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.data.type.DyeColor>
                                /**
                                 * Gets the {@link ImmutablePatternListValue} of all patterns for the
                                 * {@link Banner}.
                                 * @return The immutable pattern list
                                 */
                                // @ts-ignore
                                patterns(): org.spongepowered.api.data.value.immutable.ImmutablePatternListValue
                            }
                        }
                    }
                }
            }
        }
    }
}
