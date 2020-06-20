declare namespace org {
    namespace bukkit {
        namespace map {
            /**
             * Represents a bitmap font drawable to a map.
             */
            // @ts-ignore
            class MapFont extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                malleable: boolean
                /**
                 * Set the sprite for a given character.
                 * @param ch The character to set the sprite for.
                 * @param sprite The CharacterSprite to set.
                 * @throws IllegalStateException if this font is static.
                 */
                // @ts-ignore
                setChar(ch: string, sprite: org.bukkit.map.MapFont.CharacterSprite): void
                /**
                 * Get the sprite for a given character.
                 * @param ch The character to get the sprite for.
                 * @return The CharacterSprite associated with the character, or null if
                 *      there is none.
                 */
                // @ts-ignore
                getChar(ch: string): org.bukkit.map.MapFont.CharacterSprite
                /**
                 * Get the width of the given text as it would be rendered using this
                 * font.
                 * @param text The text.
                 * @return The width in pixels.
                 */
                // @ts-ignore
                getWidth(text: string): int
                /**
                 * Get the height of this font.
                 * @return The height of the font.
                 */
                // @ts-ignore
                getHeight(): int
                /**
                 * Check whether the given text is valid.
                 * @param text The text.
                 * @return True if the string contains only defined characters, false
                 *      otherwise.
                 */
                // @ts-ignore
                isValid(text: string): boolean
            }
        }
    }
}
