declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * Represents information about a {@link FusedExplosive}'s fuse.
                             */
                            // @ts-ignore
                            interface ImmutableFuseData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableFuseData, org.spongepowered.api.data.manipulator.mutable.entity.FuseData> {
                                /**
                                 * The amount of ticks before the {@link FusedExplosive} detonates when
                                 * primed.
                                 * @return Amount of ticks before detonation when primed
                                 */
                                // @ts-ignore
                                fuseDuration(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Integer | number>
                                /**
                                 * The amount of ticks before {@link FusedExplosive} detonates. This value
                                 * may be zero if the {@link FusedExplosive} is not currently primed nor
                                 * will setting this value have any effect if the {@link FusedExplosive} is
                                 * not primed.
                                 * @return Amount of ticks before impending detonation
                                 */
                                // @ts-ignore
                                ticksRemaining(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
