declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace EntityArchetype {
                    /**
                     * A builder for {@link EntityArchetype}s.
                     */
                    // @ts-ignore
                    interface Builder extends org.spongepowered.api.data.persistence.DataBuilder<org.spongepowered.api.entity.EntityArchetype> {
                        // @ts-ignore
                        reset(): org.spongepowered.api.entity.EntityArchetype.Builder
                        // @ts-ignore
                        from(value: org.spongepowered.api.entity.EntityArchetype): org.spongepowered.api.entity.EntityArchetype.Builder
                        /**
                         * Sets all possible bits of information from the provided {@link Entity}.
                         * @param entity The entity to get information from
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        from(entity: org.spongepowered.api.entity.Entity): org.spongepowered.api.entity.EntityArchetype.Builder
                        /**
                         * Sets the desired {@link EntityType} of the produced {@link EntityArchetype}.
                         * @param type The type of entity type
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        type(type: org.spongepowered.api.entity.EntityType): org.spongepowered.api.entity.EntityArchetype.Builder
                        /**
                         * Sets the desired {@link EntityType} of the produced {@link EntityArchetype}.
                         * @param view The data to set for the archetype
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        entityData(view: org.spongepowered.api.data.DataView): org.spongepowered.api.entity.EntityArchetype.Builder
                        /**
                         * Sets the desired {@link EntityType} of the produced {@link EntityArchetype}.
                         * @param manipulator The manipulator to set for the archetype
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        setData(manipulator: org.spongepowered.api.data.manipulator.DataManipulator<any, ?>): org.spongepowered.api.entity.EntityArchetype.Builder
                        /**
                         * Sets the desired {@link EntityType} of the produced {@link EntityArchetype}.
                         * @param value The type of entity type
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        set<E, V extends org.spongepowered.api.data.value.BaseValue<E>>(value: V extends org.spongepowered.api.data.value.BaseValue<E>): org.spongepowered.api.entity.EntityArchetype.Builder
                        /**
                         * Sets the desired {@link EntityType} of the produced {@link EntityArchetype}.
                         * @param key The key
                         * @param value The value to set
                         * @return This builder, for chaining
                         */
                        // @ts-ignore
                        set<E, V extends org.spongepowered.api.data.value.BaseValue<E>>(key: org.spongepowered.api.data.key.Key<V>, value: E): org.spongepowered.api.entity.EntityArchetype.Builder
                        /**
                         * Constructs a new {@link EntityArchetype}.
                         * @return The new entity archetype
                         */
                        // @ts-ignore
                        build(): org.spongepowered.api.entity.EntityArchetype
                    }
                }
            }
        }
    }
}
