declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace entity {
                            // @ts-ignore
                            interface ImmutableAreaEffectCloudData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.entity.ImmutableAreaEffectCloudData, org.spongepowered.api.data.manipulator.mutable.entity.AreaEffectCloudData> {
                                /**
                                 * Gets the {@link Color} of this cloud, can be changed.
                                 * @return The color of this cloud
                                 */
                                // @ts-ignore
                                color(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.util.Color>
                                /**
                                 * Gets the {@code radius} value of this cloud.
                                 * @return The radius value of this cloud
                                 */
                                // @ts-ignore
                                radius(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Double | number>
                                /**
                                 * Gets the {@link ParticleType} of this cloud.
                                 * @return The particle type of this cloud
                                 */
                                // @ts-ignore
                                particleType(): org.spongepowered.api.data.value.immutable.ImmutableValue<org.spongepowered.api.effect.particle.ParticleType>
                                /**
                                 * Gets the bounded {@code duration} value of this cloud.
                                 * @return The bounded duration value
                                 */
                                // @ts-ignore
                                duration(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the bounded {@code waitTime} value of this cloud. The wait time
                                 * dictates how long until this cloud will affect {@link Entity} instances
                                 * with {@link PotionEffect}s.
                                 * @return The bounded wait time value
                                 */
                                // @ts-ignore
                                waitTime(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the bounded {@code radiusOnUse} value of this cloud.
                                 * The radius is reduced per {@link Entity} affected.
                                 * Once the radius is {@code 0}, the cloud dissipates.
                                 * @return The bounded radius reduced on use value
                                 */
                                // @ts-ignore
                                radiusOnUse(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Double | number>
                                /**
                                 * Gets the bounded {@code radiusPerTick} value of this cloud.
                                 * The radius is reduced per tick (so technically can be set to
                                 * {@code 0} to have it remain permanent until it's effects have
                                 * been used up.
                                 * @return The bounded radius reduction per tick value
                                 */
                                // @ts-ignore
                                radiusPerTick(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Double | number>
                                /**
                                 * Gets the bounded {@code durationOnUse} value of this cloud.
                                 * The duration on use is reduced for every time that this cloud
                                 * applies it's {@link PotionEffect}s on an {@link Entity}.
                                 * @return The bounded duration on use value
                                 */
                                // @ts-ignore
                                durationOnUse(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the bounded {@code applicationDelay} value of this cloud.
                                 * What this means is the application delay between times of application
                                 * on an {@link Entity}.
                                 * @return The bounded re-application delay value
                                 */
                                // @ts-ignore
                                applicationDelay(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                                /**
                                 * Gets the {@link ListValue} of {@link PotionEffect}s of this cloud.
                                 * The potion effects will affect any {@link Entity} according to the
                                 * various delays and ticks remaining of this cloud.
                                 * @return The list of potion effects
                                 */
                                // @ts-ignore
                                effects(): org.spongepowered.api.data.value.immutable.ImmutableListValue<org.spongepowered.api.effect.potion.PotionEffect>
                                /**
                                 * Gets the bounded {@code age} value of this cloud.
                                 * @return The bounded age value
                                 */
                                // @ts-ignore
                                age(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer | number>
                            }
                        }
                    }
                }
            }
        }
    }
}
