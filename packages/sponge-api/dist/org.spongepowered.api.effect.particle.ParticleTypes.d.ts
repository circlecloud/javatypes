declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace particle {
                    /**
                     * An enumeration of all possible {@link ParticleType}s in vanilla minecraft.
                     */
                    // @ts-ignore
                    class ParticleTypes extends java.lang.Object {
                        // @ts-ignore
                        public static readonly AMBIENT_MOB_SPELL: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly ANGRY_VILLAGER: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly BARRIER: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly BLOCK_CRACK: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly BLOCK_DUST: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * This particle type will play the effect of a block that
                         * is being broken and it's break sound.
                         * <p>This type has limited {@link ParticleOption}s, only
                         * {@link ParticleOptions#BLOCK_STATE} and
                         * {@link ParticleOptions#ITEM_STACK_SNAPSHOT} are supported.</p>
                         */
                        // @ts-ignore
                        public static readonly BREAK_BLOCK: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly CLOUD: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly CRITICAL_HIT: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly DAMAGE_INDICATOR: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly DRAGON_BREATH: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly DRAGON_BREATH_ATTACK: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly DRIP_LAVA: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly DRIP_WATER: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly ENCHANTING_GLYPHS: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly ENDER_TELEPORT: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly END_ROD: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly EXPLOSION: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly FALLING_DUST: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * This particle type will play the effect that will occur when
                         * a {@link Player} uses bone meal on a plant to boost the growth.
                         * <p>This type has limited {@link ParticleOption}s, only
                         * {@link ParticleOptions#QUANTITY} is supported.</p>
                         * <p>This type can no longer be spawned on air blocks. It will only
                         * show up if spawned at the location of solid blocks.</p>
                         */
                        // @ts-ignore
                        public static readonly FERTILIZER: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * This particle type will play a fireworks effect.
                         * <p>This type has limited {@link ParticleOption}s, only
                         * {@link ParticleOptions#FIREWORK_EFFECTS} is supported.</p>
                         */
                        // @ts-ignore
                        public static readonly FIREWORKS: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly FIREWORKS_SPARK: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * This particle type will play the smoke particles of a fire.
                         * <p>This type has limited {@link ParticleOption}s, only
                         * {@link ParticleOptions#DIRECTION} is supported.</p>
                         */
                        // @ts-ignore
                        public static readonly FIRE_SMOKE: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly FLAME: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly FOOTSTEP: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly GUARDIAN_APPEARANCE: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly HAPPY_VILLAGER: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly HEART: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly HUGE_EXPLOSION: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * While this particle type the option {@link ParticleOptions#VELOCITY}
                         * supports, this will only affect the velocity in the y direction.
                         */
                        // @ts-ignore
                        public static readonly INSTANT_SPELL: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly ITEM_CRACK: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly LARGE_EXPLOSION: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly LARGE_SMOKE: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly LAVA: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly MAGIC_CRITICAL_HIT: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly MOBSPAWNER_FLAMES: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly MOB_SPELL: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly NOTE: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly PORTAL: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly REDSTONE_DUST: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly SLIME: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly SMOKE: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly SNOWBALL: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly SNOW_SHOVEL: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * While this particle type the option {@link ParticleOptions#VELOCITY}
                         * supports, this will only affect the velocity in the y direction.
                         */
                        // @ts-ignore
                        public static readonly SPELL: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly SPLASH_POTION: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly SUSPENDED: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly SUSPENDED_DEPTH: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly SWEEP_ATTACK: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly TOWN_AURA: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly WATER_BUBBLE: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly WATER_DROP: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly WATER_SPLASH: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        public static readonly WATER_WAKE: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * While this particle type the option {@link ParticleOptions#VELOCITY}
                         * supports, this will only affect the velocity in the y direction.
                         */
                        // @ts-ignore
                        public static readonly WITCH_SPELL: org.spongepowered.api.effect.particle.ParticleType
                    }
                }
            }
        }
    }
}
