declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                // @ts-ignore
                interface EntityArchetype extends org.spongepowered.api.data.Archetype<org.spongepowered.api.entity.EntitySnapshot, org.spongepowered.api.entity.Entity> {
                    /**
                     * Creates a {@link Builder} to get {@link EntityArchetype}s.
                     * @return The new builder
                     */
                    // @ts-ignore
                    builder(): org.spongepowered.api.entity.EntityArchetype.Builder
                    /**
                     * Creates a new {@link EntityArchetype} with the specified {@link EntityType}.
                     * @param type Type of the entity
                     * @return An archetype of the given entity type
                     */
                    // @ts-ignore
                    of(type: org.spongepowered.api.entity.EntityType): org.spongepowered.api.entity.EntityArchetype
                    /**
                     * Gets the {@link EntityType} of the entity contained in this archetype.
                     * @return The entity type
                     */
                    // @ts-ignore
                    getType(): org.spongepowered.api.entity.EntityType
                    /**
                     * Gets the raw {@link Entity} data that would be applied to the generated
                     * entity. Note that this is a copied container.
                     * <p>Note: While normally, an archetype does not contain position information,
                     * it is possible that {@link Queries#POSITION} are included as required by
                     * {@link Schematic}s.
                     * </p>
                     * @return The copied container of the entity
                     */
                    // @ts-ignore
                    getEntityData(): org.spongepowered.api.data.DataContainer
                    // @ts-ignore
                    setRawData(container: org.spongepowered.api.data.DataView): void
                    // @ts-ignore
                    copy(): org.spongepowered.api.entity.EntityArchetype
                }
            }
        }
    }
}
