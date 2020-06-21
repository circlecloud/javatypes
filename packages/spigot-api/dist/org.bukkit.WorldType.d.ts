declare namespace org {
    namespace bukkit {
        /**
         * Represents various types of worlds that may exist
         */
        // @ts-ignore
        class WorldType extends java.lang.Enum<org.bukkit.WorldType> {
            // @ts-ignore
            readonly NORMAL: org.bukkit.WorldType
            // @ts-ignore
            readonly FLAT: org.bukkit.WorldType
            // @ts-ignore
            readonly VERSION_1_1: org.bukkit.WorldType
            // @ts-ignore
            readonly LARGE_BIOMES: org.bukkit.WorldType
            // @ts-ignore
            readonly AMPLIFIED: org.bukkit.WorldType
            // @ts-ignore
            readonly CUSTOMIZED: org.bukkit.WorldType
            // @ts-ignore
            readonly BUFFET: org.bukkit.WorldType
            // @ts-ignore
            values(): org.bukkit.WorldType[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): org.bukkit.WorldType
            /**
             * Gets the name of this WorldType
             * @return Name of this type
             */
            // @ts-ignore
            getName(): string
            /**
             * Gets a WorldType by its name
             * @param name Name of the WorldType to get
             * @return Requested WorldType, or null if not found
             */
            // @ts-ignore
            getByName(name: java.lang.String | string): org.bukkit.WorldType
        }
    }
}
