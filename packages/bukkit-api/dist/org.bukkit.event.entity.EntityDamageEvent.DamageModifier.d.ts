declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                namespace EntityDamageEvent {
                    /**
                     * An enum to specify the types of modifier
                     * @deprecated This API is responsible for a large number of implementation
                     *  problems and is in general unsustainable to maintain. It is likely to be
                     *  removed very soon in a subsequent release. Please see
                     *  https://www.spigotmc.org/threads/194446/ for more information.
                     */
                    // @ts-ignore
                    class DamageModifier extends java.lang.Enum<org.bukkit.event.entity.EntityDamageEvent.DamageModifier> {
                        /**
                         * This represents the amount of damage being done, also known as the
                         * raw {@link EntityDamageEvent#getDamage()}.
                         */
                        // @ts-ignore
                        public static readonly BASE: org.bukkit.event.entity.EntityDamageEvent.DamageModifier
                        /**
                         * This represents the damage reduced by a wearing a helmet when hit
                         * by a falling block.
                         */
                        // @ts-ignore
                        public static readonly HARD_HAT: org.bukkit.event.entity.EntityDamageEvent.DamageModifier
                        /**
                         * This represents  the damage reduction caused by blocking, only present for
                         * {@link Player Players}.
                         */
                        // @ts-ignore
                        public static readonly BLOCKING: org.bukkit.event.entity.EntityDamageEvent.DamageModifier
                        /**
                         * This represents the damage reduction caused by wearing armor.
                         */
                        // @ts-ignore
                        public static readonly ARMOR: org.bukkit.event.entity.EntityDamageEvent.DamageModifier
                        /**
                         * This represents the damage reduction caused by the Resistance potion effect.
                         */
                        // @ts-ignore
                        public static readonly RESISTANCE: org.bukkit.event.entity.EntityDamageEvent.DamageModifier
                        /**
                         * This represents the damage reduction caused by the combination of:
                         * <ul>
                         * <li>
                         * Armor enchantments
                         * </li><li>
                         * Witch's potion resistance
                         * </li>
                         * </ul>
                         */
                        // @ts-ignore
                        public static readonly MAGIC: org.bukkit.event.entity.EntityDamageEvent.DamageModifier
                        /**
                         * This represents the damage reduction caused by the absorption potion
                         * effect.
                         */
                        // @ts-ignore
                        public static readonly ABSORPTION: org.bukkit.event.entity.EntityDamageEvent.DamageModifier
                        // @ts-ignore
                        public static values(): org.bukkit.event.entity.EntityDamageEvent.DamageModifier[]
                        // @ts-ignore
                        public static valueOf(name: java.lang.String | string): org.bukkit.event.entity.EntityDamageEvent.DamageModifier
                    }
                }
            }
        }
    }
}
