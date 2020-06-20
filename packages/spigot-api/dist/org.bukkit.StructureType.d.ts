declare namespace org {
    namespace bukkit {
        /**
         * This class handles the creation and storage of all structure types for
         * Bukkit. Structure Types are the different kinds of structures that can be
         * generated during world/chunk generation. These include Villages, Mineshafts,
         * Mansions, etc.
         * <br>
         * The registration of new {@link StructureType}s is case-sensitive.
         */
        // @ts-ignore
        class StructureType extends java.lang.Object {
            /**
             * Mineshafts are underground structures which consist of branching mining
             * tunnels with wooden supports and broken rails.
             * <br>
             * They are the only place where cave spider spawners and minecarts with
             * chests can be found naturally.
             */
            // @ts-ignore
            readonly MINESHAFT: org.bukkit.StructureType
            /**
             * Villages are naturally generating structures that form above ground.
             * <br>
             * They are usually generated in desert, plains, taiga, and savanna biomes
             * and are a site for villager spawns, with whom the player can trade.
             */
            // @ts-ignore
            readonly VILLAGE: org.bukkit.StructureType
            /**
             * Nether fortresses are very large complexes that mainly consist of
             * netherbricks.
             * <br>
             * They contain blaze spawners, nether wart farms, and loot chests. They are
             * only generated in the nether dimension.
             */
            // @ts-ignore
            readonly NETHER_FORTRESS: org.bukkit.StructureType
            /**
             * Strongholds are underground structures that consist of many rooms,
             * libraries, and an end portal room.
             * <br>
             * They can be found using an {@link Material#ENDER_EYE}.
             */
            // @ts-ignore
            readonly STRONGHOLD: org.bukkit.StructureType
            /**
             * Jungle pyramids (also known as jungle temples) are found in jungles.
             * <br>
             * They are usually composed of cobblestone and mossy cobblestone. They
             * consist of three floors, with the bottom floor containing treasure
             * chests.
             */
            // @ts-ignore
            readonly JUNGLE_PYRAMID: org.bukkit.StructureType
            /**
             * Ocean ruins are clusters of many different blocks that generate
             * underwater in ocean biomes (as well as on the surface of beaches).
             * <br>
             * They come in my different variations. The cold variants consist primarily
             * of stone brick, and the warm variants consist of sandstone.
             */
            // @ts-ignore
            readonly OCEAN_RUIN: org.bukkit.StructureType
            /**
             * Desert pyramids (also known as desert temples) are found in deserts.
             * <br>
             * They are usually composed of sandstone and stained terracotta.
             */
            // @ts-ignore
            readonly DESERT_PYRAMID: org.bukkit.StructureType
            /**
             * Igloos are structures that generate in snowy biomes.
             * <br>
             * They consist of the house, as well as a basement.
             */
            // @ts-ignore
            readonly IGLOO: org.bukkit.StructureType
            /**
             * Swamp huts (also known as witch huts) generate in swamp biomes and have
             * the ability to spawn witches.
             */
            // @ts-ignore
            readonly SWAMP_HUT: org.bukkit.StructureType
            /**
             * Ocean monuments are underwater structures.
             * <br>
             * They are usually composed on all three different prismarine types and sea
             * lanterns. They are the only place guardians and elder guardians spawn
             * naturally.
             */
            // @ts-ignore
            readonly OCEAN_MONUMENT: org.bukkit.StructureType
            /**
             * End Cities are tall castle-like structures that generate in the outer
             * island of the End dimension.
             * <br>
             * They consist primarily of end stone bricks, purpur blocks, and end rods.
             * They are the only place where shulkers can be found.
             */
            // @ts-ignore
            readonly END_CITY: org.bukkit.StructureType
            /**
             * Mansions (also known as woodland mansions) are massive house structures
             * that generate in dark forests, containing a wide variety of rooms.
             * <br>
             * They are the only place where evokers, vindicators, and vexes spawn
             * naturally (but only once)
             */
            // @ts-ignore
            readonly WOODLAND_MANSION: org.bukkit.StructureType
            /**
             * Buried treasure consists of a single chest buried in the beach sand or
             * gravel, with random loot in it.
             */
            // @ts-ignore
            readonly BURIED_TREASURE: org.bukkit.StructureType
            /**
             * Shipwrecks are structures that generate on the floor of oceans or
             * beaches.
             * <br>
             * They are made up of wood materials, and contain 1-3 loot chests. They can
             * generate sideways, upside-down, or upright.
             */
            // @ts-ignore
            readonly SHIPWRECK: org.bukkit.StructureType
            /**
             * Pillager outposts may contain crossbows.
             */
            // @ts-ignore
            readonly PILLAGER_OUTPOST: org.bukkit.StructureType
            /**
             * Get the name of this structure. This is case-sensitive when used in
             * commands.
             * @return the name of this structure
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Get the {@link org.bukkit.map.MapCursor.Type} that this structure can use on maps. If
             * this is null, this structure will not appear on explorer maps.
             * @return the {#link org.bukkit.map.MapCursor.Type} or null.
             */
            // @ts-ignore
            getMapIcon(): org.bukkit.map.MapCursor.Type
            // @ts-ignore
            equals(other: any): boolean
            // @ts-ignore
            hashCode(): int
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Get all registered {@link StructureType}s.
             * @return an immutable copy of registered structure types.
             */
            // @ts-ignore
            getStructureTypes(): java.util.Map<java.lang.String, org.bukkit.StructureType>
        }
    }
}
