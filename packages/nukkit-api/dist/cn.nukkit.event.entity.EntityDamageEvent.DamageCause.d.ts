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
                        readonly CONTACT: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being attacked by another entity
                         */
                        // @ts-ignore
                        readonly ENTITY_ATTACK: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being hit by a projectile such as an Arrow
                         */
                        // @ts-ignore
                        readonly PROJECTILE: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being put in a block
                         */
                        // @ts-ignore
                        readonly SUFFOCATION: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Fall damage
                         */
                        // @ts-ignore
                        readonly FALL: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by standing in fire
                         */
                        // @ts-ignore
                        readonly FIRE: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Burn damage
                         */
                        // @ts-ignore
                        readonly FIRE_TICK: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by standing in lava
                         */
                        // @ts-ignore
                        readonly LAVA: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by running out of air underwater
                         */
                        // @ts-ignore
                        readonly DROWNING: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Block explosion damage
                         */
                        // @ts-ignore
                        readonly BLOCK_EXPLOSION: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Entity explosion damage
                         */
                        // @ts-ignore
                        readonly ENTITY_EXPLOSION: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by falling into the void
                         */
                        // @ts-ignore
                        readonly VOID: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Player commits suicide
                         */
                        // @ts-ignore
                        readonly SUICIDE: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Potion or spell damage
                         */
                        // @ts-ignore
                        readonly MAGIC: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Plugins
                         */
                        // @ts-ignore
                        readonly CUSTOM: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being struck by lightning
                         */
                        // @ts-ignore
                        readonly LIGHTNING: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by hunger
                         */
                        // @ts-ignore
                        readonly HUNGER: cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                        // @ts-ignore
                        values(): cn.nukkit.event.entity.EntityDamageEvent.DamageCause[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): cn.nukkit.event.entity.EntityDamageEvent.DamageCause
                    }
                }
            }
        }
    }
}
