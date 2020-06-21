declare namespace org {
    namespace bukkit {
        /**
         * Represents the different species of trees regardless of size.
         */
        // @ts-ignore
        class TreeSpecies extends java.lang.Enum<org.bukkit.TreeSpecies> {
            /**
             * Represents the common tree species.
             */
            // @ts-ignore
            readonly GENERIC: org.bukkit.TreeSpecies
            /**
             * Represents the darker barked/leaved tree species.
             */
            // @ts-ignore
            readonly REDWOOD: org.bukkit.TreeSpecies
            /**
             * Represents birches.
             */
            // @ts-ignore
            readonly BIRCH: org.bukkit.TreeSpecies
            /**
             * Represents jungle trees.
             */
            // @ts-ignore
            readonly JUNGLE: org.bukkit.TreeSpecies
            /**
             * Represents acacia trees.
             */
            // @ts-ignore
            readonly ACACIA: org.bukkit.TreeSpecies
            /**
             * Represents dark oak trees.
             */
            // @ts-ignore
            readonly DARK_OAK: org.bukkit.TreeSpecies
            // @ts-ignore
            values(): org.bukkit.TreeSpecies[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): org.bukkit.TreeSpecies
            /**
             * Gets the associated data value representing this species
             * @return A byte containing the data value of this tree species
             * @deprecated Magic value
             */
            // @ts-ignore
            getData(): number /*byte*/
            /**
             * Gets the TreeSpecies with the given data value
             * @param data Data value to fetch
             * @return The {#link TreeSpecies} representing the given value, or null
             *      if it doesn't exist
             * @deprecated Magic value
             */
            // @ts-ignore
            getByData(data: number /*byte*/): org.bukkit.TreeSpecies
        }
    }
}
