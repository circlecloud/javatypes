declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                namespace EntityDamageEvent {
                    // @ts-ignore
                    class DamageCause extends java.lang.Enum<cn.nukkit.event.entity.EntityDamageEvent.DamageCause> {
                        /**
                         * Damage caused by contact with a block such as a Cactus
                         */
                        // @ts-ignore
                        public static readonly CONTACT: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being attacked by another entity
                         */
                        // @ts-ignore
                        public static readonly ENTITY_ATTACK: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being hit by a projectile such as an Arrow
                         */
                        // @ts-ignore
                        public static readonly PROJECTILE: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being put in a block
                         */
                        // @ts-ignore
                        public static readonly SUFFOCATION: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Fall damage
                         */
                        // @ts-ignore
                        public static readonly FALL: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by standing in fire
                         */
                        // @ts-ignore
                        public static readonly FIRE: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Burn damage
                         */
                        // @ts-ignore
                        public static readonly FIRE_TICK: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by standing in lava
                         */
                        // @ts-ignore
                        public static readonly LAVA: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by running out of air underwater
                         */
                        // @ts-ignore
                        public static readonly DROWNING: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Block explosion damage
                         */
                        // @ts-ignore
                        public static readonly BLOCK_EXPLOSION: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Entity explosion damage
                         */
                        // @ts-ignore
                        public static readonly ENTITY_EXPLOSION: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by falling into the void
                         */
                        // @ts-ignore
                        public static readonly VOID: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Player commits suicide
                         */
                        // @ts-ignore
                        public static readonly SUICIDE: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Potion or spell damage
                         */
                        // @ts-ignore
                        public static readonly MAGIC: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Plugins
                         */
                        // @ts-ignore
                        public static readonly CUSTOM: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being struck by lightning
                         */
                        // @ts-ignore
                        public static readonly LIGHTNING: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by hunger
                         */
                        // @ts-ignore
                        public static readonly HUNGER: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        // @ts-ignore
                        public static values(): cn.nukkit.event.entity.EntityDamageEvent.DamageCause[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                    }
                }
            }
        }
    }
}
