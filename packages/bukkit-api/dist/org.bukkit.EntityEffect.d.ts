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
            public static readonly ARROW_PARTICLES: org.bukkit.EntityEffect
            /**
             * Rabbit jumping.
             */
            // @ts-ignore
            public static readonly RABBIT_JUMP: org.bukkit.EntityEffect
            /**
             * When mobs get hurt.
             */
            // @ts-ignore
            public static readonly HURT: org.bukkit.EntityEffect
            /**
             * When a mob dies.
             * <p>
             * <b>This will cause client-glitches!</b>
             * @deprecated although this effect may trigger other events on non-living
             *  entities, it's only supported usage is on living ones.
             */
            // @ts-ignore
            public static readonly DEATH: org.bukkit.EntityEffect
            /**
             * The smoke when taming a wolf fails.
             */
            // @ts-ignore
            public static readonly WOLF_SMOKE: org.bukkit.EntityEffect
            /**
             * The hearts when taming a wolf succeeds.
             */
            // @ts-ignore
            public static readonly WOLF_HEARTS: org.bukkit.EntityEffect
            /**
             * When a wolf shakes (after being wet).
             */
            // @ts-ignore
            public static readonly WOLF_SHAKE: org.bukkit.EntityEffect
            /**
             * When an entity eats a LONG_GRASS block.
             * @deprecated although this effect may trigger other events on non-living
             *  entities, it's only supported usage is on living ones.
             */
            // @ts-ignore
            public static readonly SHEEP_EAT: org.bukkit.EntityEffect
            /**
             * When an Iron Golem gives a rose.
             */
            // @ts-ignore
            public static readonly IRON_GOLEM_ROSE: org.bukkit.EntityEffect
            /**
             * Hearts from a villager.
             */
            // @ts-ignore
            public static readonly VILLAGER_HEART: org.bukkit.EntityEffect
            /**
             * When a villager is angry.
             */
            // @ts-ignore
            public static readonly VILLAGER_ANGRY: org.bukkit.EntityEffect
            /**
             * Happy particles from a villager.
             */
            // @ts-ignore
            public static readonly VILLAGER_HAPPY: org.bukkit.EntityEffect
            /**
             * Magic particles from a witch.
             */
            // @ts-ignore
            public static readonly WITCH_MAGIC: org.bukkit.EntityEffect
            /**
             * When a zombie transforms into a villager by shaking violently.
             */
            // @ts-ignore
            public static readonly ZOMBIE_TRANSFORM: org.bukkit.EntityEffect
            /**
             * When a firework explodes.
             */
            // @ts-ignore
            public static readonly FIREWORK_EXPLODE: org.bukkit.EntityEffect
            /**
             * Hearts from a breeding entity.
             */
            // @ts-ignore
            public static readonly LOVE_HEARTS: org.bukkit.EntityEffect
            /**
             * Resets squid rotation.
             */
            // @ts-ignore
            public static readonly SQUID_ROTATE: org.bukkit.EntityEffect
            /**
             * Silverfish entering block, spawner spawning.
             */
            // @ts-ignore
            public static readonly ENTITY_POOF: org.bukkit.EntityEffect
            /**
             * Guardian sets laser target.
             */
            // @ts-ignore
            public static readonly GUARDIAN_TARGET: org.bukkit.EntityEffect
            /**
             * Shield blocks attack.
             */
            // @ts-ignore
            public static readonly SHIELD_BLOCK: org.bukkit.EntityEffect
            /**
             * Shield breaks.
             */
            // @ts-ignore
            public static readonly SHIELD_BREAK: org.bukkit.EntityEffect
            /**
             * Armor stand is hit.
             */
            // @ts-ignore
            public static readonly ARMOR_STAND_HIT: org.bukkit.EntityEffect
            /**
             * Entity hurt by thorns attack.
             */
            // @ts-ignore
            public static readonly THORNS_HURT: org.bukkit.EntityEffect
            /**
             * Iron golem puts away rose.
             */
            // @ts-ignore
            public static readonly IRON_GOLEM_SHEATH: org.bukkit.EntityEffect
            /**
             * Totem prevents entity death.
             */
            // @ts-ignore
            public static readonly TOTEM_RESURRECT: org.bukkit.EntityEffect
            /**
             * Entity hurt due to drowning damage.
             */
            // @ts-ignore
            public static readonly HURT_DROWN: org.bukkit.EntityEffect
            /**
             * Entity hurt due to explosion damage.
             */
            // @ts-ignore
            public static readonly HURT_EXPLOSION: org.bukkit.EntityEffect
            /**
             * Dolphin has been fed and is locating a structure.
             */
            // @ts-ignore
            public static readonly DOLPHIN_FED: org.bukkit.EntityEffect
            /**
             * Ravager has been stunned for 40 ticks.
             */
            // @ts-ignore
            public static readonly RAVAGER_STUNNED: org.bukkit.EntityEffect
            /**
             * Cat taming failed.
             */
            // @ts-ignore
            public static readonly CAT_TAME_FAIL: org.bukkit.EntityEffect
            /**
             * Cat taming succeeded.
             */
            // @ts-ignore
            public static readonly CAT_TAME_SUCCESS: org.bukkit.EntityEffect
            /**
             * Villager splashes particles during a raid.
             */
            // @ts-ignore
            public static readonly VILLAGER_SPLASH: org.bukkit.EntityEffect
            /**
             * Player's bad omen effect removed to start or increase raid difficult.
             */
            // @ts-ignore
            public static readonly PLAYER_BAD_OMEN_RAID: org.bukkit.EntityEffect
            /**
             * Entity hurt due to berry bush. Prickly!
             */
            // @ts-ignore
            public static readonly HURT_BERRY_BUSH: org.bukkit.EntityEffect
            /**
             * Fox chews the food in its mouth
             */
            // @ts-ignore
            public static readonly FOX_CHEW: org.bukkit.EntityEffect
            /**
             * Entity teleported as a result of chorus fruit or as an enderman
             */
            // @ts-ignore
            public static readonly TELEPORT_ENDER: org.bukkit.EntityEffect
            /**
             * Entity breaks item in main hand
             */
            // @ts-ignore
            public static readonly BREAK_EQUIPMENT_MAIN_HAND: org.bukkit.EntityEffect
            /**
             * Entity breaks item in off hand
             */
            // @ts-ignore
            public static readonly BREAK_EQUIPMENT_OFF_HAND: org.bukkit.EntityEffect
            /**
             * Entity breaks item in helmet slot
             */
            // @ts-ignore
            public static readonly BREAK_EQUIPMENT_HELMET: org.bukkit.EntityEffect
            /**
             * Entity breaks item in chestplate slot
             */
            // @ts-ignore
            public static readonly BREAK_EQUIPMENT_CHESTPLATE: org.bukkit.EntityEffect
            /**
             * Entity breaks item in legging slot
             */
            // @ts-ignore
            public static readonly BREAK_EQUIPMENT_LEGGINGS: org.bukkit.EntityEffect
            /**
             * Entity breaks item in boot slot
             */
            // @ts-ignore
            public static readonly BREAK_EQUIPMENT_BOOTS: org.bukkit.EntityEffect
            // @ts-ignore
            public static values(): org.bukkit.EntityEffect[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.EntityEffect
            /**
             * Gets the data value of this EntityEffect
             * @return The data value
             * @deprecated Magic value
             */
            // @ts-ignore
            public getData(): number /*byte*/
            /**
             * Gets entity superclass which this affect is applicable to.
             * @return applicable class
             */
            // @ts-ignore
            public getApplicable(): java.lang.Class<any>
        }
    }
}
