declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                /**
                 * An entity is a Minecraft entity.
                 * <p>Examples of entities include:</p>
                 * <ul>
                 * <li>Zombies</li>
                 * <li>Sheep</li>
                 * <li>Players</li>
                 * <li>Dropped items</li>
                 * <li>Dropped experience points</li>
                 * <li>etc.</li>
                 * </ul>
                 * <p>Blocks and items (when they are in inventories) are not entities.</p>
                 */
                // @ts-ignore
                interface Entity extends org.spongepowered.api.util.Identifiable, org.spongepowered.api.world.Locatable, org.spongepowered.api.data.DataHolder, org.spongepowered.api.text.translation.Translatable {
                    /**
                     * Gets the type of entity.
                     * @return The type of entity
                     */
                    // @ts-ignore
                    getType(): org.spongepowered.api.entity.EntityType
                    /**
                     * Creates a {@link EntitySnapshot} containing the {@link EntityType} and
                     * data of this entity.
                     * @return The snapshot
                     */
                    // @ts-ignore
                    createSnapshot(): org.spongepowered.api.entity.EntitySnapshot
                    /**
                     * Gets the Random Number Generator (RNG) for this entity.
                     * @return The RNG
                     */
                    // @ts-ignore
                    getRandom(): java.util.Random
                    /**
                     * Sets the location of this entity. This is equivalent to a teleport, and
                     * also moves this entity's passengers.
                     * @param location The location to set
                     * @return True if location was set successfully, false if location couldn't
                     *      be set due to
                     *      {#link org.spongepowered.api.event.entity.MoveEntityEvent.Teleport}
                     *      being cancelled.
                     */
                    // @ts-ignore
                    setLocation(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): boolean
                    /**
                     * Sets the location of this entity using a safe one from
                     * {@link TeleportHelper#getSafeLocation(Location)}. This is equivalent to a
                     * teleport and also moves this entity's passengers.
                     * @param location The location to set
                     * @return True if location was set successfully, false if location couldn't
                     *       be set as no safe location was found or
                     *       {#link org.spongepowered.api.event.entity.MoveEntityEvent.Teleport}
                     *       was cancelled.
                     */
                    // @ts-ignore
                    setLocationSafely(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>): boolean
                    /**
                     * Gets the rotation.
                     * <p>The format of the rotation is represented by:</p>
                     * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                     * @return The rotation
                     */
                    // @ts-ignore
                    getRotation(): Vector3d
                    /**
                     * Sets the rotation of this entity.
                     * <p>The format of the rotation is represented by:</p>
                     * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                     * @param rotation The rotation to set the entity to
                     */
                    // @ts-ignore
                    setRotation(rotation: Vector3d): void
                    /**
                     * Moves the entity to the specified location, and sets the rotation.
                     * <p>The format of the rotation is represented by:</p>
                     * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                     * @param location The location to set
                     * @param rotation The rotation to set
                     * @return True if location was set successfully, false if location couldn't
                     *      be set due to
                     *      {#link org.spongepowered.api.event.entity.MoveEntityEvent.Teleport}
                     *      being cancelled
                     */
                    // @ts-ignore
                    setLocationAndRotation(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>, rotation: Vector3d): boolean
                    /**
                     * Moves the entity to the specified location, and sets the rotation.
                     * {@link RelativePositions} listed inside the EnumSet are considered
                     * relative.
                     * <p>The format of the rotation is represented by:</p>
                     * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                     * @param location The location to set
                     * @param rotation The rotation to set
                     * @param relativePositions The coordinates to set relatively
                     * @return True if location was set successfully, false if location couldn't
                     *       be set due to
                     *       {#link org.spongepowered.api.event.entity.MoveEntityEvent.Teleport}
                     *       being cancelled
                     */
                    // @ts-ignore
                    setLocationAndRotation(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>, rotation: Vector3d, relativePositions: java.util.EnumSet<org.spongepowered.api.util.RelativePositions>): boolean
                    /**
                     * Sets the location using a safe one from
                     * {@link TeleportHelper#getSafeLocation(Location)} and the rotation of this
                     * entity.
                     * <p>The format of the rotation is represented by:</p>
                     * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                     * @param location The location to set
                     * @param rotation The rotation to set
                     * @return True if location was set successfully, false if either location
                     *       couldn't be set as no safe location was found or
                     *       {#link org.spongepowered.api.event.entity.MoveEntityEvent.Teleport}
                     *       was cancelled
                     */
                    // @ts-ignore
                    setLocationAndRotationSafely(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>, rotation: Vector3d): boolean
                    /**
                     * Sets the location using a safe one from
                     * {@link TeleportHelper#getSafeLocation(Location)} and the rotation of this
                     * entity. {@link RelativePositions} listed inside the EnumSet are
                     * considered relative.
                     * <p>The format of the rotation is represented by:</p>
                     * <p>{@code x -> pitch}, {@code y -> yaw}, {@code z -> roll}</p>
                     * @param location The location to set
                     * @param rotation The rotation to set
                     * @param relativePositions The coordinates to set relatively
                     * @return True if location was set successfully, false if either location
                     *       couldn't be set as no safe location was found or
                     *       {#link org.spongepowered.api.event.entity.MoveEntityEvent.Teleport}
                     *       was cancelled
                     */
                    // @ts-ignore
                    setLocationAndRotationSafely(location: org.spongepowered.api.world.Location<org.spongepowered.api.world.World>, rotation: Vector3d, relativePositions: java.util.EnumSet<org.spongepowered.api.util.RelativePositions>): boolean
                    /**
                     * Gets the entity scale. Not currently used. Returns {@link Vector3d#ONE}.
                     * @return The entity scale
                     */
                    // @ts-ignore
                    getScale(): Vector3d
                    /**
                     * Sets the entity scale. Not currently used. Does nothing.
                     * @param scale The scale
                     */
                    // @ts-ignore
                    setScale(scale: Vector3d): void
                    /**
                     * Returns the entity transform as a new copy. Combines the position,
                     * rotation and scale.
                     * @return The transform as a new copy
                     */
                    // @ts-ignore
                    getTransform(): org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>
                    /**
                     * Sets the entity transform. Sets the position, rotation and scale at once.
                     * @param transform The transform to set
                     * @return True if the transform was set successfully, false if the
                     *      transform couldn't be set due to
                     *      {#link org.spongepowered.api.event.entity.MoveEntityEvent.Teleport}
                     *      being cancelled.
                     */
                    // @ts-ignore
                    setTransform(transform: org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>): boolean
                    /**
                     * Sets the transformation of this entity using a safe location from
                     * {@link TeleportHelper#getSafeLocation(Location)}.
                     * @param transform The transform to set
                     * @return True if the transform was set successfully, or false if either
                     *      the transform couldn't be set as no safe location was found or
                     *      {#link org.spongepowered.api.event.entity.MoveEntityEvent.Teleport}
                     *      was cancelled
                     */
                    // @ts-ignore
                    setTransformSafely(transform: org.spongepowered.api.entity.Transform<org.spongepowered.api.world.World>): boolean
                    /**
                     * Sets the {@link Location} of this entity to the {@link World}'s spawn
                     * point.
                     * <p>This is equivalent to setting the location via
                     * {@link TargetedLocationData}.</p>
                     * @param world The world to transfer to
                     * @return Whether the transfer was successful, returns false if the action
                     *       is cancelled or not possible (eg. because the entity has been
                     *       removed)
                     */
                    // @ts-ignore
                    transferToWorld(world: org.spongepowered.api.world.World): boolean
                    /**
                     * Sets the {@link Location} of this entity to a new position in a world.
                     * <p>This is equivalent to setting the location via
                     * {@link TargetedLocationData}.</p>
                     * @param world The world to transfer to
                     * @param position The position in the target world
                     * @return Whether the transfer was successful, returns false if the action
                     *       is cancelled or not possible (eg. because the entity has been
                     *       removed)
                     */
                    // @ts-ignore
                    transferToWorld(world: org.spongepowered.api.world.World, position: Vector3d): boolean
                    /**
                     * Sets the location of this entity to a new position in a world which does
                     * not have to be loaded (but must at least be enabled).
                     * <p>If the target world is loaded then this is equivalent to
                     * setting the location via {@link TargetedLocationData}.</p>
                     * <p>If the target world is unloaded but is enabled according to its
                     * {@link WorldArchetype#isEnabled()} then this will first load the world
                     * before transferring the entity to that world.</p>
                     * <p>If the target world is unloaded and not enabled then the transfer
                     * will fail.</p>
                     * @param worldName The name of the world to transfer to
                     * @param position The position in the target world
                     * @return True if the teleport was successful
                     */
                    // @ts-ignore
                    transferToWorld(worldName: java.lang.String | string, position: Vector3d): boolean
                    /**
                     * Sets the location of this entity to a new position in a world which does
                     * not have to be loaded (but must at least be enabled).
                     * <p>If the target world is loaded then this is equivalent to setting the
                     * location via {@link TargetedLocationData}.</p>
                     * <p>If the target world is unloaded but is enabled according to its
                     * {@link WorldArchetype#isEnabled()} then this will first load the world
                     * before transferring the entity to that world.</p>
                     * <p>If the target world is unloaded and not enabled then the transfer
                     * will fail.</p>
                     * @param uuid The UUID of the target world to transfer to
                     * @param position The position in the target world
                     * @return True if the teleport was successful
                     */
                    // @ts-ignore
                    transferToWorld(uuid: java.util.UUID, position: Vector3d): boolean
                    /**
                     * Gets the entity's bounding box, usually for collisions and interaction.
                     * The box has an offset matching the entity's positions. That is to say, it
                     * is absolutely positioned and not relative to the entity.
                     * @return The axis aligned bounding box
                     */
                    // @ts-ignore
                    getBoundingBox(): java.util.Optional<org.spongepowered.api.util.AABB>
                    /**
                     * Gets the entity passenger that rides this entity, if available.
                     * @return The passenger entity, if it exists
                     */
                    // @ts-ignore
                    getPassengers(): Array<org.spongepowered.api.entity.Entity>
                    /**
                     * Checks if the given entity is a passenger.
                     * @param entity The entity passenger
                     * @return If it is a passenger
                     */
                    // @ts-ignore
                    hasPassenger(entity: org.spongepowered.api.entity.Entity): boolean
                    /**
                     * Sets the passenger entity(the entity that rides this one).
                     * @param entity The entity passenger, or null to eject
                     * @return If adding the passenger succeeded
                     */
                    // @ts-ignore
                    addPassenger(entity: org.spongepowered.api.entity.Entity): boolean
                    /**
                     * Removes the given entity as a passenger.
                     * @param entity The entity to remove as passenger
                     */
                    // @ts-ignore
                    removePassenger(entity: org.spongepowered.api.entity.Entity): void
                    /**
                     * Removes all currently riding passengers from this entity.
                     */
                    // @ts-ignore
                    clearPassengers(): void
                    /**
                     * Gets the entity vehicle that this entity is riding, if available.
                     * @return The vehicle entity, if it exists
                     */
                    // @ts-ignore
                    getVehicle(): java.util.Optional<org.spongepowered.api.entity.Entity>
                    /**
                     * Sets the vehicle entity(the entity that is ridden by this one).
                     * @param entity The entity vehicle, or null to dismount
                     * @return True if the set was successful
                     */
                    // @ts-ignore
                    setVehicle(entity: org.spongepowered.api.entity.Entity): boolean
                    /**
                     * Gets the entity vehicle that is the base of what ever stack the current
                     * entity is a part of. This can be the current entity, if it is not riding
                     * any vehicle.
                     * <p>The returned entity can never ride another entity, that would make the
                     * ridden entity the base of the stack.</p>
                     * @return The vehicle entity, if available
                     */
                    // @ts-ignore
                    getBaseVehicle(): org.spongepowered.api.entity.Entity
                    /**
                     * Gets the {@link Vector3d} representation of this entity's current
                     * velocity.
                     * @return The current velocity
                     */
                    // @ts-ignore
                    getVelocity(): Vector3d
                    /**
                     * Sets the velocity for this entity.
                     * @param vector3d The vector 3d velocity
                     * @return The resulting data transaction result
                     */
                    // @ts-ignore
                    setVelocity(vector3d: Vector3d): org.spongepowered.api.data.DataTransactionResult
                    /**
                     * Returns whether this entity is on the ground (not in the air) or not.
                     * @return Whether this entity is on the ground or not
                     */
                    // @ts-ignore
                    isOnGround(): boolean
                    /**
                     * Returns whether this entity has been removed.
                     * @return True if this entity has been removed
                     */
                    // @ts-ignore
                    isRemoved(): boolean
                    /**
                     * Returns whether this entity is still loaded in a world/chunk.
                     * @return True if this entity is still loaded
                     */
                    // @ts-ignore
                    isLoaded(): boolean
                    /**
                     * Mark this entity for removal in the very near future, preferably
                     * within one game tick.
                     */
                    // @ts-ignore
                    remove(): void
                    /**
                     * Damages this {@link Entity} with the given {@link DamageSource}.
                     * @param damage The damage to deal
                     * @param damageSource The cause of the damage
                     * @return True if damaging the entity was successful
                     */
                    // @ts-ignore
                    damage(damage: number /*double*/, damageSource: org.spongepowered.api.event.cause.entity.damage.source.DamageSource): boolean
                    /**
                     * Gets the nearby entities within the desired distance.
                     * @see World#getNearbyEntities(Vector3d, double)
                     * @param distance The distance
                     * @return The collection of nearby entities
                     */
                    // @ts-ignore
                    getNearbyEntities(distance: number /*double*/): Array<org.spongepowered.api.entity.Entity>
                    /**
                     * Gets the nearby entities that satisfy the desired predicate.
                     * @see World#getEntities(Predicate)
                     * @param predicate The predicate to use
                     * @return The collection of entities
                     */
                    // @ts-ignore
                    getNearbyEntities(predicate: java.util.function$.Predicate<org.spongepowered.api.entity.Entity>): Array<org.spongepowered.api.entity.Entity>
                    /**
                     * Gets the {@link UUID}, if available, of the user who created this
                     * {@link Entity}.
                     * @return The {#link UUID} if one exists
                     */
                    // @ts-ignore
                    getCreator(): java.util.Optional<java.util.UUID>
                    /**
                     * Gets the {@link UUID}, if available, of the user who last notified this
                     * {@link Entity}.
                     * @return The {#link UUID} if one exists
                     */
                    // @ts-ignore
                    getNotifier(): java.util.Optional<java.util.UUID>
                    /**
                     * Sets the {@link UUID} of the user who created this {@link Entity}.
                     * @param uuid The {#link UUID} to set as creator
                     */
                    // @ts-ignore
                    setCreator(uuid: java.util.UUID): void
                    /**
                     * Sets the {@link UUID} of the user who last notified this {@link Entity}.
                     * @param uuid The {#link UUID} to set as notifier
                     */
                    // @ts-ignore
                    setNotifier(uuid: java.util.UUID): void
                    /**
                     * Returns whether this entity can see the provided {@link Entity}.
                     * @param entity The entity to check visibility for
                     * @return {#code true} if this entity can see the provided entity
                     */
                    // @ts-ignore
                    canSee(entity: org.spongepowered.api.entity.Entity): boolean
                    /**
                     * Creates a new {@link EntityArchetype} for use with {@link Schematic}s and
                     * placing the archetype in multiple locations.
                     * @return The created archetype for re-creating this entity
                     */
                    // @ts-ignore
                    createArchetype(): org.spongepowered.api.entity.EntityArchetype
                    /**
                     * Returns whether this entity has gravity.
                     * @return True if this entity has gravity
                     */
                    // @ts-ignore
                    gravity(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                }
            }
        }
    }
}
