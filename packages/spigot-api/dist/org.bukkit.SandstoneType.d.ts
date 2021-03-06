declare namespace org {
    namespace bukkit {
        /**
         * Represents the three different types of Sandstone
         */
        // @ts-ignore
        class SandstoneType extends java.lang.Enum<org.bukkit.SandstoneType> {
            // @ts-ignore
            public static readonly CRACKED: org.bukkit.SandstoneType
            // @ts-ignore
            public static readonly GLYPHED: org.bukkit.SandstoneType
            // @ts-ignore
            public static readonly SMOOTH: org.bukkit.SandstoneType
            // @ts-ignore
            public static values(): org.bukkit.SandstoneType[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.SandstoneType
            /**
             * Gets the associated data value representing this type of sandstone
             * @return A byte containing the data value of this sandstone type
             * @deprecated Magic value
             */
            // @ts-ignore
            public getData(): number /*byte*/
            /**
             * Gets the type of sandstone with the given data value
             * @param data Data value to fetch
             * @return The {#link SandstoneType} representing the given value, or null
             *      if it doesn't exist
             * @deprecated Magic value
             */
            // @ts-ignore
            public static getByData(data: number /*byte*/): org.bukkit.SandstoneType
        }
    }
}
