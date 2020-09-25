declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a base entity in the world
             */
            // @ts-ignore
            interface Entity extends org.bukkit.metadata.Metadatable, org.bukkit.command.CommandSender, org.bukkit.Nameable, org.bukkit.persistence.PersistentDataHolder {
                /**
                 * Gets the entity's current position
                 * @return a new copy of Location containing the position of this entity
                 */
                // @ts-ignore
                getLocation(): org.bukkit.Location
                /**
                 * Stores the entity's current position in the provided Location object.
                 * <p>
                 * If the provided Location is null this method does nothing and returns
                 * null.
                 * @param loc the location to copy into
                 * @return The Location object provided or null
                 */
                // @ts-ignore
                getLocation(loc: org.bukkit.Location): org.bukkit.Location
                /**
                 * Sets this entity's velocity
                 * @param velocity New velocity to travel with
                 */
                // @ts-ignore
                setVelocity(velocity: org.bukkit.util.Vector): void
                /**
                 * Gets this entity's current velocity
                 * @return Current traveling velocity of this entity
                 */
                // @ts-ignore
                getVelocity(): org.bukkit.util.Vector
                /**
                 * Gets the entity's height
                 * @return height of entity
                 */
                // @ts-ignore
                getHeight(): number /*double*/
                /**
                 * Gets the entity's width
                 * @return width of entity
                 */
                // @ts-ignore
                getWidth(): number /*double*/
                /**
                 * Gets the entity's current bounding box.
                 * <p>
                 * The returned bounding box reflects the entity's current location and
                 * size.
                 * @return the entity's current bounding box
                 */
                // @ts-ignore
                getBoundingBox(): org.bukkit.util.BoundingBox
                /**
                 * Returns true if the entity is supported by a block. This value is a
                 * state updated by the server and is not recalculated unless the entity
                 * moves.
                 * @return True if entity is on ground.
                 * @see Player#isOnGround()
                 */
                // @ts-ignore
                isOnGround(): boolean
                /**
                 * Gets the current world this entity resides in
                 * @return World
                 */
                // @ts-ignore
                getWorld(): org.bukkit.World
                /**
                 * Sets the entity's rotation.
                 * <p>
                 * Note that if the entity is affected by AI, it may override this rotation.
                 * @param yaw the yaw
                 * @param pitch the pitch
                 * @throws UnsupportedOperationException if used for players
                 */
                // @ts-ignore
                setRotation(yaw: number /*float*/, pitch: number /*float*/): void
                /**
                 * Teleports this entity to the given location. If this entity is riding a
                 * vehicle, it will be dismounted prior to teleportation.
                 * @param location New location to teleport this entity to
                 * @return <code>true</code> if the teleport was successful
                 */
                // @ts-ignore
                teleport(location: org.bukkit.Location): boolean
                /**
                 * Teleports this entity to the given location. If this entity is riding a
                 * vehicle, it will be dismounted prior to teleportation.
                 * @param location New location to teleport this entity to
                 * @param cause The cause of this teleportation
                 * @return <code>true</code> if the teleport was successful
                 */
                // @ts-ignore
                teleport(location: org.bukkit.Location, cause: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean
                /**
                 * Teleports this entity to the target Entity. If this entity is riding a
                 * vehicle, it will be dismounted prior to teleportation.
                 * @param destination Entity to teleport this entity to
                 * @return <code>true</code> if the teleport was successful
                 */
                // @ts-ignore
                teleport(destination: org.bukkit.entity.Entity): boolean
                /**
                 * Teleports this entity to the target Entity. If this entity is riding a
                 * vehicle, it will be dismounted prior to teleportation.
                 * @param destination Entity to teleport this entity to
                 * @param cause The cause of this teleportation
                 * @return <code>true</code> if the teleport was successful
                 */
                // @ts-ignore
                teleport(destination: org.bukkit.entity.Entity, cause: org.bukkit.event.player.PlayerTeleportEvent.TeleportCause): boolean
                /**
                 * Returns a list of entities within a bounding box centered around this
                 * entity
                 * @param x 1/2 the size of the box along x axis
                 * @param y 1/2 the size of the box along y axis
                 * @param z 1/2 the size of the box along z axis
                 * @return {#code List<Entity>} List of entities nearby
                 */
                // @ts-ignore
                getNearbyEntities(x: number /*double*/, y: number /*double*/, z: number /*double*/): Array<org.bukkit.entity.Entity>
                /**
                 * Returns a unique id for this entity
                 * @return Entity id
                 */
                // @ts-ignore
                getEntityId(): number /*int*/
                /**
                 * Returns the entity's current fire ticks (ticks before the entity stops
                 * being on fire).
                 * @return int fireTicks
                 */
                // @ts-ignore
                getFireTicks(): number /*int*/
                /**
                 * Returns the entity's maximum fire ticks.
                 * @return int maxFireTicks
                 */
                // @ts-ignore
                getMaxFireTicks(): number /*int*/
                /**
                 * Sets the entity's current fire ticks (ticks before the entity stops
                 * being on fire).
                 * @param ticks Current ticks remaining
                 */
                // @ts-ignore
                setFireTicks(ticks: number /*int*/): void
                /**
                 * Mark the entity's removal.
                 */
                // @ts-ignore
                remove(): void
                /**
                 * Returns true if this entity has been marked for removal.
                 * @return True if it is dead.
                 */
                // @ts-ignore
                isDead(): boolean
                /**
                 * Returns false if the entity has died or been despawned for some other
                 * reason.
                 * @return True if valid.
                 */
                // @ts-ignore
                isValid(): boolean
                /**
                 * Gets the {@link Server} that contains this Entity
                 * @return Server instance running this Entity
                 */
                // @ts-ignore
                getServer(): org.bukkit.Server
                /**
                 * Returns true if the entity gets persisted.
                 * <p>
                 * By default all entities are persistent. An entity will also not get
                 * persisted, if it is riding an entity that is not persistent.
                 * <p>
                 * The persistent flag on players controls whether or not to save their
                 * playerdata file when they quit. If a player is directly or indirectly
                 * riding a non-persistent entity, the vehicle at the root and all its
                 * passengers won't get persisted.
                 * <p>
                 * <b>This should not be confused with
                 * {@link LivingEntity#setRemoveWhenFarAway(boolean)} which controls
                 * despawning of living entities. </b>
                 * @return true if this entity is persistent
                 */
                // @ts-ignore
                isPersistent(): boolean
                /**
                 * Sets whether or not the entity gets persisted.
                 * @param persistent the persistence status
                 * @see #isPersistent()
                 */
                // @ts-ignore
                setPersistent(persistent: boolean): void
                /**
                 * Gets the primary passenger of a vehicle. For vehicles that could have
                 * multiple passengers, this will only return the primary passenger.
                 * @return an entity
                 * @deprecated entities may have multiple passengers, use
                 *  {#link #getPassengers()}
                 */
                // @ts-ignore
                getPassenger(): org.bukkit.entity.Entity
                /**
                 * Set the passenger of a vehicle.
                 * @param passenger The new passenger.
                 * @return false if it could not be done for whatever reason
                 * @deprecated entities may have multiple passengers, use
                 *  {#link #getPassengers()}
                 */
                // @ts-ignore
                setPassenger(passenger: org.bukkit.entity.Entity): boolean
                /**
                 * Gets a list of passengers of this vehicle.
                 * <p>
                 * The returned list will not be directly linked to the entity's current
                 * passengers, and no guarantees are made as to its mutability.
                 * @return list of entities corresponding to current passengers.
                 */
                // @ts-ignore
                getPassengers(): Array<org.bukkit.entity.Entity>
                /**
                 * Add a passenger to the vehicle.
                 * @param passenger The passenger to add
                 * @return false if it could not be done for whatever reason
                 */
                // @ts-ignore
                addPassenger(passenger: org.bukkit.entity.Entity): boolean
                /**
                 * Remove a passenger from the vehicle.
                 * @param passenger The passenger to remove
                 * @return false if it could not be done for whatever reason
                 */
                // @ts-ignore
                removePassenger(passenger: org.bukkit.entity.Entity): boolean
                /**
                 * Check if a vehicle has passengers.
                 * @return True if the vehicle has no passengers.
                 */
                // @ts-ignore
                isEmpty(): boolean
                /**
                 * Eject any passenger.
                 * @return True if there was a passenger.
                 */
                // @ts-ignore
                eject(): boolean
                /**
                 * Returns the distance this entity has fallen
                 * @return The distance.
                 */
                // @ts-ignore
                getFallDistance(): number /*float*/
                /**
                 * Sets the fall distance for this entity
                 * @param distance The new distance.
                 */
                // @ts-ignore
                setFallDistance(distance: number /*float*/): void
                /**
                 * Record the last {@link EntityDamageEvent} inflicted on this entity
                 * @param event a {#link EntityDamageEvent}
                 */
                // @ts-ignore
                setLastDamageCause(event: org.bukkit.event.entity.EntityDamageEvent): void
                /**
                 * Retrieve the last {@link EntityDamageEvent} inflicted on this entity.
                 * This event may have been cancelled.
                 * @return the last known {#link EntityDamageEvent} or null if hitherto
                 *      unharmed
                 */
                // @ts-ignore
                getLastDamageCause(): org.bukkit.event.entity.EntityDamageEvent
                /**
                 * Returns a unique and persistent id for this entity
                 * @return unique id
                 */
                // @ts-ignore
                getUniqueId(): java.util.UUID
                /**
                 * Gets the amount of ticks this entity has lived for.
                 * <p>
                 * This is the equivalent to "age" in entities.
                 * @return Age of entity
                 */
                // @ts-ignore
                getTicksLived(): number /*int*/
                /**
                 * Sets the amount of ticks this entity has lived for.
                 * <p>
                 * This is the equivalent to "age" in entities. May not be less than one
                 * tick.
                 * @param value Age of entity
                 */
                // @ts-ignore
                setTicksLived(value: number /*int*/): void
                /**
                 * Performs the specified {@link EntityEffect} for this entity.
                 * <p>
                 * This will be viewable to all players near the entity.
                 * <p>
                 * If the effect is not applicable to this class of entity, it will not play.
                 * @param type Effect to play.
                 */
                // @ts-ignore
                playEffect(type: org.bukkit.EntityEffect): void
                /**
                 * Get the type of the entity.
                 * @return The entity type.
                 */
                // @ts-ignore
                getType(): org.bukkit.entity.EntityType
                /**
                 * Returns whether this entity is inside a vehicle.
                 * @return True if the entity is in a vehicle.
                 */
                // @ts-ignore
                isInsideVehicle(): boolean
                /**
                 * Leave the current vehicle. If the entity is currently in a vehicle (and
                 * is removed from it), true will be returned, otherwise false will be
                 * returned.
                 * @return True if the entity was in a vehicle.
                 */
                // @ts-ignore
                leaveVehicle(): boolean
                /**
                 * Get the vehicle that this player is inside. If there is no vehicle,
                 * null will be returned.
                 * @return The current vehicle.
                 */
                // @ts-ignore
                getVehicle(): org.bukkit.entity.Entity
                /**
                 * Sets whether or not to display the mob's custom name client side. The
                 * name will be displayed above the mob similarly to a player.
                 * <p>
                 * This value has no effect on players, they will always display their
                 * name.
                 * @param flag custom name or not
                 */
                // @ts-ignore
                setCustomNameVisible(flag: boolean): void
                /**
                 * Gets whether or not the mob's custom name is displayed client side.
                 * <p>
                 * This value has no effect on players, they will always display their
                 * name.
                 * @return if the custom name is displayed
                 */
                // @ts-ignore
                isCustomNameVisible(): boolean
                /**
                 * Sets whether the entity has a team colored (default: white) glow.
                 * <b>nb: this refers to the 'Glowing' entity property, not whether a
                 * glowing potion effect is applied</b>
                 * @param flag if the entity is glowing
                 */
                // @ts-ignore
                setGlowing(flag: boolean): void
                /**
                 * Gets whether the entity is glowing or not.
                 * <b>nb: this refers to the 'Glowing' entity property, not whether a
                 * glowing potion effect is applied</b>
                 * @return whether the entity is glowing
                 */
                // @ts-ignore
                isGlowing(): boolean
                /**
                 * Sets whether the entity is invulnerable or not.
                 * <p>
                 * When an entity is invulnerable it can only be damaged by players in
                 * creative mode.
                 * @param flag if the entity is invulnerable
                 */
                // @ts-ignore
                setInvulnerable(flag: boolean): void
                /**
                 * Gets whether the entity is invulnerable or not.
                 * @return whether the entity is
                 */
                // @ts-ignore
                isInvulnerable(): boolean
                /**
                 * Gets whether the entity is silent or not.
                 * @return whether the entity is silent.
                 */
                // @ts-ignore
                isSilent(): boolean
                /**
                 * Sets whether the entity is silent or not.
                 * <p>
                 * When an entity is silent it will not produce any sound.
                 * @param flag if the entity is silent
                 */
                // @ts-ignore
                setSilent(flag: boolean): void
                /**
                 * Returns whether gravity applies to this entity.
                 * @return whether gravity applies
                 */
                // @ts-ignore
                hasGravity(): boolean
                /**
                 * Sets whether gravity applies to this entity.
                 * @param gravity whether gravity should apply
                 */
                // @ts-ignore
                setGravity(gravity: boolean): void
                /**
                 * Gets the period of time (in ticks) before this entity can use a portal.
                 * @return portal cooldown ticks
                 */
                // @ts-ignore
                getPortalCooldown(): number /*int*/
                /**
                 * Sets the period of time (in ticks) before this entity can use a portal.
                 * @param cooldown portal cooldown ticks
                 */
                // @ts-ignore
                setPortalCooldown(cooldown: number /*int*/): void
                /**
                 * Returns a set of tags for this entity.
                 * <br>
                 * Entities can have no more than 1024 tags.
                 * @return a set of tags for this entity
                 */
                // @ts-ignore
                getScoreboardTags(): Array<java.lang.String | string>
                /**
                 * Add a tag to this entity.
                 * <br>
                 * Entities can have no more than 1024 tags.
                 * @param tag the tag to add
                 * @return true if the tag was successfully added
                 */
                // @ts-ignore
                addScoreboardTag(tag: java.lang.String | string): boolean
                /**
                 * Removes a given tag from this entity.
                 * @param tag the tag to remove
                 * @return true if the tag was successfully removed
                 */
                // @ts-ignore
                removeScoreboardTag(tag: java.lang.String | string): boolean
                /**
                 * Returns the reaction of the entity when moved by a piston.
                 * @return reaction
                 */
                // @ts-ignore
                getPistonMoveReaction(): org.bukkit.block.PistonMoveReaction
                /**
                 * Get the closest cardinal {@link BlockFace} direction an entity is
                 * currently facing.
                 * <br>
                 * This will not return any non-cardinal directions such as
                 * {@link BlockFace#UP} or {@link BlockFace#DOWN}.
                 * <br>
                 * {@link Hanging} entities will override this call and thus their behavior
                 * may be different.
                 * @return the entity's current cardinal facing.
                 * @see Hanging
                 * @see Directional#getFacing()
                 */
                // @ts-ignore
                getFacing(): org.bukkit.block.BlockFace
                /**
                 * Gets the entity's current pose.
                 * <b>Note that the pose is only updated at the end of a tick, so may be
                 * inconsistent with other methods. eg {@link Player#isSneaking()} being
                 * true does not imply the current pose will be {@link Pose#SNEAKING}</b>
                 * @return current pose
                 */
                // @ts-ignore
                getPose(): org.bukkit.entity.Pose
                // @ts-ignore
                spigot(): org.bukkit.entity.Entity.Spigot
            }
        }
    }
}
