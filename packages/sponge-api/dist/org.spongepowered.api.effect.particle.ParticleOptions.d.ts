declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace effect {
                namespace particle {
                    /**
                     * An enumeration of all possible {@link ParticleOption}s in vanilla minecraft.
                     */
                    // @ts-ignore
                    class ParticleOptions extends java.lang.Object {
                        /**
                         * This option will affect the appearance of a particle. The only vanilla
                         * {@link ParticleType}s that this option is applicable to are:
                         * <ul>
                         * <li>{@link ParticleTypes#BLOCK_CRACK}</li>
                         * <li>{@link ParticleTypes#BLOCK_DUST}</li>
                         * <li>{@link ParticleTypes#BREAK_BLOCK}</li>
                         * <li>{@link ParticleTypes#ITEM_CRACK}</li>
                         * </ul>
                         */
                        // @ts-ignore
                        public static readonly BLOCK_STATE: org.spongepowered.api.effect.particle.ParticleOption<org.spongepowered.api.block.BlockState>
                        /**
                         * This option will modify the color of a particle. The only vanilla
                         * {@link ParticleType}s this option is applicable to are:
                         * <ul>
                         * <li>{@link ParticleTypes#AMBIENT_MOB_SPELL}</li>
                         * <li>{@link ParticleTypes#MOB_SPELL}</li>
                         * <li>{@link ParticleTypes#REDSTONE_DUST}</li>
                         * </ul>
                         */
                        // @ts-ignore
                        public static readonly COLOR: org.spongepowered.api.effect.particle.ParticleOption<org.spongepowered.api.util.Color>
                        /**
                         * This option will change the direction of a particle.
                         */
                        // @ts-ignore
                        public static readonly DIRECTION: org.spongepowered.api.effect.particle.ParticleOption<org.spongepowered.api.util.Direction>
                        /**
                         * This option will modify the color of a particle. The only vanilla
                         * {@link ParticleType}s this option is applicable to is
                         * {@link ParticleTypes#FIREWORKS}.
                         * <p>The {@link List} may never be empty. Or a {@link IllegalArgumentException}
                         * will be thrown when applying.</p>
                         */
                        // @ts-ignore
                        public static readonly FIREWORK_EFFECTS: org.spongepowered.api.effect.particle.ParticleOption<java.util.List<org.spongepowered.api.item.FireworkEffect> | Array<org.spongepowered.api.item.FireworkEffect>>
                        /**
                         * This option will affect the appearance of a particle. The only vanilla
                         * {@link ParticleType} this option is applicable to are:
                         * <ul>
                         * <li>{@link ParticleTypes#BLOCK_CRACK}</li>
                         * <li>{@link ParticleTypes#BLOCK_DUST}</li>
                         * <li>{@link ParticleTypes#BREAK_BLOCK}</li>
                         * <li>{@link ParticleTypes#ITEM_CRACK}</li>
                         * </ul>
                         */
                        // @ts-ignore
                        public static readonly ITEM_STACK_SNAPSHOT: org.spongepowered.api.effect.particle.ParticleOption<org.spongepowered.api.item.inventory.ItemStackSnapshot>
                        /**
                         * This option will affect the appearance of a particle. The only vanilla
                         * {@link ParticleType} this option is applicable to is
                         * {@link ParticleTypes#NOTE}.
                         */
                        // @ts-ignore
                        public static readonly NOTE: org.spongepowered.api.effect.particle.ParticleOption<org.spongepowered.api.data.type.NotePitch>
                        /**
                         * This option will affect how all the particles are spread.
                         */
                        // @ts-ignore
                        public static readonly OFFSET: org.spongepowered.api.effect.particle.ParticleOption<Vector3d>
                        /**
                         * This option will change the potion type of a particle. The only vanilla
                         * {@link ParticleType}s this option is applicable to is
                         * {@link ParticleTypes#SPLASH_POTION}.
                         */
                        // @ts-ignore
                        public static readonly POTION_EFFECT_TYPE: org.spongepowered.api.effect.particle.ParticleOption<org.spongepowered.api.effect.potion.PotionEffectType>
                        /**
                         * This option will affect the amount of particles that are spawned. The
                         * minimum amount of particles is 1. The only vanilla {@link ParticleType}s
                         * this option isn't applicable to are:
                         * <ul>
                         * <li>{@link ParticleTypes#BREAK_BLOCK}</li>
                         * <li>{@link ParticleTypes#ENDER_TELEPORT}</li>
                         * <li>{@link ParticleTypes#FIRE_SMOKE}</li>
                         * <li>{@link ParticleTypes#FIREWORKS}</li>
                         * <li>{@link ParticleTypes#MOBSPAWNER_FLAMES}</li>
                         * <li>{@link ParticleTypes#SPLASH_POTION}</li>
                         * </ul>
                         * <p>The quantity must be at least 1, or a {@link IllegalArgumentException}
                         * will be thrown when applying.</p>
                         */
                        // @ts-ignore
                        public static readonly QUANTITY: org.spongepowered.api.effect.particle.ParticleOption<java.lang.Integer | number>
                        /**
                         * This option will change the scale of a particle. The only
                         * vanilla {@link ParticleType}s this option is applicable to are:
                         * <ul>
                         * <li>{@link ParticleTypes#LARGE_EXPLOSION}</li>
                         * <li>{@link ParticleTypes#SWEEP_ATTACK}</li>
                         * </ul>
                         * <p>The scale may never be negative, or a {@link IllegalArgumentException}
                         * will be thrown when applying.</p>
                         */
                        // @ts-ignore
                        public static readonly SCALE: org.spongepowered.api.effect.particle.ParticleOption<java.lang.Double | number>
                        /**
                         * This option will affect whether a particle type will have a lower
                         * velocity in the horizontal plane. The only vanilla {@link ParticleType}s
                         * that this option will affect are:
                         * <ul>
                         * <li>{@link ParticleTypes#SPELL}</li>
                         * <li>{@link ParticleTypes#INSTANT_SPELL}</li>
                         * <li>{@link ParticleTypes#WITCH_SPELL}</li>
                         * </ul>
                         * <p>These particle types don't have a configurable velocity (through
                         * {@link #VELOCITY}) in the horizontal plane.</p>
                         */
                        // @ts-ignore
                        public static readonly SLOW_HORIZONTAL_VELOCITY: org.spongepowered.api.effect.particle.ParticleOption<java.lang.Boolean>
                        /**
                         * This option will affect how all the particles are moving.
                         */
                        // @ts-ignore
                        public static readonly VELOCITY: org.spongepowered.api.effect.particle.ParticleOption<Vector3d>
                    }
                }
            }
        }
    }
}
