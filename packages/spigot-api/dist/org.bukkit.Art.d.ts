declare namespace org {
    namespace bukkit {
        /**
         * Represents the art on a painting
         */
        // @ts-ignore
        class Art extends java.lang.Enum<org.bukkit.Art> implements org.bukkit.Keyed {
            // @ts-ignore
            values(): org.bukkit.Art[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.Art
            /**
             * Gets the width of the painting, in blocks
             * @return The width of the painting, in blocks
             */
            // @ts-ignore
            getBlockWidth(): int
            /**
             * Gets the height of the painting, in blocks
             * @return The height of the painting, in blocks
             */
            // @ts-ignore
            getBlockHeight(): int
            /**
             * Get the ID of this painting.
             * @return The ID of this painting
             * @deprecated Magic value
             */
            // @ts-ignore
            getId(): int
            // @ts-ignore
            getKey(): org.bukkit.NamespacedKey
            /**
             * Get a painting by its numeric ID
             * @param id The ID
             * @return The painting
             * @deprecated Magic value
             */
            // @ts-ignore
            getById(id: number /*int*/): org.bukkit.Art
            /**
             * Get a painting by its unique name
             * <p>
             * This ignores underscores and capitalization
             * @param name The name
             * @return The painting
             */
            // @ts-ignore
            getByName(name: string): org.bukkit.Art
        }
    }
}
