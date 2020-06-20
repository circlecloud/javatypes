declare namespace org {
    namespace bukkit {
        /**
         * Represents the various type of game modes that {@link HumanEntity}s may
         * have
         */
        // @ts-ignore
        class GameMode extends java.lang.Enum<org.bukkit.GameMode> {
            // @ts-ignore
            values(): org.bukkit.GameMode[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.GameMode
            /**
             * Gets the mode value associated with this GameMode
             * @return An integer value of this gamemode
             * @deprecated Magic value
             */
            // @ts-ignore
            getValue(): int
            /**
             * Gets the GameMode represented by the specified value
             * @param value Value to check
             * @return Associative {#link GameMode} with the given value, or null if
             *      it doesn't exist
             * @deprecated Magic value
             */
            // @ts-ignore
            getByValue(value: number /*int*/): org.bukkit.GameMode
        }
    }
}
