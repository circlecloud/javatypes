declare namespace org {
    namespace bukkit {
        /**
         * Represents the two types of coal
         */
        // @ts-ignore
        class CoalType extends java.lang.Enum<org.bukkit.CoalType> {
            // @ts-ignore
            readonly COAL: org.bukkit.CoalType
            // @ts-ignore
            readonly CHARCOAL: org.bukkit.CoalType
            // @ts-ignore
            values(): org.bukkit.CoalType[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): org.bukkit.CoalType
            /**
             * Gets the associated data value representing this type of coal
             * @return A byte containing the data value of this coal type
             * @deprecated Magic value
             */
            // @ts-ignore
            getData(): number /*byte*/
            /**
             * Gets the type of coal with the given data value
             * @param data Data value to fetch
             * @return The {#link CoalType} representing the given value, or null if
             *      it doesn't exist
             * @deprecated Magic value
             */
            // @ts-ignore
            getByData(data: number /*byte*/): org.bukkit.CoalType
        }
    }
}
