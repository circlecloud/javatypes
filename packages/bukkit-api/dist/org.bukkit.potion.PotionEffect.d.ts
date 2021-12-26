declare namespace org {
    namespace bukkit {
        namespace potion {
            /**
             * Represents a potion effect, that can be added to a {@link LivingEntity}. A
             * potion effect has a duration that it will last for, an amplifier that will
             * enhance its effects, and a {@link PotionEffectType}, that represents its
             * effect on an entity.
             */
            // @ts-ignore
            class PotionEffect extends java.lang.Object implements org.bukkit.configuration.serialization.ConfigurationSerializable {
                /**
                 * Creates a potion effect.
                 * @param type effect type
                 * @param duration measured in ticks, see {#link
                 *      PotionEffect#getDuration()}
                 * @param amplifier the amplifier, see {#link PotionEffect#getAmplifier()}
                 * @param ambient the ambient status, see {#link PotionEffect#isAmbient()}
                 * @param particles the particle status, see {#link PotionEffect#hasParticles()}
                 * @param icon the icon status, see {#link PotionEffect#hasIcon()}
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionEffectType, duration: number /*int*/, amplifier: number /*int*/, ambient: boolean, particles: boolean, icon: boolean)
                /**
                 * Creates a potion effect with no defined color.
                 * @param type effect type
                 * @param duration measured in ticks, see {#link
                 *      PotionEffect#getDuration()}
                 * @param amplifier the amplifier, see {#link PotionEffect#getAmplifier()}
                 * @param ambient the ambient status, see {#link PotionEffect#isAmbient()}
                 * @param particles the particle status, see {#link PotionEffect#hasParticles()}
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionEffectType, duration: number /*int*/, amplifier: number /*int*/, ambient: boolean, particles: boolean)
                /**
                 * Creates a potion effect. Assumes that particles are visible
                 * @param type effect type
                 * @param duration measured in ticks, see {#link
                 *      PotionEffect#getDuration()}
                 * @param amplifier the amplifier, see {#link PotionEffect#getAmplifier()}
                 * @param ambient the ambient status, see {#link PotionEffect#isAmbient()}
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionEffectType, duration: number /*int*/, amplifier: number /*int*/, ambient: boolean)
                /**
                 * Creates a potion effect. Assumes ambient is true.
                 * @param type Effect type
                 * @param duration measured in ticks
                 * @param amplifier the amplifier for the effect
                 * @see PotionEffect#PotionEffect(PotionEffectType, int, int, boolean)
                 */
                // @ts-ignore
                constructor(type: org.bukkit.potion.PotionEffectType, duration: number /*int*/, amplifier: number /*int*/)
                /**
                 * Constructor for deserialization.
                 * @param map the map to deserialize from
                 */
                // @ts-ignore
                constructor(map: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                // @ts-ignore
                public serialize(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Attempts to add the effect represented by this object to the given
                 * {@link LivingEntity}.
                 * @param entity The entity to add this effect to
                 * @return Whether the effect could be added
                 * @see LivingEntity#addPotionEffect(PotionEffect)
                 */
                // @ts-ignore
                public apply(entity: org.bukkit.entity.LivingEntity): boolean
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                /**
                 * Returns the amplifier of this effect. A higher amplifier means the
                 * potion effect happens more often over its duration and in some cases
                 * has more effect on its target.
                 * @return The effect amplifier
                 */
                // @ts-ignore
                public getAmplifier(): number /*int*/
                /**
                 * Returns the duration (in ticks) that this effect will run for when
                 * applied to a {@link LivingEntity}.
                 * @return The duration of the effect
                 */
                // @ts-ignore
                public getDuration(): number /*int*/
                /**
                 * Returns the {@link PotionEffectType} of this effect.
                 * @return The potion type of this effect
                 */
                // @ts-ignore
                public getType(): org.bukkit.potion.PotionEffectType
                /**
                 * Makes potion effect produce more, translucent, particles.
                 * @return if this effect is ambient
                 */
                // @ts-ignore
                public isAmbient(): boolean
                /**
                 * @return whether this effect has particles or not
                 */
                // @ts-ignore
                public hasParticles(): boolean
                /**
                 * @return color of this potion's particles. May be null if the potion has no particles or defined color.
                 * @deprecated color is not part of potion effects
                 */
                // @ts-ignore
                public getColor(): org.bukkit.Color
                /**
                 * @return whether this effect has an icon or not
                 */
                // @ts-ignore
                public hasIcon(): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
