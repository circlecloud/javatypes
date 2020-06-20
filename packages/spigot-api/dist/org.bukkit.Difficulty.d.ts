declare namespace org {
    namespace bukkit {
        /**
         * Represents the various difficulty levels that are available.
         */
        // @ts-ignore
        class Difficulty extends java.lang.Enum<org.bukkit.Difficulty> {
            // @ts-ignore
            values(): org.bukkit.Difficulty[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.Difficulty
            /**
             * Gets the difficulty value associated with this Difficulty.
             * @return An integer value of this difficulty
             * @deprecated Magic value
             */
            // @ts-ignore
            getValue(): int
            /**
             * Gets the Difficulty represented by the specified value
             * @param value Value to check
             * @return Associative {#link Difficulty} with the given value, or null if
             *      it doesn't exist
             * @deprecated Magic value
             */
            // @ts-ignore
            getByValue(value: number /*int*/): org.bukkit.Difficulty
        }
    }
}
