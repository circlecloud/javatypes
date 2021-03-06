declare namespace org {
    namespace bukkit {
        /**
         * An enum of all current weather types
         */
        // @ts-ignore
        class WeatherType extends java.lang.Enum<org.bukkit.WeatherType> {
            /**
             * Raining or snowing depending on biome.
             */
            // @ts-ignore
            public static readonly DOWNFALL: org.bukkit.WeatherType
            /**
             * Clear weather, clouds but no rain.
             */
            // @ts-ignore
            public static readonly CLEAR: org.bukkit.WeatherType
            // @ts-ignore
            public static values(): org.bukkit.WeatherType[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.WeatherType
        }
    }
}
