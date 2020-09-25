declare namespace org {
    namespace bukkit {
        /**
         * Represents the various type of game modes that {@link HumanEntity}s may
         * have
         */
        // @ts-ignore
        class GameMode extends java.lang.Enum<org.bukkit.GameMode> {
            /**
             * Creative mode may fly, build instantly, become invulnerable and create
             * free items.
             */
            // @ts-ignore
            public static readonly CREATIVE: org.bukkit.GameMode
            /**
             * Survival mode is the "normal" gameplay type, with no special features.
             */
            // @ts-ignore
            public static readonly SURVIVAL: org.bukkit.GameMode
            /**
             * Adventure mode cannot break blocks without the correct tools.
             */
            // @ts-ignore
            public static readonly ADVENTURE: org.bukkit.GameMode
            /**
             * Spectator mode cannot interact with the world in anyway and is
             * invisible to normal players. This grants the player the
             * ability to no-clip through the world.
             */
            // @ts-ignore
            public static readonly SPECTATOR: org.bukkit.GameMode
            // @ts-ignore
            public static values(): org.bukkit.GameMode[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.GameMode
            /**
             * Gets the mode value associated with this GameMode
             * @return An integer value of this gamemode
             * @deprecated Magic value
             */
            // @ts-ignore
            public getValue(): number /*int*/
            /**
             * Gets the GameMode represented by the specified value
             * @param value Value to check
             * @return Associative {#link GameMode} with the given value, or null if
             *      it doesn't exist
             * @deprecated Magic value
             */
            // @ts-ignore
            public static getByValue(value: number /*int*/): org.bukkit.GameMode
        }
    }
}
