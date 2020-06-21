declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Represents an area effect cloud which will imbue a potion effect onto
             * entities which enter it.
             */
            // @ts-ignore
            interface AreaEffectCloud extends org.bukkit.entity.Entity {
                /**
                 * Gets the duration which this cloud will exist for (in ticks).
                 * @return cloud duration
                 */
                // @ts-ignore
                getDuration(): number /*int*/
                /**
                 * Sets the duration which this cloud will exist for (in ticks).
                 * @param duration cloud duration
                 */
                // @ts-ignore
                setDuration(duration: number /*int*/): void
                /**
                 * Gets the time which an entity has to be exposed to the cloud before the
                 * effect is applied.
                 * @return wait time
                 */
                // @ts-ignore
                getWaitTime(): number /*int*/
                /**
                 * Sets the time which an entity has to be exposed to the cloud before the
                 * effect is applied.
                 * @param waitTime wait time
                 */
                // @ts-ignore
                setWaitTime(waitTime: number /*int*/): void
                /**
                 * Gets the time that an entity will be immune from subsequent exposure.
                 * @return reapplication delay
                 */
                // @ts-ignore
                getReapplicationDelay(): number /*int*/
                /**
                 * Sets the time that an entity will be immune from subsequent exposure.
                 * @param delay reapplication delay
                 */
                // @ts-ignore
                setReapplicationDelay(delay: number /*int*/): void
                /**
                 * Gets the amount that the duration of this cloud will decrease by when it
                 * applies an effect to an entity.
                 * @return duration on use delta
                 */
                // @ts-ignore
                getDurationOnUse(): number /*int*/
                /**
                 * Sets the amount that the duration of this cloud will decrease by when it
                 * applies an effect to an entity.
                 * @param duration duration on use delta
                 */
                // @ts-ignore
                setDurationOnUse(duration: number /*int*/): void
                /**
                 * Gets the initial radius of the cloud.
                 * @return radius
                 */
                // @ts-ignore
                getRadius(): number /*float*/
                /**
                 * Sets the initial radius of the cloud.
                 * @param radius radius
                 */
                // @ts-ignore
                setRadius(radius: number /*float*/): void
                /**
                 * Gets the amount that the radius of this cloud will decrease by when it
                 * applies an effect to an entity.
                 * @return radius on use delta
                 */
                // @ts-ignore
                getRadiusOnUse(): number /*float*/
                /**
                 * Sets the amount that the radius of this cloud will decrease by when it
                 * applies an effect to an entity.
                 * @param radius radius on use delta
                 */
                // @ts-ignore
                setRadiusOnUse(radius: number /*float*/): void
                /**
                 * Gets the amount that the radius of this cloud will decrease by each tick.
                 * @return radius per tick delta
                 */
                // @ts-ignore
                getRadiusPerTick(): number /*float*/
                /**
                 * Gets the amount that the radius of this cloud will decrease by each tick.
                 * @param radius per tick delta
                 */
                // @ts-ignore
                setRadiusPerTick(radius: number /*float*/): void
                /**
                 * Gets the particle which this cloud will be composed of
                 * @return particle the set particle type
                 */
                // @ts-ignore
                getParticle(): org.bukkit.Particle
                /**
                 * Sets the particle which this cloud will be composed of
                 * @param particle the new particle type
                 */
                // @ts-ignore
                setParticle(particle: org.bukkit.Particle): void
                /**
                 * Sets the particle which this cloud will be composed of
                 * @param <T> type of particle data (see {#link Particle#getDataType()}
                 * @param particle the new particle type
                 * @param data the data to use for the particle or null,
                 *              the type of this depends on {#link Particle#getDataType()}
                 */
                // @ts-ignore
                setParticle<T>(particle: org.bukkit.Particle, data: T): void
                /**
                 * Sets the underlying potion data
                 * @param data PotionData to set the base potion state to
                 */
                // @ts-ignore
                setBasePotionData(data: org.bukkit.potion.PotionData): void
                /**
                 * Returns the potion data about the base potion
                 * @return a PotionData object
                 */
                // @ts-ignore
                getBasePotionData(): org.bukkit.potion.PotionData
                /**
                 * Checks for the presence of custom potion effects.
                 * @return true if custom potion effects are applied
                 */
                // @ts-ignore
                hasCustomEffects(): boolean
                /**
                 * Gets an immutable list containing all custom potion effects applied to
                 * this cloud.
                 * <p>
                 * Plugins should check that hasCustomEffects() returns true before calling
                 * this method.
                 * @return the immutable list of custom potion effects
                 */
                // @ts-ignore
                getCustomEffects(): Array<org.bukkit.potion.PotionEffect>
                /**
                 * Adds a custom potion effect to this cloud.
                 * @param effect the potion effect to add
                 * @param overwrite true if any existing effect of the same type should be
                 *  overwritten
                 * @return true if the effect was added as a result of this call
                 */
                // @ts-ignore
                addCustomEffect(effect: org.bukkit.potion.PotionEffect, overwrite: boolean): boolean
                /**
                 * Removes a custom potion effect from this cloud.
                 * @param type the potion effect type to remove
                 * @return true if the an effect was removed as a result of this call
                 */
                // @ts-ignore
                removeCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean
                /**
                 * Checks for a specific custom potion effect type on this cloud.
                 * @param type the potion effect type to check for
                 * @return true if the potion has this effect
                 */
                // @ts-ignore
                hasCustomEffect(type: org.bukkit.potion.PotionEffectType): boolean
                /**
                 * Removes all custom potion effects from this cloud.
                 */
                // @ts-ignore
                clearCustomEffects(): void
                /**
                 * Gets the color of this cloud. Will be applied as a tint to its particles.
                 * @return cloud color
                 */
                // @ts-ignore
                getColor(): org.bukkit.Color
                /**
                 * Sets the color of this cloud. Will be applied as a tint to its particles.
                 * @param color cloud color
                 */
                // @ts-ignore
                setColor(color: org.bukkit.Color): void
                /**
                 * Retrieve the original source of this cloud.
                 * @return the {#link ProjectileSource} that threw the LingeringPotion
                 */
                // @ts-ignore
                getSource(): org.bukkit.projectiles.ProjectileSource
                /**
                 * Set the original source of this cloud.
                 * @param source the {#link ProjectileSource} that threw the LingeringPotion
                 */
                // @ts-ignore
                setSource(source: org.bukkit.projectiles.ProjectileSource): void
            }
        }
    }
}
