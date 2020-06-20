declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            /**
                             * An {@link ImmutableDataManipulator} handling the {@link UUID} for  the
                             * {@link Humanoid} skin used. Usually this is meant where the {@link UUID}
                             * belongs to a {@link Player} but without relying on a {@link Player},
                             * the {@link Humanoid} will use the same skin url on the server.
                             */
                            // @ts-ignore
                            interface ImmutableSkinData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableSkinData, org.spongepowered.api.data.manipulator.mutable.entity.SkinData> {
                                /**
                                 * Gets the {@link ImmutableValue} for the {@link UUID} of the skin to
                                 * display on a {@link Humanoid} entity for customization.
                                 * @return The immutable value for the skin uuid
                                 */
                                // @ts-ignore
                                skinUniqueId(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.util.UUID>
                            }
                        }
                    }
                }
            }
        }
    }
}
