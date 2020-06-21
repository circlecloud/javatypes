declare namespace org {
    namespace bukkit {
        /**
         * A list of effects that the server is able to send to players.
         */
        // @ts-ignore
        class Effect extends java.lang.Enum<org.bukkit.Effect> {
            /**
             * An alternate click sound.
             */
            // @ts-ignore
            readonly CLICK2: org.bukkit.Effect
            /**
             * A click sound.
             */
            // @ts-ignore
            readonly CLICK1: org.bukkit.Effect
            /**
             * Sound of a bow firing.
             */
            // @ts-ignore
            readonly BOW_FIRE: org.bukkit.Effect
            /**
             * Sound of a door opening.
             */
            // @ts-ignore
            readonly DOOR_TOGGLE: org.bukkit.Effect
            /**
             * Sound of a door opening.
             */
            // @ts-ignore
            readonly IRON_DOOR_TOGGLE: org.bukkit.Effect
            /**
             * Sound of a trapdoor opening.
             */
            // @ts-ignore
            readonly TRAPDOOR_TOGGLE: org.bukkit.Effect
            /**
             * Sound of a door opening.
             */
            // @ts-ignore
            readonly IRON_TRAPDOOR_TOGGLE: org.bukkit.Effect
            /**
             * Sound of a door opening.
             */
            // @ts-ignore
            readonly FENCE_GATE_TOGGLE: org.bukkit.Effect
            /**
             * Sound of a door closing.
             */
            // @ts-ignore
            readonly DOOR_CLOSE: org.bukkit.Effect
            /**
             * Sound of a door closing.
             */
            // @ts-ignore
            readonly IRON_DOOR_CLOSE: org.bukkit.Effect
            /**
             * Sound of a trapdoor closing.
             */
            // @ts-ignore
            readonly TRAPDOOR_CLOSE: org.bukkit.Effect
            /**
             * Sound of a door closing.
             */
            // @ts-ignore
            readonly IRON_TRAPDOOR_CLOSE: org.bukkit.Effect
            /**
             * Sound of a door closing.
             */
            // @ts-ignore
            readonly FENCE_GATE_CLOSE: org.bukkit.Effect
            /**
             * Sound of fire being extinguished.
             */
            // @ts-ignore
            readonly EXTINGUISH: org.bukkit.Effect
            /**
             * A song from a record. Needs the record item ID as additional info
             */
            // @ts-ignore
            readonly RECORD_PLAY: org.bukkit.Effect
            /**
             * Sound of ghast shrieking.
             */
            // @ts-ignore
            readonly GHAST_SHRIEK: org.bukkit.Effect
            /**
             * Sound of ghast firing.
             */
            // @ts-ignore
            readonly GHAST_SHOOT: org.bukkit.Effect
            /**
             * Sound of blaze firing.
             */
            // @ts-ignore
            readonly BLAZE_SHOOT: org.bukkit.Effect
            /**
             * Sound of zombies chewing on wooden doors.
             */
            // @ts-ignore
            readonly ZOMBIE_CHEW_WOODEN_DOOR: org.bukkit.Effect
            /**
             * Sound of zombies chewing on iron doors.
             */
            // @ts-ignore
            readonly ZOMBIE_CHEW_IRON_DOOR: org.bukkit.Effect
            /**
             * Sound of zombies destroying a door.
             */
            // @ts-ignore
            readonly ZOMBIE_DESTROY_DOOR: org.bukkit.Effect
            /**
             * A visual smoke effect. Needs direction as additional info.
             */
            // @ts-ignore
            readonly SMOKE: org.bukkit.Effect
            /**
             * Sound of a block breaking. Needs block ID as additional info.
             */
            // @ts-ignore
            readonly STEP_SOUND: org.bukkit.Effect
            /**
             * Visual effect of a splash potion breaking. Needs potion data value as
             * additional info.
             */
            // @ts-ignore
            readonly POTION_BREAK: org.bukkit.Effect
            /**
             * Visual effect of an instant splash potion breaking. Needs color data
             * value as additional info.
             */
            // @ts-ignore
            readonly INSTANT_POTION_BREAK: org.bukkit.Effect
            /**
             * An ender eye signal; a visual effect.
             */
            // @ts-ignore
            readonly ENDER_SIGNAL: org.bukkit.Effect
            /**
             * The flames seen on a mobspawner; a visual effect.
             */
            // @ts-ignore
            readonly MOBSPAWNER_FLAMES: org.bukkit.Effect
            /**
             * The sound played by brewing stands when brewing
             */
            // @ts-ignore
            readonly BREWING_STAND_BREW: org.bukkit.Effect
            /**
             * The sound played when a chorus flower grows
             */
            // @ts-ignore
            readonly CHORUS_FLOWER_GROW: org.bukkit.Effect
            /**
             * The sound played when a chorus flower dies
             */
            // @ts-ignore
            readonly CHORUS_FLOWER_DEATH: org.bukkit.Effect
            /**
             * The sound played when traveling through a portal
             */
            // @ts-ignore
            readonly PORTAL_TRAVEL: org.bukkit.Effect
            /**
             * The sound played when launching an endereye
             */
            // @ts-ignore
            readonly ENDEREYE_LAUNCH: org.bukkit.Effect
            /**
             * The sound played when launching a firework
             */
            // @ts-ignore
            readonly FIREWORK_SHOOT: org.bukkit.Effect
            /**
             * Particles displayed when a villager grows a plant, data
             * is the number of particles
             */
            // @ts-ignore
            readonly VILLAGER_PLANT_GROW: org.bukkit.Effect
            /**
             * The sound/particles used by the enderdragon's breath
             * attack.
             */
            // @ts-ignore
            readonly DRAGON_BREATH: org.bukkit.Effect
            /**
             * The sound played when an anvil breaks
             */
            // @ts-ignore
            readonly ANVIL_BREAK: org.bukkit.Effect
            /**
             * The sound played when an anvil is used
             */
            // @ts-ignore
            readonly ANVIL_USE: org.bukkit.Effect
            /**
             * The sound played when an anvil lands after
             * falling
             */
            // @ts-ignore
            readonly ANVIL_LAND: org.bukkit.Effect
            /**
             * Sound of an enderdragon firing
             */
            // @ts-ignore
            readonly ENDERDRAGON_SHOOT: org.bukkit.Effect
            /**
             * The sound played when a wither breaks a block
             */
            // @ts-ignore
            readonly WITHER_BREAK_BLOCK: org.bukkit.Effect
            /**
             * Sound of a wither shooting
             */
            // @ts-ignore
            readonly WITHER_SHOOT: org.bukkit.Effect
            /**
             * The sound played when a zombie infects a target
             */
            // @ts-ignore
            readonly ZOMBIE_INFECT: org.bukkit.Effect
            /**
             * The sound played when a villager is converted by
             * a zombie
             */
            // @ts-ignore
            readonly ZOMBIE_CONVERTED_VILLAGER: org.bukkit.Effect
            /**
             * Sound played by a bat taking off
             */
            // @ts-ignore
            readonly BAT_TAKEOFF: org.bukkit.Effect
            /**
             * The sound/particles caused by a end gateway spawning
             */
            // @ts-ignore
            readonly END_GATEWAY_SPAWN: org.bukkit.Effect
            /**
             * The sound of an enderdragon growling
             */
            // @ts-ignore
            readonly ENDERDRAGON_GROWL: org.bukkit.Effect
            // @ts-ignore
            values(): org.bukkit.Effect[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): org.bukkit.Effect
            /**
             * Gets the ID for this effect.
             * @return ID of this effect
             * @deprecated Magic value
             */
            // @ts-ignore
            getId(): number /*int*/
            /**
             * @return The type of the effect.
             */
            // @ts-ignore
            getType(): org.bukkit.Effect.Type
            /**
             * @return The class which represents data for this effect, or null if
             *      none
             */
            // @ts-ignore
            getData(): java.lang.Class<any>
            /**
             * Gets the Effect associated with the given ID.
             * @param id ID of the Effect to return
             * @return Effect with the given ID
             * @deprecated Magic value
             */
            // @ts-ignore
            getById(id: number /*int*/): org.bukkit.Effect
        }
    }
}
