declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * Represents information about a {@link FusedExplosive}'s fuse.
                             */
                            // @ts-ignore
                            interface FuseData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.FuseData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableFuseData> {
                                /**
                                 * The amount of ticks before the {@link FusedExplosive} detonates when
                                 * primed.
                                 * @return Amount of ticks before detonation when primed
                                 * @see Keys#FUSE_DURATION
                                 */
                                // @ts-ignore
                                fuseDuration(): org.spongepowered.api.data.value.mutable.Value<java.lang.Integer>
                                /**
                                 * The amount of ticks before {@link FusedExplosive} detonates. Setting
                                 * this value has no effect if the explosive is not currently
                                 * primed and is set to an arbitrary value that differs from explosive to
                                 * explosive when not-primed. Therefore, this value should be ignored when
                                 * the explosive is not primed. Instead, set the fuse duration of the
                                 * explosive which is the value used to initialize this value when the
                                 * explosive is primed.
                                 * @return Amount of ticks before impending detonation
                                 * @see Keys#TICKS_REMAINING
                                 */
                                // @ts-ignore
                                ticksRemaining(): org.spongepowered.api.data.value.mutable.Value<java.lang.Integer>
                            }
                        }
                    }
                }
            }
        }
    }
}
