declare namespace org {
    namespace bukkit {
        /**
         * Represents the different types of grass.
         */
        // @ts-ignore
        class GrassSpecies extends java.lang.Enum<org.bukkit.GrassSpecies> {
            /**
             * Represents the dead looking grass.
             */
            // @ts-ignore
            public static readonly DEAD: org.bukkit.GrassSpecies
            /**
             * Represents the normal grass species.
             */
            // @ts-ignore
            public static readonly NORMAL: org.bukkit.GrassSpecies
            /**
             * Represents the fern-looking grass species.
             */
            // @ts-ignore
            public static readonly FERN_LIKE: org.bukkit.GrassSpecies
            // @ts-ignore
            public static values(): org.bukkit.GrassSpecies[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.GrassSpecies
            /**
             * Gets the associated data value representing this species
             * @return A byte containing the data value of this grass species
             * @deprecated Magic value
             */
            // @ts-ignore
            public getData(): number /*byte*/
            /**
             * Gets the GrassSpecies with the given data value
             * @param data Data value to fetch
             * @return The {#link GrassSpecies} representing the given value, or null
             *      if it doesn't exist
             * @deprecated Magic value
             */
            // @ts-ignore
            public static getByData(data: number /*byte*/): org.bukkit.GrassSpecies
        }
    }
}
