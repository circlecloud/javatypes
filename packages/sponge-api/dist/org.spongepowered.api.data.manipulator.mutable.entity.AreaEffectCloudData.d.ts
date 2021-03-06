declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace entity {
                            // @ts-ignore
                            interface AreaEffectCloudData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.entity.AreaEffectCloudData, org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAreaEffectCloudData> {
                                /**
                                 * Gets the {@link Color} of this cloud, can be changed.
                                 * @return The color of this cloud
                                 * @see Keys#AREA_EFFECT_CLOUD_COLOR
                                 */
                                // @ts-ignore
                                color(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.util.Color>
                                /**
                                 * Gets the {@code radius} value of this cloud.
                                 * @return The radius value of this cloud
                                 * @see Keys#AREA_EFFECT_CLOUD_RADIUS
                                 */
                                // @ts-ignore
                                radius(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double | number>
                                /**
                                 * Gets the {@link ParticleType} of this cloud.
                                 * @return The particle type of this cloud
                                 * @see Keys#AREA_EFFECT_CLOUD_PARTICLE_TYPE
                                 */
                                // @ts-ignore
                                particleType(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.effect.particle.ParticleType>
                                /**
                                 * Gets the bounded {@code duration} value of this cloud.
                                 * @return The bounded duration value
                                 * @see Keys#AREA_EFFECT_CLOUD_DURATION
                                 */
                                // @ts-ignore
                                duration(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the bounded {@code waitTime} value of this cloud. The wait time
                                 * dictates how long until this cloud will affect {@link Entity} instances
                                 * with {@link PotionEffect}s.
                                 * @return The bounded wait time value
                                 * @see Keys#AREA_EFFECT_CLOUD_WAIT_TIME
                                 */
                                // @ts-ignore
                                waitTime(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the bounded {@code radiusOnUse} value of this cloud.
                                 * The radius is modified per {@link Entity} affected.
                                 * Once the radius is {@code 0}, the cloud dissipates.
                                 * <p>A positive radiusOnUse value will make the cloud grow, a negative
                                 * one will make it shrink.</p>
                                 * @return The bounded radius reduced on use value
                                 * @see Keys#AREA_EFFECT_CLOUD_RADIUS_ON_USE
                                 */
                                // @ts-ignore
                                radiusOnUse(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double | number>
                                /**
                                 * Gets the bounded {@code radiusPerTick} value of this cloud.
                                 * <p>The radius is increased every tick. A radiusPerTick of 0 will cause
                                 * the cloud to stay at its original size until its duration runs out, a
                                 * positive number will make it grow, and a negative number will make it
                                 * shrink whenever it applies its effect.
                                 * @return The bounded radius reduction per tick value
                                 * @see Keys#AREA_EFFECT_CLOUD_RADIUS_PER_TICK
                                 */
                                // @ts-ignore
                                radiusPerTick(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Double | number>
                                /**
                                 * Gets the bounded {@code durationOnUse} value of this cloud.
                                 * The duration on use is added to the duration for every time
                                 * that this cloud applies it's {@link PotionEffect}s on an
                                 * {@link Entity}.
                                 * <p>If the duration on use is negative, every application of
                                 * an effect to an entity will decrease the cloud's duration</p>
                                 * @return The bounded duration on use value
                                 * @see Keys#AREA_EFFECT_CLOUD_DURATION_ON_USE
                                 */
                                // @ts-ignore
                                durationOnUse(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the bounded {@code applicationDelay} value of this cloud.
                                 * What this means is the application delay between times of application
                                 * on an {@link Entity}.
                                 * @return The bounded re-application delay value
                                 * @see Keys#AREA_EFFECT_CLOUD_REAPPLICATION_DELAY
                                 */
                                // @ts-ignore
                                applicationDelay(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the {@link ListValue} of {@link PotionEffect}s of this cloud.
                                 * The potion effects will affect any {@link Entity} according to the
                                 * various delays and ticks remaining of this cloud.
                                 * @return The list of potion effects
                                 * @see Keys#POTION_EFFECTS
                                 */
                                // @ts-ignore
                                effects(): org.spongepowered.api.data.value.mutable.ListValue<org.spongepowered.api.effect.potion.PotionEffect>
                                /**
                                 * Gets the bounded {@code age} value of this cloud.
                                 * @return The bounded age value
                                 * @see Keys#AREA_EFFECT_CLOUD_AGE
                                 */
                                // @ts-ignore
                                age(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
