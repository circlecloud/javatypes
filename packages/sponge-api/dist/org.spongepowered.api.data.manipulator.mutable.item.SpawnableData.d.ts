declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace item {
                            /**
                             * An {@link VariantData} handling the {@link EntityType} that an
                             * {@link ItemStack} is capable of spawning when used. Usually applicable to
                             * {@link ItemStack}s of type {@link ItemTypes#SPAWN_EGG}.
                             * @see Keys#SPAWNABLE_ENTITY_TYPE
                             */
                            // @ts-ignore
                            interface SpawnableData extends org.spongepowered.api.data.manipulator.mutable.VariantData<org.spongepowered.api.entity.EntityType, org.spongepowered.api.data.manipulator.mutable.item.SpawnableData, org.spongepowered.api.data.manipulator.immutable.item.ImmutableSpawnableData> {
                            }
                        }
                    }
                }
            }
        }
    }
}
