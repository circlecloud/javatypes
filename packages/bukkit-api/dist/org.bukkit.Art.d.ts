declare namespace org {
    namespace bukkit {
        /**
         * Represents the art on a painting
         */
        // @ts-ignore
        class Art extends java.lang.Enum<org.bukkit.Art> implements org.bukkit.Keyed {
            // @ts-ignore
            public static readonly KEBAB: org.bukkit.Art
            // @ts-ignore
            public static readonly AZTEC: org.bukkit.Art
            // @ts-ignore
            public static readonly ALBAN: org.bukkit.Art
            // @ts-ignore
            public static readonly AZTEC2: org.bukkit.Art
            // @ts-ignore
            public static readonly BOMB: org.bukkit.Art
            // @ts-ignore
            public static readonly PLANT: org.bukkit.Art
            // @ts-ignore
            public static readonly WASTELAND: org.bukkit.Art
            // @ts-ignore
            public static readonly POOL: org.bukkit.Art
            // @ts-ignore
            public static readonly COURBET: org.bukkit.Art
            // @ts-ignore
            public static readonly SEA: org.bukkit.Art
            // @ts-ignore
            public static readonly SUNSET: org.bukkit.Art
            // @ts-ignore
            public static readonly CREEBET: org.bukkit.Art
            // @ts-ignore
            public static readonly WANDERER: org.bukkit.Art
            // @ts-ignore
            public static readonly GRAHAM: org.bukkit.Art
            // @ts-ignore
            public static readonly MATCH: org.bukkit.Art
            // @ts-ignore
            public static readonly BUST: org.bukkit.Art
            // @ts-ignore
            public static readonly STAGE: org.bukkit.Art
            // @ts-ignore
            public static readonly VOID: org.bukkit.Art
            // @ts-ignore
            public static readonly SKULL_AND_ROSES: org.bukkit.Art
            // @ts-ignore
            public static readonly WITHER: org.bukkit.Art
            // @ts-ignore
            public static readonly FIGHTERS: org.bukkit.Art
            // @ts-ignore
            public static readonly POINTER: org.bukkit.Art
            // @ts-ignore
            public static readonly PIGSCENE: org.bukkit.Art
            // @ts-ignore
            public static readonly BURNING_SKULL: org.bukkit.Art
            // @ts-ignore
            public static readonly SKELETON: org.bukkit.Art
            // @ts-ignore
            public static readonly DONKEY_KONG: org.bukkit.Art
            // @ts-ignore
            public static values(): org.bukkit.Art[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.Art
            /**
             * Gets the width of the painting, in blocks
             * @return The width of the painting, in blocks
             */
            // @ts-ignore
            public getBlockWidth(): number /*int*/
            /**
             * Gets the height of the painting, in blocks
             * @return The height of the painting, in blocks
             */
            // @ts-ignore
            public getBlockHeight(): number /*int*/
            /**
             * Get the ID of this painting.
             * @return The ID of this painting
             * @deprecated Magic value
             */
            // @ts-ignore
            public getId(): number /*int*/
            // @ts-ignore
            public getKey(): org.bukkit.NamespacedKey
            /**
             * Get a painting by its numeric ID
             * @param id The ID
             * @return The painting
             * @deprecated Magic value
             */
            // @ts-ignore
            public static getById(id: number /*int*/): org.bukkit.Art
            /**
             * Get a painting by its unique name
             * <p>
             * This ignores underscores and capitalization
             * @param name The name
             * @return The painting
             */
            // @ts-ignore
            public static getByName(name: java.lang.String | string): org.bukkit.Art
        }
    }
}
