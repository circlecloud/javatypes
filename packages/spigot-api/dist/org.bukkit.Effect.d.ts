declare namespace org {
    namespace bukkit {
        /**
         * A list of effects that the server is able to send to players.
         */
        // @ts-ignore
        class Effect extends java.lang.Enum<org.bukkit.Effect> {
            // @ts-ignore
            values(): org.bukkit.Effect[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.Effect
            /**
             * Gets the ID for this effect.
             * @return ID of this effect
             * @deprecated Magic value
             */
            // @ts-ignore
            getId(): int
            /**
             * @return The type of the effect.
             */
            // @ts-ignore
            getType(): org.bukkit.Effect.Type
            /**
             * @return The class which represents data for this effect, or null if
             *      none
             */
            // @ts-ignore
            getData(): java.lang.Class<?>
            /**
             * Gets the Effect associated with the given ID.
             * @param id ID of the Effect to return
             * @return Effect with the given ID
             * @deprecated Magic value
             */
            // @ts-ignore
            getById(id: number /*int*/): org.bukkit.Effect
        }
    }
}
