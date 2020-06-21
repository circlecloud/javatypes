declare namespace org {
    namespace bukkit {
        /**
         * A list of all Effects that can happen to entities.
         */
        // @ts-ignore
        class EntityEffect extends java.lang.Enum<org.bukkit.EntityEffect> {
            /**
             * Colored particles from a tipped arrow.
             */
            // @ts-ignore
            readonly ARROW_PARTICLES: org.bukkit.EntityEffect
            /**
             * Rabbit jumping.
             */
            // @ts-ignore
            readonly RABBIT_JUMP: org.bukkit.EntityEffect
            /**
             * When mobs get hurt.
             */
            // @ts-ignore
            readonly HURT: org.bukkit.EntityEffect
            /**
             * When a mob dies.
             * <p>
             * <b>This will cause client-glitches!</b>
             * @deprecated although this effect may trigger other events on non-living
             *  entities, it's only supported usage is on living ones.
             */
            // @ts-ignore
            readonly DEATH: org.bukkit.EntityEffect
            /**
             * The smoke when taming a wolf fails.
             */
            // @ts-ignore
            readonly WOLF_SMOKE: org.bukkit.EntityEffect
            /**
             * The hearts when taming a wolf succeeds.
             */
            // @ts-ignore
            readonly WOLF_HEARTS: org.bukkit.EntityEffect
            /**
             * When a wolf shakes (after being wet).
             */
            // @ts-ignore
            readonly WOLF_SHAKE: org.bukkit.EntityEffect
            /**
             * When an entity eats a LONG_GRASS block.
             * @deprecated although this effect may trigger other events on non-living
             *  entities, it's only supported usage is on living ones.
             */
            // @ts-ignore
            readonly SHEEP_EAT: org.bukkit.EntityEffect
            /**
             * When an Iron Golem gives a rose.
             */
            // @ts-ignore
            readonly IRON_GOLEM_ROSE: org.bukkit.EntityEffect
            /**
             * Hearts from a villager.
             */
            // @ts-ignore
            readonly VILLAGER_HEART: org.bukkit.EntityEffect
            /**
             * When a villager is angry.
             */
            // @ts-ignore
            readonly VILLAGER_ANGRY: org.bukkit.EntityEffect
            /**
             * Happy particles from a villager.
             */
            // @ts-ignore
            readonly VILLAGER_HAPPY: org.bukkit.EntityEffect
            /**
             * Magic particles from a witch.
             */
            // @ts-ignore
            readonly WITCH_MAGIC: org.bukkit.EntityEffect
            /**
             * When a zombie transforms into a villager by shaking violently.
             */
            // @ts-ignore
            readonly ZOMBIE_TRANSFORM: org.bukkit.EntityEffect
            /**
             * When a firework explodes.
             */
            // @ts-ignore
            readonly FIREWORK_EXPLODE: org.bukkit.EntityEffect
            /**
             * Hearts from a breeding entity.
             */
            // @ts-ignore
            readonly LOVE_HEARTS: org.bukkit.EntityEffect
            /**
             * Resets squid rotation.
             */
            // @ts-ignore
            readonly SQUID_ROTATE: org.bukkit.EntityEffect
            /**
             * Silverfish entering block, spawner spawning.
             */
            // @ts-ignore
            readonly ENTITY_POOF: org.bukkit.EntityEffect
            /**
             * Guardian sets laser target.
             */
            // @ts-ignore
            readonly GUARDIAN_TARGET: org.bukkit.EntityEffect
            /**
             * Shield blocks attack.
             */
            // @ts-ignore
            readonly SHIELD_BLOCK: org.bukkit.EntityEffect
            /**
             * Shield breaks.
             */
            // @ts-ignore
            readonly SHIELD_BREAK: org.bukkit.EntityEffect
            /**
             * Armor stand is hit.
             */
            // @ts-ignore
            readonly ARMOR_STAND_HIT: org.bukkit.EntityEffect
            /**
             * Entity hurt by thorns attack.
             */
            // @ts-ignore
            readonly THORNS_HURT: org.bukkit.EntityEffect
            /**
             * Iron golem puts away rose.
             */
            // @ts-ignore
            readonly IRON_GOLEM_SHEATH: org.bukkit.EntityEffect
            /**
             * Totem prevents entity death.
             */
            // @ts-ignore
            readonly TOTEM_RESURRECT: org.bukkit.EntityEffect
            /**
             * Entity hurt due to drowning damage.
             */
            // @ts-ignore
            readonly HURT_DROWN: org.bukkit.EntityEffect
            /**
             * Entity hurt due to explosion damage.
             */
            // @ts-ignore
            readonly HURT_EXPLOSION: org.bukkit.EntityEffect
            // @ts-ignore
            values(): org.bukkit.EntityEffect[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): org.bukkit.EntityEffect
            /**
             * Gets the data value of this EntityEffect
             * @return The data value
             * @deprecated Magic value
             */
            // @ts-ignore
            getData(): number /*byte*/
            /**
             * Gets entity superclass which this affect is applicable to.
             * @return applicable class
             */
            // @ts-ignore
            getApplicable(): java.lang.Class<any>
            /**
             * Gets the EntityEffect with the given data value
             * @param data Data value to fetch
             * @return The {#link EntityEffect} representing the given value, or null
             *      if it doesn't exist
             * @deprecated Magic value
             */
            // @ts-ignore
            getByData(data: number /*byte*/): org.bukkit.EntityEffect
        }
    }
}
