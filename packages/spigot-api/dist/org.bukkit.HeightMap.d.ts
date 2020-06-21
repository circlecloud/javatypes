declare namespace org {
    namespace bukkit {
        /**
         * Further information regarding heightmaps.
         * @see <a href="https://minecraft.gamepedia.com/Chunk_format">Gamepedia Chunk
         *  Format</a>
         */
        // @ts-ignore
        class HeightMap extends java.lang.Enum<org.bukkit.HeightMap> {
            /**
             * The highest block that blocks motion or contains a fluid.
             */
            // @ts-ignore
            readonly MOTION_BLOCKING: org.bukkit.HeightMap
            /**
             * The highest block that blocks motion or contains a fluid or is in the
             * {@link Tag#LEAVES}.
             */
            // @ts-ignore
            readonly MOTION_BLOCKING_NO_LEAVES: org.bukkit.HeightMap
            /**
             * The highest non-air block, solid block.
             */
            // @ts-ignore
            readonly OCEAN_FLOOR: org.bukkit.HeightMap
            /**
             * The highest block that is neither air nor contains a fluid, for worldgen.
             */
            // @ts-ignore
            readonly OCEAN_FLOOR_WG: org.bukkit.HeightMap
            /**
             * The highest non-air block.
             */
            // @ts-ignore
            readonly WORLD_SURFACE: org.bukkit.HeightMap
            /**
             * The highest non-air block, for worldgen.
             */
            // @ts-ignore
            readonly WORLD_SURFACE_WG: org.bukkit.HeightMap
            // @ts-ignore
            values(): org.bukkit.HeightMap[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): org.bukkit.HeightMap
        }
    }
}
