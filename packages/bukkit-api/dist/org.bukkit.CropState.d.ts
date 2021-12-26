declare namespace org {
    namespace bukkit {
        /**
         * Represents the different growth states of crops
         */
        // @ts-ignore
        class CropState extends java.lang.Enum<org.bukkit.CropState> {
            /**
             * State when first seeded
             */
            // @ts-ignore
            public static readonly SEEDED: org.bukkit.CropState
            /**
             * First growth stage
             */
            // @ts-ignore
            public static readonly GERMINATED: org.bukkit.CropState
            /**
             * Second growth stage
             */
            // @ts-ignore
            public static readonly VERY_SMALL: org.bukkit.CropState
            /**
             * Third growth stage
             */
            // @ts-ignore
            public static readonly SMALL: org.bukkit.CropState
            /**
             * Fourth growth stage
             */
            // @ts-ignore
            public static readonly MEDIUM: org.bukkit.CropState
            /**
             * Fifth growth stage
             */
            // @ts-ignore
            public static readonly TALL: org.bukkit.CropState
            /**
             * Almost ripe stage
             */
            // @ts-ignore
            public static readonly VERY_TALL: org.bukkit.CropState
            /**
             * Ripe stage
             */
            // @ts-ignore
            public static readonly RIPE: org.bukkit.CropState
            // @ts-ignore
            public static values(): org.bukkit.CropState[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.CropState
            /**
             * Gets the associated data value representing this growth state
             * @return A byte containing the data value of this growth state
             * @deprecated Magic value
             */
            // @ts-ignore
            public getData(): number /*byte*/
            /**
             * Gets the CropState with the given data value
             * @param data Data value to fetch
             * @return The {#link CropState} representing the given value, or null if
             *      it doesn't exist
             * @deprecated Magic value
             */
            // @ts-ignore
            public static getByData(data: number /*byte*/): org.bukkit.CropState
        }
    }
}
