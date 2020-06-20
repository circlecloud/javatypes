declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    /**
                     * Represents an entity that is living, and therefor can be damaged.
                     * <p>Living entities can have {@link PotionEffect}s, breathing air
                     * under water, custom names, be meaningfully added to teams, and become
                     * invisible.</p>
                     */
                    // @ts-ignore
                    interface Living extends org.spongepowered.api.entity.Entity, org.spongepowered.api.entity.projectile.source.ProjectileSource, org.spongepowered.api.scoreboard.TeamMember {
                        /**
                         * Gets a copy of the current {@link HealthData}.
                         * @return A copy of the current health data
                         */
                        // @ts-ignore
                        getHealthData(): org.spongepowered.api.data.manipulator.mutable.entity.HealthData
                        /**
                         * Returns the health amount.
                         * <p>The range of the health depends on the object on which this
                         * method is defined. For players in Minecraft, the nominal range is
                         * between 0 and 20, inclusive, but the range can be adjusted.</p>
                         * <p>Convention dictates that health does not follow below 0 but this
                         * convention may be broken.</p>
                         * @return Health value
                         */
                        // @ts-ignore
                        health(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>
                        /**
                         * Gets the current maximum health.
                         * <p>The maximum health set here may affect the attribute increasing
                         * health points. The base health should be minded that it may be lower
                         * than the total maximum health of this entity.</p>
                         * @return This entities maximum health
                         */
                        // @ts-ignore
                        maxHealth(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double>
                        /**
                         * Gets a copy of the current {@link DamageableData}.
                         * @return A copy of the current damageable data
                         */
                        // @ts-ignore
                        getDamageableData(): org.spongepowered.api.data.manipulator.mutable.entity.DamageableData
                        /**
                         * Gets the {@link OptionalValue} for the last attacker.
                         * <p>This is generally an entity snapshot of a {@link Living}.</p>
                         * @return The last attacker as an optional value
                         */
                        // @ts-ignore
                        lastAttacker(): org.spongepowered.api.data.value.mutable.OptionalValue<org.spongepowered.api.entity.EntitySnapshot>
                        /**
                         * Gets the last amount of damage dealt as an optional value.
                         * @return The last damage dealt as an optional value
                         */
                        // @ts-ignore
                        lastDamage(): org.spongepowered.api.data.value.mutable.OptionalValue<java.lang.Double>
                        /**
                         * Returns this entity's head rotation.
                         * <p>The format of the rotation is represented by:</p>
                         * <ul><code>x -> pitch</code>, <code>y -> yaw</code>, <code>z -> roll
                         * </code></ul>
                         * <p>Note that the pitch will be the same x value returned by
                         * {@link Entity#getRotation()} and Minecraft does not currently support
                         * head roll so the z value will always be zero.</p>
                         * @return Head rotation
                         */
                        // @ts-ignore
                        getHeadRotation(): Vector3d
                        /**
                         * Sets the entity's head rotation.
                         * <p>The format of the rotation is represented by:</p>
                         * <ul><code>x -> pitch</code>, <code>y -> yaw</code>, <code>z -> roll
                         * </code></ul>
                         * <p>Note that the pitch (x value) supplied will update the entity's pitch
                         * via {@link Entity#setRotation(Vector3d)}.</p>
                         * @param rotation Rotation of the entities head
                         */
                        // @ts-ignore
                        setHeadRotation(rotation: Vector3d): void
                        /**
                         * Makes the entity look at the specified target position.
                         * @param targetPos Position to target
                         */
                        // @ts-ignore
                        lookAt(targetPos: Vector3d): void
                    }
                }
            }
        }
    }
}
