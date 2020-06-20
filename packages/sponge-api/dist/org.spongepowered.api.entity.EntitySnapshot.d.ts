declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                /**
                 * Represents a snapshot of an {@link Entity} and all of it's related data in
                 * the form of {@link ImmutableDataManipulator}s and {@link ImmutableValue}s.
                 * While an {@link Entity} is a live instance and therefor residing in a
                 * {@link World}, an {@link EntitySnapshot} may be snapshotted of a
                 * {@link World} that is not currently loaded, or may not exist any longer.
                 * <p>All data associated with the {@link EntitySnapshot} should be separated
                 * from the {@link Game} instance such that external processing, building,
                 * and manipulation can take place.</p>
                 */
                // @ts-ignore
                interface EntitySnapshot extends org.spongepowered.api.data.LocatableSnapshot<org.spongepowered.api.entity.EntitySnapshot> {
                    /**
                     * Creates a new {@link Builder} to build an {@link EntitySnapshot}.
                     * @return The new builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.entity.EntitySnapshot.Builder
                    /**
                     * Gets an {@link Optional} containing the {@link UUID} of the
                     * {@link Entity} that this {@link EntitySnapshot} is representing. If the
                     * {@link Optional} is {@link Optional#empty()}, then this snapshot must
                     * have been created by an {@link Builder} without an {@link Entity} as a
                     * source.
                     * @return The Optional where the UUID may be present
                     */
                    // @ts-ignore
                    getUniqueId(): java.util.Optional<java.util.UUID>
                    /**
                     * Gets the {@link Transform} as an {@link Optional} as the {@link Location}
                     * may be undefined if this {@link EntitySnapshot} was built without a
                     * location. This method is linked to {@link #getLocation()} such that if
                     * there is a {@link Location}, there is usually a {@link Transform}.
                     * @return The transform, if available
                     */
                    // @ts-ignore
                    getTransform(): java.util.Optional<org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>>
                    /**
                     * Gets the {@link EntityType}.
                     * @return The EntityType
                     */
                    // @ts-ignore
                    getType(): org.spongepowered.api.entity.EntityType
                    /**
                     * Restores the {@link EntitySnapshot} to the {@link Location} stored within
                     * the snapshot. If the {@link Location} is not available, the snapshot will
                     * not be restored.
                     * @return the restored entity if successful
                     */
                    // @ts-ignore
                    restore(): java.util.Optional<org.spongepowered.api.entity.Entity>
                    /**
                     * Creates a new {@link EntityArchetype} for use with {@link Schematic}s and
                     * placing the archetype in multiple locations.
                     * @return The created archetype for re-creating this entity
                     */
                    // @ts-ignore
                    createArchetype(): org.spongepowered.api.entity.EntityArchetype
                }
            }
        }
    }
}
