declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace tileentity {
                            /**
                             * An {@link DataManipulator} handling the various information for a
                             * {@link Banner} including the {@link PatternLayer}s that customize the
                             * {@link Banner}.
                             */
                            // @ts-ignore
                            interface BannerData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.tileentity.BannerData, org.spongepowered.api.data.manipulator.immutable.tileentity.ImmutableBannerData> {
                                /**
                                 * Gets the {@link Value} for the base {@link DyeColor}.
                                 * @return The value for the base color
                                 * @see Keys#BANNER_BASE_COLOR
                                 */
                                // @ts-ignore
                                baseColor(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.DyeColor>
                                /**
                                 * Gets the {@link PatternListValue} of all patterns for the
                                 * {@link Banner}.
                                 * @return The pattern list
                                 * @see Keys#BANNER_PATTERNS
                                 */
                                // @ts-ignore
                                patternsList(): org.spongepowered.api.data.value.mutable.PatternListValue
                            }
                        }
                    }
                }
            }
        }
    }
}
