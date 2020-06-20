declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * A {@link ImmutableDataManipulator} for the "silent" state of an {@link Entity}.
                             * <p>In Vanilla, this prevents an {@link Entity} from playing any sounds
                             * (or making any noise).</p>
                             */
                            // @ts-ignore
                            interface ImmutableSilentData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSilentData, org.spongepowered.api.data.manipulator.mutable.entity.SilentData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the "silent state".
                                 * @return The immutable value for the silent state
                                 */
                                // @ts-ignore
                                silent(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
