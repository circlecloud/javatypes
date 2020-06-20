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
                        readonly AMBIENT_MOB_SPELL: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly ANGRY_VILLAGER: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly BARRIER: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly BLOCK_CRACK: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly BLOCK_DUST: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * This particle type will play the effect of a block that
                         * is being broken and it's break sound.
                         * <p>This type has limited {@link ParticleOption}s, only
                         * {@link ParticleOptions#BLOCK_STATE} and
                         * {@link ParticleOptions#ITEM_STACK_SNAPSHOT} are supported.</p>
                         */
                        // @ts-ignore
                        readonly BREAK_BLOCK: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly CLOUD: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly CRITICAL_HIT: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly DAMAGE_INDICATOR: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly DRAGON_BREATH: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly DRAGON_BREATH_ATTACK: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly DRIP_LAVA: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly DRIP_WATER: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly ENCHANTING_GLYPHS: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly ENDER_TELEPORT: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly END_ROD: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly EXPLOSION: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly FALLING_DUST: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * This particle type will play the effect that will occur when
                         * a {@link Player} uses bone meal on a plant to boost the growth.
                         * <p>This type has limited {@link ParticleOption}s, only
                         * {@link ParticleOptions#QUANTITY} is supported.</p>
                         * <p>This type can no longer be spawned on air blocks. It will only
                         * show up if spawned at the location of solid blocks.</p>
                         */
                        // @ts-ignore
                        readonly FERTILIZER: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * This particle type will play a fireworks effect.
                         * <p>This type has limited {@link ParticleOption}s, only
                         * {@link ParticleOptions#FIREWORK_EFFECTS} is supported.</p>
                         */
                        // @ts-ignore
                        readonly FIREWORKS: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly FIREWORKS_SPARK: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * This particle type will play the smoke particles of a fire.
                         * <p>This type has limited {@link ParticleOption}s, only
                         * {@link ParticleOptions#DIRECTION} is supported.</p>
                         */
                        // @ts-ignore
                        readonly FIRE_SMOKE: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly FLAME: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly FOOTSTEP: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly GUARDIAN_APPEARANCE: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly HAPPY_VILLAGER: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly HEART: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly HUGE_EXPLOSION: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * While this particle type the option {@link ParticleOptions#VELOCITY}
                         * supports, this will only affect the velocity in the y direction.
                         */
                        // @ts-ignore
                        readonly INSTANT_SPELL: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly ITEM_CRACK: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly LARGE_EXPLOSION: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly LARGE_SMOKE: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly LAVA: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly MAGIC_CRITICAL_HIT: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly MOBSPAWNER_FLAMES: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly MOB_SPELL: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly NOTE: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly PORTAL: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly REDSTONE_DUST: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly SLIME: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly SMOKE: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly SNOWBALL: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly SNOW_SHOVEL: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * While this particle type the option {@link ParticleOptions#VELOCITY}
                         * supports, this will only affect the velocity in the y direction.
                         */
                        // @ts-ignore
                        readonly SPELL: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly SPLASH_POTION: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly SUSPENDED: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly SUSPENDED_DEPTH: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly SWEEP_ATTACK: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly TOWN_AURA: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly WATER_BUBBLE: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly WATER_DROP: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly WATER_SPLASH: org.spongepowered.api.effect.particle.ParticleType
                        // @ts-ignore
                        readonly WATER_WAKE: org.spongepowered.api.effect.particle.ParticleType
                        /**
                         * While this particle type the option {@link ParticleOptions#VELOCITY}
                         * supports, this will only affect the velocity in the y direction.
                         */
                        // @ts-ignore
                        readonly WITCH_SPELL: org.spongepowered.api.effect.particle.ParticleType
                    }
                }
            }
        }
    }
}
