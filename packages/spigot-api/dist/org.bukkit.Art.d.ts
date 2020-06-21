declare namespace org {
    namespace bukkit {
        /**
         * Represents the art on a painting
         */
        // @ts-ignore
        class Art extends java.lang.Enum<org.bukkit.Art> implements org.bukkit.Keyed {
            // @ts-ignore
            readonly KEBAB: org.bukkit.Art
            // @ts-ignore
            readonly AZTEC: org.bukkit.Art
            // @ts-ignore
            readonly ALBAN: org.bukkit.Art
            // @ts-ignore
            readonly AZTEC2: org.bukkit.Art
            // @ts-ignore
            readonly BOMB: org.bukkit.Art
            // @ts-ignore
            readonly PLANT: org.bukkit.Art
            // @ts-ignore
            readonly WASTELAND: org.bukkit.Art
            // @ts-ignore
            readonly POOL: org.bukkit.Art
            // @ts-ignore
            readonly COURBET: org.bukkit.Art
            // @ts-ignore
            readonly SEA: org.bukkit.Art
            // @ts-ignore
            readonly SUNSET: org.bukkit.Art
            // @ts-ignore
            readonly CREEBET: org.bukkit.Art
            // @ts-ignore
            readonly WANDERER: org.bukkit.Art
            // @ts-ignore
            readonly GRAHAM: org.bukkit.Art
            // @ts-ignore
            readonly MATCH: org.bukkit.Art
            // @ts-ignore
            readonly BUST: org.bukkit.Art
            // @ts-ignore
            readonly STAGE: org.bukkit.Art
            // @ts-ignore
            readonly VOID: org.bukkit.Art
            // @ts-ignore
            readonly SKULL_AND_ROSES: org.bukkit.Art
            // @ts-ignore
            readonly WITHER: org.bukkit.Art
            // @ts-ignore
            readonly FIGHTERS: org.bukkit.Art
            // @ts-ignore
            readonly POINTER: org.bukkit.Art
            // @ts-ignore
            readonly PIGSCENE: org.bukkit.Art
            // @ts-ignore
            readonly BURNING_SKULL: org.bukkit.Art
            // @ts-ignore
            readonly SKELETON: org.bukkit.Art
            // @ts-ignore
            readonly DONKEY_KONG: org.bukkit.Art
            // @ts-ignore
            values(): org.bukkit.Art[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): org.bukkit.Art
            /**
             * Gets the width of the painting, in blocks
             * @return The width of the painting, in blocks
             */
            // @ts-ignore
            getBlockWidth(): number /*int*/
            /**
             * Gets the height of the painting, in blocks
             * @return The height of the painting, in blocks
             */
            // @ts-ignore
            getBlockHeight(): number /*int*/
            /**
             * Get the ID of this painting.
             * @return The ID of this painting
             * @deprecated Magic value
             */
            // @ts-ignore
            getId(): number /*int*/
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
            getByName(name: java.lang.String | string): org.bukkit.Art
        }
    }
}
