declare namespace cn {
    namespace nukkit {
        namespace event {
            namespace entity {
                namespace EntityDamageEvent {
                    // @ts-ignore
                    class DamageModifier extends java.lang.Enum<cn.nukkit.event.entity.EntityDamageEvent.DamageModifier> {
                        /**
                         * Raw amount of damage
                         */
                        // @ts-ignore
                        readonly BASE: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier
                        /**
                         * Damage reduction caused by wearing armor
                         */
                        // @ts-ignore
                        readonly ARMOR: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier
                        /**
                         * Additional damage caused by damager's Strength potion effect
                         */
                        // @ts-ignore
                        readonly STRENGTH: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier
                        /**
                         * Damage reduction caused by damager's Weakness potion effect
                         */
                        // @ts-ignore
                        readonly WEAKNESS: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier
                        /**
                         * Damage reduction caused by the Resistance potion effect
                         */
                        // @ts-ignore
                        readonly RESISTANCE: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier
                        /**
                         * Damage reduction caused by the Damage absorption effect
                         */
                        // @ts-ignore
                        readonly ABSORPTION: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier
                        /**
                         * Damage reduction caused by the armor enchantments worn.
                         */
                        // @ts-ignore
                        readonly ARMOR_ENCHANTMENTS: cn.nukkit.event.entity.EntityDamageEvent.DamageModifier
                        // @ts-ignore
                        values(): cn.nukkit.event.entity.EntityDamageEvent.DamageModifier[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): cn.nukkit.event.entity.EntityDamageEvent.DamageModifier
                    }
                }
            }
        }
    }
}
