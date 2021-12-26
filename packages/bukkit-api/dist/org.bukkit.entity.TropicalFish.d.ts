declare namespace org {
    namespace bukkit {
        namespace entity {
            /**
             * Tropical fish.
             */
            // @ts-ignore
            interface TropicalFish extends org.bukkit.entity.Fish {
                /**
                 * Gets the color of the fish's pattern.
                 * @return pattern color
                 */
                // @ts-ignore
                getPatternColor(): org.bukkit.DyeColor
                /**
                 * Sets the color of the fish's pattern
                 * @param color pattern color
                 */
                // @ts-ignore
                setPatternColor(color: org.bukkit.DyeColor): void
                /**
                 * Gets the color of the fish's body.
                 * @return pattern color
                 */
                // @ts-ignore
                getBodyColor(): org.bukkit.DyeColor
                /**
                 * Sets the color of the fish's body
                 * @param color body color
                 */
                // @ts-ignore
                setBodyColor(color: org.bukkit.DyeColor): void
                /**
                 * Gets the fish's pattern.
                 * @return pattern
                 */
                // @ts-ignore
                getPattern(): org.bukkit.entity.TropicalFish.Pattern
                /**
                 * Sets the fish's pattern
                 * @param pattern new pattern
                 */
                // @ts-ignore
                setPattern(pattern: org.bukkit.entity.TropicalFish.Pattern): void
            }
        }
    }
}
