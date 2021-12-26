declare namespace org {
    namespace bukkit {
        namespace potion {
            /**
             * Represents a type of potion and its effect on an entity.
             */
            // @ts-ignore
            abstract class PotionEffectType extends java.lang.Object {
                // @ts-ignore
                constructor(id: number /*int*/)
                /**
                 * Increases movement speed.
                 */
                // @ts-ignore
                public static readonly SPEED: org.bukkit.potion.PotionEffectType
                /**
                 * Decreases movement speed.
                 */
                // @ts-ignore
                public static readonly SLOW: org.bukkit.potion.PotionEffectType
                /**
                 * Increases dig speed.
                 */
                // @ts-ignore
                public static readonly FAST_DIGGING: org.bukkit.potion.PotionEffectType
                /**
                 * Decreases dig speed.
                 */
                // @ts-ignore
                public static readonly SLOW_DIGGING: org.bukkit.potion.PotionEffectType
                /**
                 * Increases damage dealt.
                 */
                // @ts-ignore
                public static readonly INCREASE_DAMAGE: org.bukkit.potion.PotionEffectType
                /**
                 * Heals an entity.
                 */
                // @ts-ignore
                public static readonly HEAL: org.bukkit.potion.PotionEffectType
                /**
                 * Hurts an entity.
                 */
                // @ts-ignore
                public static readonly HARM: org.bukkit.potion.PotionEffectType
                /**
                 * Increases jump height.
                 */
                // @ts-ignore
                public static readonly JUMP: org.bukkit.potion.PotionEffectType
                /**
                 * Warps vision on the client.
                 */
                // @ts-ignore
                public static readonly CONFUSION: org.bukkit.potion.PotionEffectType
                /**
                 * Regenerates health.
                 */
                // @ts-ignore
                public static readonly REGENERATION: org.bukkit.potion.PotionEffectType
                /**
                 * Decreases damage dealt to an entity.
                 */
                // @ts-ignore
                public static readonly DAMAGE_RESISTANCE: org.bukkit.potion.PotionEffectType
                /**
                 * Stops fire damage.
                 */
                // @ts-ignore
                public static readonly FIRE_RESISTANCE: org.bukkit.potion.PotionEffectType
                /**
                 * Allows breathing underwater.
                 */
                // @ts-ignore
                public static readonly WATER_BREATHING: org.bukkit.potion.PotionEffectType
                /**
                 * Grants invisibility.
                 */
                // @ts-ignore
                public static readonly INVISIBILITY: org.bukkit.potion.PotionEffectType
                /**
                 * Blinds an entity.
                 */
                // @ts-ignore
                public static readonly BLINDNESS: org.bukkit.potion.PotionEffectType
                /**
                 * Allows an entity to see in the dark.
                 */
                // @ts-ignore
                public static readonly NIGHT_VISION: org.bukkit.potion.PotionEffectType
                /**
                 * Increases hunger.
                 */
                // @ts-ignore
                public static readonly HUNGER: org.bukkit.potion.PotionEffectType
                /**
                 * Decreases damage dealt by an entity.
                 */
                // @ts-ignore
                public static readonly WEAKNESS: org.bukkit.potion.PotionEffectType
                /**
                 * Deals damage to an entity over time.
                 */
                // @ts-ignore
                public static readonly POISON: org.bukkit.potion.PotionEffectType
                /**
                 * Deals damage to an entity over time and gives the health to the
                 * shooter.
                 */
                // @ts-ignore
                public static readonly WITHER: org.bukkit.potion.PotionEffectType
                /**
                 * Increases the maximum health of an entity.
                 */
                // @ts-ignore
                public static readonly HEALTH_BOOST: org.bukkit.potion.PotionEffectType
                /**
                 * Increases the maximum health of an entity with health that cannot be
                 * regenerated, but is refilled every 30 seconds.
                 */
                // @ts-ignore
                public static readonly ABSORPTION: org.bukkit.potion.PotionEffectType
                /**
                 * Increases the food level of an entity each tick.
                 */
                // @ts-ignore
                public static readonly SATURATION: org.bukkit.potion.PotionEffectType
                /**
                 * Outlines the entity so that it can be seen from afar.
                 */
                // @ts-ignore
                public static readonly GLOWING: org.bukkit.potion.PotionEffectType
                /**
                 * Causes the entity to float into the air.
                 */
                // @ts-ignore
                public static readonly LEVITATION: org.bukkit.potion.PotionEffectType
                /**
                 * Loot table luck.
                 */
                // @ts-ignore
                public static readonly LUCK: org.bukkit.potion.PotionEffectType
                /**
                 * Loot table unluck.
                 */
                // @ts-ignore
                public static readonly UNLUCK: org.bukkit.potion.PotionEffectType
                /**
                 * Slows entity fall rate.
                 */
                // @ts-ignore
                public static readonly SLOW_FALLING: org.bukkit.potion.PotionEffectType
                /**
                 * Effects granted by a nearby conduit. Includes enhanced underwater abilities.
                 */
                // @ts-ignore
                public static readonly CONDUIT_POWER: org.bukkit.potion.PotionEffectType
                /**
                 * Squee'ek uh'k kk'kkkk squeek eee'eek.
                 */
                // @ts-ignore
                public static readonly DOLPHINS_GRACE: org.bukkit.potion.PotionEffectType
                /**
                 * oof.
                 */
                // @ts-ignore
                public static readonly BAD_OMEN: org.bukkit.potion.PotionEffectType
                /**
                 * \o/.
                 */
                // @ts-ignore
                public static readonly HERO_OF_THE_VILLAGE: org.bukkit.potion.PotionEffectType
                /**
                 * Creates a PotionEffect from this PotionEffectType, applying duration
                 * modifiers and checks.
                 * @see PotionBrewer#createEffect(PotionEffectType, int, int)
                 * @param duration time in ticks
                 * @param amplifier the effect's amplifier
                 * @return a resulting potion effect
                 */
                // @ts-ignore
                public createEffect(duration: number /*int*/, amplifier: number /*int*/): org.bukkit.potion.PotionEffect
                /**
                 * Returns the duration modifier applied to effects of this type.
                 * @return duration modifier
                 * @deprecated unused, always 1.0
                 */
                // @ts-ignore
                public abstract getDurationModifier(): number /*double*/
                /**
                 * Returns the unique ID of this type.
                 * @return Unique ID
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public getId(): number /*int*/
                /**
                 * Returns the name of this effect type.
                 * @return The name of this effect type
                 */
                // @ts-ignore
                public abstract getName(): string
                /**
                 * Returns whether the effect of this type happens once, immediately.
                 * @return whether this type is normally instant
                 */
                // @ts-ignore
                public abstract isInstant(): boolean
                /**
                 * Returns the color of this effect type.
                 * @return the color
                 */
                // @ts-ignore
                public abstract getColor(): org.bukkit.Color
                // @ts-ignore
                public equals(obj: java.lang.Object | any): boolean
                // @ts-ignore
                public hashCode(): number /*int*/
                // @ts-ignore
                public toString(): string
                /**
                 * Gets the effect type specified by the unique id.
                 * @param id Unique ID to fetch
                 * @return Resulting type, or null if not found.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                public static getById(id: number /*int*/): org.bukkit.potion.PotionEffectType
                /**
                 * Gets the effect type specified by the given name.
                 * @param name Name of PotionEffectType to fetch
                 * @return Resulting PotionEffectType, or null if not found.
                 */
                // @ts-ignore
                public static getByName(name: java.lang.String | string): org.bukkit.potion.PotionEffectType
                /**
                 * Registers an effect type with the given object.
                 * <p>
                 * Generally not to be used from within a plugin.
                 * @param type PotionType to register
                 */
                // @ts-ignore
                public static registerPotionEffectType(type: org.bukkit.potion.PotionEffectType): void
                /**
                 * Stops accepting any effect type registrations.
                 */
                // @ts-ignore
                public static stopAcceptingRegistrations(): void
                /**
                 * Returns an array of all the registered {@link PotionEffectType}s.
                 * This array is not necessarily in any particular order.
                 * @return Array of types.
                 */
                // @ts-ignore
                public static values(): org.bukkit.potion.PotionEffectType[]
            }
        }
    }
}
