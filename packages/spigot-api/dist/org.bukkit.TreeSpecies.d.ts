declare namespace org {
    namespace bukkit {
        /**
         * Represents the different species of trees regardless of size.
         */
        // @ts-ignore
        class TreeSpecies extends java.lang.Enum<org.bukkit.TreeSpecies> {
            // @ts-ignore
            values(): org.bukkit.TreeSpecies[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.TreeSpecies
            /**
             * Gets the associated data value representing this species
             * @return A byte containing the data value of this tree species
             * @deprecated Magic value
             */
            // @ts-ignore
            getData(): byte
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
