declare namespace org {
    namespace bukkit {
        /**
         * Represents the various difficulty levels that are available.
         */
        // @ts-ignore
        class Difficulty extends java.lang.Enum<org.bukkit.Difficulty> {
            /**
             * Players regain health over time, hostile mobs don't spawn, the hunger
             * bar does not deplete.
             */
            // @ts-ignore
            public static readonly PEACEFUL: org.bukkit.Difficulty
            /**
             * Hostile mobs spawn, enemies deal less damage than on normal difficulty,
             * the hunger bar does deplete and starving deals up to 5 hearts of
             * damage. (Default value)
             */
            // @ts-ignore
            public static readonly EASY: org.bukkit.Difficulty
            /**
             * Hostile mobs spawn, enemies deal normal amounts of damage, the hunger
             * bar does deplete and starving deals up to 9.5 hearts of damage.
             */
            // @ts-ignore
            public static readonly NORMAL: org.bukkit.Difficulty
            /**
             * Hostile mobs spawn, enemies deal greater damage than on normal
             * difficulty, the hunger bar does deplete and starving can kill players.
             */
            // @ts-ignore
            public static readonly HARD: org.bukkit.Difficulty
            // @ts-ignore
            public static values(): org.bukkit.Difficulty[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.Difficulty
            /**
             * Gets the difficulty value associated with this Difficulty.
             * @return An integer value of this difficulty
             * @deprecated Magic value
             */
            // @ts-ignore
            public getValue(): number /*int*/
            /**
             * Gets the Difficulty represented by the specified value
             * @param value Value to check
             * @return Associative {#link Difficulty} with the given value, or null if
             *      it doesn't exist
             * @deprecated Magic value
             */
            // @ts-ignore
            public static getByValue(value: number /*int*/): org.bukkit.Difficulty
        }
    }
}
