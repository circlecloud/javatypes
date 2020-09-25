declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents a living entity, such as a monster or player
             */
            // @ts-ignore
            interface LivingEntity extends org.bukkit.attribute.Attributable, org.bukkit.entity.Damageable, org.bukkit.projectiles.ProjectileSource {
                /**
                 * Gets the height of the living entity's eyes above its Location.
                 * @return height of the living entity's eyes above its location
                 */
                // @ts-ignore
                getEyeHeight(): number /*double*/
                /**
                 * Gets the height of the living entity's eyes above its Location.
                 * @param ignorePose if set to true, the effects of pose changes, eg
                 *      sneaking and gliding will be ignored
                 * @return height of the living entity's eyes above its location
                 */
                // @ts-ignore
                getEyeHeight(ignorePose: boolean): number /*double*/
                /**
                 * Get a Location detailing the current eye position of the living entity.
                 * @return a location at the eyes of the living entity
                 */
                // @ts-ignore
                getEyeLocation(): org.bukkit.Location
                /**
                 * Gets all blocks along the living entity's line of sight.
                 * <p>
                 * This list contains all blocks from the living entity's eye position to
                 * target inclusive. This method considers all blocks as 1x1x1 in size.
                 * @param transparent Set containing all transparent block Materials (set to
                 *      null for only air)
                 * @param maxDistance this is the maximum distance to scan (may be limited
                 *      by server by at least 100 blocks, no less)
                 * @return list containing all blocks along the living entity's line of
                 *      sight
                 */
                // @ts-ignore
                getLineOfSight(transparent: java.util.Set<org.bukkit.Material> | Array<org.bukkit.Material>, maxDistance: number /*int*/): Array<org.bukkit.block.Block>
                /**
                 * Gets the block that the living entity has targeted.
                 * <p>
                 * This method considers all blocks as 1x1x1 in size. To take exact block
                 * collision shapes into account, see {@link #getTargetBlockExact(int,
                 * FluidCollisionMode)}.
                 * @param transparent Set containing all transparent block Materials (set to
                 *      null for only air)
                 * @param maxDistance this is the maximum distance to scan (may be limited
                 *      by server by at least 100 blocks, no less)
                 * @return block that the living entity has targeted
                 */
                // @ts-ignore
                getTargetBlock(transparent: java.util.Set<org.bukkit.Material> | Array<org.bukkit.Material>, maxDistance: number /*int*/): org.bukkit.block.Block
                /**
                 * Gets the last two blocks along the living entity's line of sight.
                 * <p>
                 * The target block will be the last block in the list. This method
                 * considers all blocks as 1x1x1 in size.
                 * @param transparent Set containing all transparent block Materials (set to
                 *      null for only air)
                 * @param maxDistance this is the maximum distance to scan. This may be
                 *      further limited by the server, but never to less than 100 blocks
                 * @return list containing the last 2 blocks along the living entity's
                 *      line of sight
                 */
                // @ts-ignore
                getLastTwoTargetBlocks(transparent: java.util.Set<org.bukkit.Material> | Array<org.bukkit.Material>, maxDistance: number /*int*/): Array<org.bukkit.block.Block>
                /**
                 * Gets the block that the living entity has targeted.
                 * <p>
                 * This takes the blocks' precise collision shapes into account. Fluids are
                 * ignored.
                 * <p>
                 * This may cause loading of chunks! Some implementations may impose
                 * artificial restrictions on the maximum distance.
                 * @param maxDistance the maximum distance to scan
                 * @return block that the living entity has targeted
                 * @see #getTargetBlockExact(int, org.bukkit.FluidCollisionMode)
                 */
                // @ts-ignore
                getTargetBlockExact(maxDistance: number /*int*/): org.bukkit.block.Block
                /**
                 * Gets the block that the living entity has targeted.
                 * <p>
                 * This takes the blocks' precise collision shapes into account.
                 * <p>
                 * This may cause loading of chunks! Some implementations may impose
                 * artificial restrictions on the maximum distance.
                 * @param maxDistance the maximum distance to scan
                 * @param fluidCollisionMode the fluid collision mode
                 * @return block that the living entity has targeted
                 * @see #rayTraceBlocks(double, FluidCollisionMode)
                 */
                // @ts-ignore
                getTargetBlockExact(maxDistance: number /*int*/, fluidCollisionMode: org.bukkit.FluidCollisionMode): org.bukkit.block.Block
                /**
                 * Performs a ray trace that provides information on the targeted block.
                 * <p>
                 * This takes the blocks' precise collision shapes into account. Fluids are
                 * ignored.
                 * <p>
                 * This may cause loading of chunks! Some implementations may impose
                 * artificial restrictions on the maximum distance.
                 * @param maxDistance the maximum distance to scan
                 * @return information on the targeted block, or <code>null</code> if there
                 *      is no targeted block in range
                 * @see #rayTraceBlocks(double, FluidCollisionMode)
                 */
                // @ts-ignore
                rayTraceBlocks(maxDistance: number /*double*/): org.bukkit.util.RayTraceResult
                /**
                 * Performs a ray trace that provides information on the targeted block.
                 * <p>
                 * This takes the blocks' precise collision shapes into account.
                 * <p>
                 * This may cause loading of chunks! Some implementations may impose
                 * artificial restrictions on the maximum distance.
                 * @param maxDistance the maximum distance to scan
                 * @param fluidCollisionMode the fluid collision mode
                 * @return information on the targeted block, or <code>null</code> if there
                 *      is no targeted block in range
                 * @see World#rayTraceBlocks(Location, Vector, double, FluidCollisionMode)
                 */
                // @ts-ignore
                rayTraceBlocks(maxDistance: number /*double*/, fluidCollisionMode: org.bukkit.FluidCollisionMode): org.bukkit.util.RayTraceResult
                /**
                 * Returns the amount of air that the living entity has remaining, in
                 * ticks.
                 * @return amount of air remaining
                 */
                // @ts-ignore
                getRemainingAir(): number /*int*/
                /**
                 * Sets the amount of air that the living entity has remaining, in ticks.
                 * @param ticks amount of air remaining
                 */
                // @ts-ignore
                setRemainingAir(ticks: number /*int*/): void
                /**
                 * Returns the maximum amount of air the living entity can have, in ticks.
                 * @return maximum amount of air
                 */
                // @ts-ignore
                getMaximumAir(): number /*int*/
                /**
                 * Sets the maximum amount of air the living entity can have, in ticks.
                 * @param ticks maximum amount of air
                 */
                // @ts-ignore
                setMaximumAir(ticks: number /*int*/): void
                /**
                 * Gets the time in ticks until the next arrow leaves the entity's body.
                 * @return ticks until arrow leaves
                 */
                // @ts-ignore
                getArrowCooldown(): number /*int*/
                /**
                 * Sets the time in ticks until the next arrow leaves the entity's body.
                 * @param ticks time until arrow leaves
                 */
                // @ts-ignore
                setArrowCooldown(ticks: number /*int*/): void
                /**
                 * Gets the amount of arrows in an entity's body.
                 * @return amount of arrows in body
                 */
                // @ts-ignore
                getArrowsInBody(): number /*int*/
                /**
                 * Set the amount of arrows in the entity's body.
                 * @param count amount of arrows in entity's body
                 */
                // @ts-ignore
                setArrowsInBody(count: number /*int*/): void
                /**
                 * Returns the living entity's current maximum no damage ticks.
                 * <p>
                 * This is the maximum duration in which the living entity will not take
                 * damage.
                 * @return maximum no damage ticks
                 */
                // @ts-ignore
                getMaximumNoDamageTicks(): number /*int*/
                /**
                 * Sets the living entity's current maximum no damage ticks.
                 * @param ticks maximum amount of no damage ticks
                 */
                // @ts-ignore
                setMaximumNoDamageTicks(ticks: number /*int*/): void
                /**
                 * Returns the living entity's last damage taken in the current no damage
                 * ticks time.
                 * <p>
                 * Only damage higher than this amount will further damage the living
                 * entity.
                 * @return damage taken since the last no damage ticks time period
                 */
                // @ts-ignore
                getLastDamage(): number /*double*/
                /**
                 * Sets the damage dealt within the current no damage ticks time period.
                 * @param damage amount of damage
                 */
                // @ts-ignore
                setLastDamage(damage: number /*double*/): void
                /**
                 * Returns the living entity's current no damage ticks.
                 * @return amount of no damage ticks
                 */
                // @ts-ignore
                getNoDamageTicks(): number /*int*/
                /**
                 * Sets the living entity's current no damage ticks.
                 * @param ticks amount of no damage ticks
                 */
                // @ts-ignore
                setNoDamageTicks(ticks: number /*int*/): void
                /**
                 * Gets the player identified as the killer of the living entity.
                 * <p>
                 * May be null.
                 * @return killer player, or null if none found
                 */
                // @ts-ignore
                getKiller(): org.bukkit.entity.Player
                /**
                 * Adds the given {@link PotionEffect} to the living entity.
                 * @param effect PotionEffect to be added
                 * @return whether the effect could be added
                 */
                // @ts-ignore
                addPotionEffect(effect: org.bukkit.potion.PotionEffect): boolean
                /**
                 * Adds the given {@link PotionEffect} to the living entity.
                 * <p>
                 * Only one potion effect can be present for a given {@link
                 * PotionEffectType}.
                 * @param effect PotionEffect to be added
                 * @param force whether conflicting effects should be removed
                 * @return whether the effect could be added
                 * @deprecated no need to force since multiple effects of the same type are
                 *  now supported.
                 */
                // @ts-ignore
                addPotionEffect(effect: org.bukkit.potion.PotionEffect, force: boolean): boolean
                /**
                 * Attempts to add all of the given {@link PotionEffect} to the living
                 * entity.
                 * @param effects the effects to add
                 * @return whether all of the effects could be added
                 */
                // @ts-ignore
                addPotionEffects(effects: java.util.Collection<org.bukkit.potion.PotionEffect> | Array<org.bukkit.potion.PotionEffect>): boolean
                /**
                 * Returns whether the living entity already has an existing effect of
                 * the given {@link PotionEffectType} applied to it.
                 * @param type the potion type to check
                 * @return whether the living entity has this potion effect active on them
                 */
                // @ts-ignore
                hasPotionEffect(type: org.bukkit.potion.PotionEffectType): boolean
                /**
                 * Returns the active {@link PotionEffect} of the specified type.
                 * <p>
                 * If the effect is not present on the entity then null will be returned.
                 * @param type the potion type to check
                 * @return the effect active on this entity, or null if not active.
                 */
                // @ts-ignore
                getPotionEffect(type: org.bukkit.potion.PotionEffectType): org.bukkit.potion.PotionEffect
                /**
                 * Removes any effects present of the given {@link PotionEffectType}.
                 * @param type the potion type to remove
                 */
                // @ts-ignore
                removePotionEffect(type: org.bukkit.potion.PotionEffectType): void
                /**
                 * Returns all currently active {@link PotionEffect}s on the living
                 * entity.
                 * @return a collection of {#link PotionEffect}s
                 */
                // @ts-ignore
                getActivePotionEffects(): Array<org.bukkit.potion.PotionEffect>
                /**
                 * Checks whether the living entity has block line of sight to another.
                 * <p>
                 * This uses the same algorithm that hostile mobs use to find the closest
                 * player.
                 * @param other the entity to determine line of sight to
                 * @return true if there is a line of sight, false if not
                 */
                // @ts-ignore
                hasLineOfSight(other: org.bukkit.entity.Entity): boolean
                /**
                 * Returns if the living entity despawns when away from players or not.
                 * <p>
                 * By default, animals are not removed while other mobs are.
                 * @return true if the living entity is removed when away from players
                 */
                // @ts-ignore
                getRemoveWhenFarAway(): boolean
                /**
                 * Sets whether or not the living entity despawns when away from players
                 * or not.
                 * @param remove the removal status
                 */
                // @ts-ignore
                setRemoveWhenFarAway(remove: boolean): void
                /**
                 * Gets the inventory with the equipment worn by the living entity.
                 * @return the living entity's inventory
                 */
                // @ts-ignore
                getEquipment(): org.bukkit.inventory.EntityEquipment
                /**
                 * Sets whether or not the living entity can pick up items.
                 * @param pickup whether or not the living entity can pick up items
                 */
                // @ts-ignore
                setCanPickupItems(pickup: boolean): void
                /**
                 * Gets if the living entity can pick up items.
                 * @return whether or not the living entity can pick up items
                 */
                // @ts-ignore
                getCanPickupItems(): boolean
                /**
                 * Returns whether the entity is currently leashed.
                 * @return whether the entity is leashed
                 */
                // @ts-ignore
                isLeashed(): boolean
                /**
                 * Gets the entity that is currently leading this entity.
                 * @return the entity holding the leash
                 * @throws IllegalStateException if not currently leashed
                 */
                // @ts-ignore
                getLeashHolder(): org.bukkit.entity.Entity
                /**
                 * Sets the leash on this entity to be held by the supplied entity.
                 * <p>
                 * This method has no effect on EnderDragons, Withers, Players, or Bats.
                 * Non-living entities excluding leashes will not persist as leash
                 * holders.
                 * @param holder the entity to leash this entity to, or null to unleash
                 * @return whether the operation was successful
                 */
                // @ts-ignore
                setLeashHolder(holder: org.bukkit.entity.Entity): boolean
                /**
                 * Checks to see if an entity is gliding, such as using an Elytra.
                 * @return True if this entity is gliding.
                 */
                // @ts-ignore
                isGliding(): boolean
                /**
                 * Makes entity start or stop gliding. This will work even if an Elytra
                 * is not equipped, but will be reverted by the server immediately after
                 * unless an event-cancelling mechanism is put in place.
                 * @param gliding True if the entity is gliding.
                 */
                // @ts-ignore
                setGliding(gliding: boolean): void
                /**
                 * Checks to see if an entity is swimming.
                 * @return True if this entity is swimming.
                 */
                // @ts-ignore
                isSwimming(): boolean
                /**
                 * Makes entity start or stop swimming.
                 * This may have unexpected results if the entity is not in water.
                 * @param swimming True if the entity is swimming.
                 */
                // @ts-ignore
                setSwimming(swimming: boolean): void
                /**
                 * Checks to see if an entity is currently using the Riptide enchantment.
                 * @return True if this entity is currently riptiding.
                 */
                // @ts-ignore
                isRiptiding(): boolean
                /**
                 * Returns whether this entity is slumbering.
                 * @return slumber state
                 */
                // @ts-ignore
                isSleeping(): boolean
                /**
                 * Sets whether an entity will have AI.
                 * The entity will be completely unable to move if it has no AI.
                 * @param ai whether the mob will have AI or not.
                 */
                // @ts-ignore
                setAI(ai: boolean): void
                /**
                 * Checks whether an entity has AI.
                 * The entity will be completely unable to move if it has no AI.
                 * @return true if the entity has AI, otherwise false.
                 */
                // @ts-ignore
                hasAI(): boolean
                /**
                 * Makes this entity attack the given entity with a melee attack.
                 * Attack damage is calculated by the server from the attributes and
                 * equipment of this mob, and knockback is applied to {@code target} as
                 * appropriate.
                 * @param target entity to attack.
                 */
                // @ts-ignore
                attack(target: org.bukkit.entity.Entity): void
                /**
                 * Makes this entity swing their main hand.
                 * This method does nothing if this entity does not have an animation for
                 * swinging their main hand.
                 */
                // @ts-ignore
                swingMainHand(): void
                /**
                 * Makes this entity swing their off hand.
                 * This method does nothing if this entity does not have an animation for
                 * swinging their off hand.
                 */
                // @ts-ignore
                swingOffHand(): void
                /**
                 * Set if this entity will be subject to collisions with other entities.
                 * <p>
                 * Exemptions to this rule can be managed with
                 * {@link #getCollidableExemptions()}
                 * @param collidable collision status
                 */
                // @ts-ignore
                setCollidable(collidable: boolean): void
                /**
                 * Gets if this entity is subject to collisions with other entities.
                 * <p>
                 * Some entities might be exempted from the collidable rule of this entity.
                 * Use {@link #getCollidableExemptions()} to get these.
                 * <p>
                 * Please note that this method returns only the custom collidable state,
                 * not whether the entity is non-collidable for other reasons such as being
                 * dead.
                 * @return collision status
                 */
                // @ts-ignore
                isCollidable(): boolean
                /**
                 * Gets a mutable set of UUIDs of the entities which are exempt from the
                 * entity's collidable rule and which's collision with this entity will
                 * behave the opposite of it.
                 * <p>
                 * This set can be modified to add or remove exemptions.
                 * <p>
                 * For example if collidable is true and an entity is in the exemptions set
                 * then it will not collide with it. Similarly if collidable is false and an
                 * entity is in this set then it will still collide with it.
                 * <p>
                 * Note these exemptions are not (currently) persistent.
                 * @return the collidable exemption set
                 */
                // @ts-ignore
                getCollidableExemptions(): Array<java.util.UUID>
                /**
                 * Returns the value of the memory specified.
                 * <p>
                 * Note that the value is null when the specific entity does not have that
                 * value by default.
                 * @param memoryKey memory to access
                 * @param <T> the type of the return value
                 * @return a instance of the memory section value or null if not present
                 */
                // @ts-ignore
                getMemory<T>(memoryKey: org.bukkit.entity.memory.MemoryKey<T>): T
                /**
                 * Sets the value of the memory specified.
                 * <p>
                 * Note that the value will not be persisted when the specific entity does
                 * not have that value by default.
                 * @param memoryKey the memory to access
                 * @param memoryValue a typed memory value
                 * @param <T> the type of the passed value
                 */
                // @ts-ignore
                setMemory<T>(memoryKey: org.bukkit.entity.memory.MemoryKey<T>, memoryValue: T): void
                /**
                 * Get the category to which this entity belongs.
                 * Categories may subject this entity to additional effects, benefits or
                 * debuffs.
                 * @return the entity category
                 */
                // @ts-ignore
                getCategory(): org.bukkit.entity.EntityCategory
                /**
                 * Sets whether the entity is invisible or not.
                 * @param invisible If the entity is invisible
                 */
                // @ts-ignore
                setInvisible(invisible: boolean): void
                /**
                 * Gets whether the entity is invisible or not.
                 * @return Whether the entity is invisible
                 */
                // @ts-ignore
                isInvisible(): boolean
            }
        }
    }
}
