declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            /**
                             * A {@link DataManipulator} handling a targeted {@link Entity}.
                             * <p>For a {@link ShulkerBullet} this will be entity the bullet will try to reach.</p>
                             */
                            // @ts-ignore
                            interface TargetedEntityData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.TargetedEntityData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableTargetedEntityData> {
                                /**
                                 * Gets the {@link Value} for the targeted {@link Entity}.
                                 * @return The value for the targeted entity
                                 * @see Keys#TARGETED_ENTITY
                                 */
                                // @ts-ignore
                                value(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.entity.EntitySnapshot>
                            }
                        }
                    }
                }
            }
        }
    }
}
