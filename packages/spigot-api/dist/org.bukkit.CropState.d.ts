declare namespace org {
    namespace bukkit {
        /**
         * Represents the different growth states of crops
         */
        // @ts-ignore
        class CropState extends java.lang.Enum<org.bukkit.CropState> {
            // @ts-ignore
            values(): org.bukkit.CropState[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.CropState
            /**
             * Gets the associated data value representing this growth state
             * @return A byte containing the data value of this growth state
             * @deprecated Magic value
             */
            // @ts-ignore
            getData(): byte
            /**
             * Gets the CropState with the given data value
             * @param data Data value to fetch
             * @return The {#link CropState} representing the given value, or null if
             *      it doesn't exist
             * @deprecated Magic value
             */
            // @ts-ignore
            getByData(data: number /*byte*/): org.bukkit.CropState
        }
    }
}
