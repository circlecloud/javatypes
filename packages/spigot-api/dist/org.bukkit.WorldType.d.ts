declare namespace org {
    namespace bukkit {
        /**
         * Represents various types of worlds that may exist
         */
        // @ts-ignore
        class WorldType extends java.lang.Enum<org.bukkit.WorldType> {
            // @ts-ignore
            values(): org.bukkit.WorldType[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.WorldType
            /**
             * Gets the name of this WorldType
             * @return Name of this type
             */
            // @ts-ignore
            getName(): java.lang.String
            /**
             * Gets a WorldType by its name
             * @param name Name of the WorldType to get
             * @return Requested WorldType, or null if not found
             */
            // @ts-ignore
            getByName(name: string): org.bukkit.WorldType
        }
    }
}
