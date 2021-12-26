declare namespace org {
    namespace bukkit {
        /**
         * Represents various types of worlds that may exist
         */
        // @ts-ignore
        class WorldType extends java.lang.Enum<org.bukkit.WorldType> {
            // @ts-ignore
            public static readonly NORMAL: org.bukkit.WorldType
            // @ts-ignore
            public static readonly FLAT: org.bukkit.WorldType
            // @ts-ignore
            public static readonly LARGE_BIOMES: org.bukkit.WorldType
            // @ts-ignore
            public static readonly AMPLIFIED: org.bukkit.WorldType
            // @ts-ignore
            public static values(): org.bukkit.WorldType[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.WorldType
            /**
             * Gets the name of this WorldType
             * @return Name of this type
             */
            // @ts-ignore
            public getName(): string
            /**
             * Gets a WorldType by its name
             * @param name Name of the WorldType to get
             * @return Requested WorldType, or null if not found
             */
            // @ts-ignore
            public static getByName(name: java.lang.String | string): org.bukkit.WorldType
        }
    }
}
