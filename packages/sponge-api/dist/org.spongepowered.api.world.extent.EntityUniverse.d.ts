declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace world {
                namespace extent {
                    /**
                     * A container of {@link Entity} instances.
                     */
                    // @ts-ignore
                    interface EntityUniverse {
                        /**
                         * Gets the entity whose {@link UUID} matches the provided id, possibly
                         * returning no entity if the entity is not loaded or non-existent.
                         * <p>For world implementations, only some parts of the world is usually
                         * loaded, so this method may return no entity if the entity is not
                         * loaded.</p>
                         * @param uuid The unique id
                         * @return An entity, if available
                         */
                        // @ts-ignore
                        getEntity(uuid: java.util.UUID): java.util.Optional<org.spongepowered.api.entity.Entity>
                        /**
                         * Return a collection of entities contained within this universe, possibly
                         * only returning entities only in loaded areas.
                         * <p>For world implementations, only some parts of the world is usually
                         * loaded, so this method will only return entities within those loaded
                         * parts.</p>
                         * @return A collection of entities
                         */
                        // @ts-ignore
                        getEntities(): java.util.Collection<org.spongepowered.api.entity.Entity>
                        /**
                         * Return a collection of entities contained within this universe, possibly
                         * only returning entities only in loaded areas. The returned entities are
                         * filtered by the given {@link Predicate} before being returned.
                         * <p>For world implementations, only some parts of the world is usually
                         * loaded, so this method will only return entities within those loaded
                         * parts.</p>
                         * @param filter The filter to apply to the returned entities
                         * @return A collection of filtered entities
                         */
                        // @ts-ignore
                        getEntities(filter: java.util.function.Predicate<org.spongepowered.api.entity.Entity> | java.util.function$.Predicate<org.spongepowered.api.entity.Entity>): java.util.Collection<org.spongepowered.api.entity.Entity>
                        /**
                         * Return a collection of entities contained within {@code distance} blocks
                         * of the specified location. This uses a sphere to test distances.
                         * <p>For world implementations, only some parts of the world is usually
                         * loaded, so this method will only return entities within those loaded
                         * parts.</p>
                         * @param location The location at the center of the search radius
                         * @param distance The search radius
                         * @return A collection of nearby entities
                         */
                        // @ts-ignore
                        getNearbyEntities(location: Vector3d, distance: number /*double*/): java.util.Collection<org.spongepowered.api.entity.Entity>
                        /**
                         * Create an entity instance at the given position.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         * @param type The type
                         * @param position The position
                         * @return An entity, if one was created
                         * @throws IllegalArgumentException If the position or entity type is not
                         *       valid to create
                         * @throws IllegalStateException If a constructor cannot be found
                         */
                        // @ts-ignore
                        createEntity(type: org.spongepowered.api.entity.EntityType, position: Vector3d): org.spongepowered.api.entity.Entity
                        /**
                         * Create an entity instance at the given position.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         * @param type The type
                         * @param position The position
                         * @return An entity, if one was created
                         * @throws IllegalArgumentException If the position or entity type is not
                         *       valid to create
                         * @throws IllegalStateException If a constructor cannot be found
                         */
                        // @ts-ignore
                        createEntity(type: org.spongepowered.api.entity.EntityType, position: Vector3i): org.spongepowered.api.entity.Entity
                        /**
                         * Create an entity instance at the given position.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         * @param entityContainer The data container of the entity
                         * @return An entity, if one was created
                         */
                        // @ts-ignore
                        createEntity(entityContainer: org.spongepowered.api.data.DataContainer): java.util.Optional<org.spongepowered.api.entity.Entity>
                        /**
                         * Create an entity instance at the given position.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         * @param entityContainer The data container of the entity
                         * @param position The position of the entity to spawn at
                         * @return An entity, if one was created
                         */
                        // @ts-ignore
                        createEntity(entityContainer: org.spongepowered.api.data.DataContainer, position: Vector3d): java.util.Optional<org.spongepowered.api.entity.Entity>
                        /**
                         * Create an entity instance at the given position with the default
                         * equipment.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         * @param type The type
                         * @param position The position
                         * @return An entity, if one was created
                         * @throws IllegalArgumentException If the position or entity type is not
                         *      valid to create
                         * @throws IllegalStateException If a constructor cannot be found
                         */
                        // @ts-ignore
                        createEntityNaturally(type: org.spongepowered.api.entity.EntityType, position: Vector3d): org.spongepowered.api.entity.Entity
                        /**
                         * Create an entity instance at the given position with the default
                         * equipment.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         * @param type The type
                         * @param position The position
                         * @return An entity, if one was created
                         * @throws IllegalArgumentException If the position or entity type is not
                         *      valid to create
                         * @throws IllegalStateException If a constructor cannot be found
                         */
                        // @ts-ignore
                        createEntityNaturally(type: org.spongepowered.api.entity.EntityType, position: Vector3i): org.spongepowered.api.entity.Entity
                        /**
                         * Creates and restores an {@link Entity} from the provided
                         * {@link EntitySnapshot} at the provided {@link Vector3d} position.
                         * <p>Creating an entity does not spawn the entity into the world. An entity
                         * created means the entity can be spawned at the given location. If
                         * {@link Optional#empty()} was returned, the entity is not able to spawn at
                         * the given location. Furthermore, this allows for the {@link Entity} to be
                         * customized further prior to traditional "ticking" and processing by core
                         * systems.</p>
                         * @param snapshot The entity snapshot of the entity
                         * @param position The position of the entity to spawn at
                         * @return An entity, if one was created
                         */
                        // @ts-ignore
                        restoreSnapshot(snapshot: org.spongepowered.api.entity.EntitySnapshot, position: Vector3d): java.util.Optional<org.spongepowered.api.entity.Entity>
                        /**
                         * Spawns an {@link Entity} using the already set properties (extent,
                         * position, rotation) and applicable {@link DataManipulator}s for spawning
                         * the entity.
                         * <p>The requirements involve that all necessary setup of states and data
                         * is already preformed on the entity retrieved from the various
                         * {@link #createEntity(EntityType,Vector3d)} methods. Calling this will
                         * make the now-spawned entity able to be processed by various systems.</p>
                         * <p>If the entity was unable to spawn, the entity is not removed, but it
                         * should be taken note that there can be many reasons for a failure.</p>
                         * @param entity The entity to spawn
                         * @return True if successful, false if not
                         */
                        // @ts-ignore
                        spawnEntity(entity: org.spongepowered.api.entity.Entity): boolean
                        /**
                         * Similar to {@link #spawnEntity(Entity)} except where multiple entities
                         * can be attempted to be spawned.
                         * @param entities The created entities you wish to spawn
                         * @return The entities which spawned correctly, or empty if none
                         */
                        // @ts-ignore
                        spawnEntities(entities: java.lang.Iterable<org.spongepowered.api.entity.Entity>): java.util.Collection<org.spongepowered.api.entity.Entity>
                        /**
                         * Gets all the entities that intersect the bounding box, in no particular
                         * order.
                         * @param box The intersection box
                         * @return All the intersecting entities
                         */
                        // @ts-ignore
                        getIntersectingEntities(box: org.spongepowered.api.util.AABB): java.util.Set<org.spongepowered.api.entity.Entity>
                        /**
                         * Gets all the entities that intersect the bounding box, in no particular
                         * order, as long as the pass the given filter test.
                         * @param box The intersection box
                         * @param filter The filter test
                         * @return All the intersecting entities that pass the filter test
                         */
                        // @ts-ignore
                        getIntersectingEntities(box: org.spongepowered.api.util.AABB, filter: java.util.function.Predicate<org.spongepowered.api.entity.Entity> | java.util.function$.Predicate<org.spongepowered.api.entity.Entity>): java.util.Set<org.spongepowered.api.entity.Entity>
                        /**
                         * Gets all the entities that intersect the ray (by their bounding box)
                         * The ray is defined by its start and end point.
                         * @param start The start of the ray
                         * @param end The end of the ray
                         * @return The intersecting entities in no particular order, with the
                         *       associated intersection point and normal
                         */
                        // @ts-ignore
                        getIntersectingEntities(start: Vector3d, end: Vector3d): java.util.Set<org.spongepowered.api.world.extent.EntityUniverse.EntityHit>
                        /**
                         * Gets all the entities that intersect the ray (by their bounding box)
                         * The ray is defined by its start and end point. Only the entities that
                         * pass the filter test are added.
                         * @param start The start of the ray
                         * @param end The end of the ray
                         * @param filter The filter test
                         * @return The intersecting entities in no particular order, with the
                         *       associated intersection point and normal
                         */
                        // @ts-ignore
                        getIntersectingEntities(start: Vector3d, end: Vector3d, filter: java.util.function.Predicate<org.spongepowered.api.world.extent.EntityUniverse.EntityHit> | java.util.function$.Predicate<org.spongepowered.api.world.extent.EntityUniverse.EntityHit>): java.util.Set<org.spongepowered.api.world.extent.EntityUniverse.EntityHit>
                        /**
                         * Gets all the entities that intersect the ray (by their bounding box)
                         * The ray is defined by its start, direction and distance.
                         * @param start The start of the ray
                         * @param direction The direction of the ray
                         * @param distance The distance of the ray (from the start)
                         * @return The intersecting entities in no particular order, with the
                         *       associated intersection point and normal
                         */
                        // @ts-ignore
                        getIntersectingEntities(start: Vector3d, direction: Vector3d, distance: number /*double*/): java.util.Set<org.spongepowered.api.world.extent.EntityUniverse.EntityHit>
                        /**
                         * Gets all the entities that intersect the ray (by their bounding box)
                         * The ray is defined by its start, direction and distance. Only the
                         * entities that pass the filter test are added.
                         * @param start The start of the ray
                         * @param direction The direction of the ray
                         * @param distance The distance of the ray (from the start)
                         * @param filter The filter test
                         * @return The intersecting entities in no particular order, with the
                         *       associated intersection point and normal
                         */
                        // @ts-ignore
                        getIntersectingEntities(start: Vector3d, direction: Vector3d, distance: number /*double*/, filter: java.util.function.Predicate<org.spongepowered.api.world.extent.EntityUniverse.EntityHit> | java.util.function$.Predicate<org.spongepowered.api.world.extent.EntityUniverse.EntityHit>): java.util.Set<org.spongepowered.api.world.extent.EntityUniverse.EntityHit>
                    }
                }
            }
        }
    }
}
