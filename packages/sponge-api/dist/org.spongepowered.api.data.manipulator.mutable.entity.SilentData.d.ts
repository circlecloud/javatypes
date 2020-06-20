declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} for the "silent" state of an {@link Entity}.
                             * <p>In Vanilla, this prevents an {@link Entity} from playing any sounds
                             * (or making any noise).</p>
                             */
                            // @ts-ignore
                            interface SilentData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.SilentData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSilentData> {
                                /**
                                 * Gets the {@link Value} for the "silent state".
                                 * @return The value for the silent state
                                 * @see Keys#IS_SILENT
                                 */
                                // @ts-ignore
                                silent(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
