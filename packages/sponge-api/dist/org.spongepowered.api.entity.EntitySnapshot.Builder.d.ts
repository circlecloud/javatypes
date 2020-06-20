declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace EntitySnapshot {
                    /**
                     * An {@link ImmutableDataBuilder} for building {@link EntitySnapshot}s. The
                     * requirements
                     */
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.data.ImmutableDataBuilder<org.spongepowered.api.entity.EntitySnapshot, org.spongepowered.api.entity.EntitySnapshot.Builder> {
                        /**
                         * Sets the {@link WorldProperties} for this {@link EntitySnapshot}.
                         * <p>This is used to grab the {@link UUID} of the World for this
                         * snapshot.</p>
                         * @param worldProperties The WorldProperties
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        world(worldProperties: org.spongepowered.api.world.storage.WorldProperties): org.spongepowered.api.entity.EntitySnapshot.Builder
                        /**
                         * Sets the {@link EntityType} for this {@link EntitySnapshot}.
                         * @param entityType The EntityType
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        type(entityType: org.spongepowered.api.entity.EntityType): org.spongepowered.api.entity.EntitySnapshot.Builder
                        /**
                         * Sets the coordinates of this {@link EntitySnapshot} from a
                         * {@link Vector3i}.
                         * @param position The Vector3i representing the coordinates
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        position(position: Vector3d): org.spongepowered.api.entity.EntitySnapshot.Builder
                        /**
                         * Copies over data from an {@link Entity}.
                         * @param entity The Entity
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        from(entity: org.spongepowered.api.entity.Entity): org.spongepowered.api.entity.EntitySnapshot.Builder
                    }
                }
            }
        }
    }
}
