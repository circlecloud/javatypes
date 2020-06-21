declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                namespace EntityDamageEvent {
                    /**
                     * An enum to specify the cause of the damage
                     */
                    // @ts-ignore
                    class DamageCause extends java.lang.Enum<org.bukkit.event.entity.EntityDamageEvent.DamageCause> {
                        /**
                         * Damage caused when an entity contacts a block such as a Cactus.
                         * <p>
                         * Damage: 1 (Cactus)
                         */
                        // @ts-ignore
                        readonly CONTACT: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused when an entity attacks another entity.
                         * <p>
                         * Damage: variable
                         */
                        // @ts-ignore
                        readonly ENTITY_ATTACK: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused when an entity attacks another entity in a sweep attack.
                         * <p>
                         * Damage: variable
                         */
                        // @ts-ignore
                        readonly ENTITY_SWEEP_ATTACK: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused when attacked by a projectile.
                         * <p>
                         * Damage: variable
                         */
                        // @ts-ignore
                        readonly PROJECTILE: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being put in a block
                         * <p>
                         * Damage: 1
                         */
                        // @ts-ignore
                        readonly SUFFOCATION: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused when an entity falls a distance greater than 3 blocks
                         * <p>
                         * Damage: fall height - 3.0
                         */
                        // @ts-ignore
                        readonly FALL: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by direct exposure to fire
                         * <p>
                         * Damage: 1
                         */
                        // @ts-ignore
                        readonly FIRE: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused due to burns caused by fire
                         * <p>
                         * Damage: 1
                         */
                        // @ts-ignore
                        readonly FIRE_TICK: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused due to a snowman melting
                         * <p>
                         * Damage: 1
                         */
                        // @ts-ignore
                        readonly MELTING: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by direct exposure to lava
                         * <p>
                         * Damage: 4
                         */
                        // @ts-ignore
                        readonly LAVA: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by running out of air while in water
                         * <p>
                         * Damage: 2
                         */
                        // @ts-ignore
                        readonly DROWNING: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being in the area when a block explodes.
                         * <p>
                         * Damage: variable
                         */
                        // @ts-ignore
                        readonly BLOCK_EXPLOSION: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being in the area when an entity, such as a
                         * Creeper, explodes.
                         * <p>
                         * Damage: variable
                         */
                        // @ts-ignore
                        readonly ENTITY_EXPLOSION: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by falling into the void
                         * <p>
                         * Damage: 4 for players
                         */
                        // @ts-ignore
                        readonly VOID: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being struck by lightning
                         * <p>
                         * Damage: 5
                         */
                        // @ts-ignore
                        readonly LIGHTNING: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by committing suicide using the command "/kill"
                         * <p>
                         * Damage: 1000
                         */
                        // @ts-ignore
                        readonly SUICIDE: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by starving due to having an empty hunger bar
                         * <p>
                         * Damage: 1
                         */
                        // @ts-ignore
                        readonly STARVATION: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused due to an ongoing poison effect
                         * <p>
                         * Damage: 1
                         */
                        // @ts-ignore
                        readonly POISON: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being hit by a damage potion or spell
                         * <p>
                         * Damage: variable
                         */
                        // @ts-ignore
                        readonly MAGIC: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by Wither potion effect
                         */
                        // @ts-ignore
                        readonly WITHER: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by being hit by a falling block which deals damage
                         * <p>
                         * <b>Note:</b> Not every block deals damage
                         * <p>
                         * Damage: variable
                         */
                        // @ts-ignore
                        readonly FALLING_BLOCK: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused in retaliation to another attack by the Thorns
                         * enchantment.
                         * <p>
                         * Damage: 1-4 (Thorns)
                         */
                        // @ts-ignore
                        readonly THORNS: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused by a dragon breathing fire.
                         * <p>
                         * Damage: variable
                         */
                        // @ts-ignore
                        readonly DRAGON_BREATH: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Custom damage.
                         * <p>
                         * Damage: variable
                         */
                        // @ts-ignore
                        readonly CUSTOM: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused when an entity runs into a wall.
                         * <p>
                         * Damage: variable
                         */
                        // @ts-ignore
                        readonly FLY_INTO_WALL: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused when an entity steps on {@link Material#MAGMA_BLOCK}.
                         * <p>
                         * Damage: 1
                         */
                        // @ts-ignore
                        readonly HOT_FLOOR: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused when an entity is colliding with too many entities due
                         * to the maxEntityCramming game rule.
                         * <p>
                         * Damage: 6
                         */
                        // @ts-ignore
                        readonly CRAMMING: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        /**
                         * Damage caused when an entity that should be in water is not.
                         * <p>
                         * Damage: 1
                         */
                        // @ts-ignore
                        readonly DRYOUT: org.bukkit.event.entity.EntityDamageEvent.DamageCause
                        // @ts-ignore
                        values(): org.bukkit.event.entity.EntityDamageEvent.DamageCause[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.entity.EntityDamageEvent.DamageCause
                    }
                }
            }
        }
    }
}
