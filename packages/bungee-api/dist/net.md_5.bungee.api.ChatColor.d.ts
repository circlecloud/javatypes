declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace api {
                /**
                 * Simplistic enumeration of all supported color values for chat.
                 */
                // @ts-ignore
                class ChatColor extends java.lang.Enum<net.md_5.bungee.api.ChatColor> {
                    /**
                     * Represents black.
                     */
                    // @ts-ignore
                    readonly BLACK: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents dark blue.
                     */
                    // @ts-ignore
                    readonly DARK_BLUE: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents dark green.
                     */
                    // @ts-ignore
                    readonly DARK_GREEN: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents dark blue (aqua).
                     */
                    // @ts-ignore
                    readonly DARK_AQUA: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents dark red.
                     */
                    // @ts-ignore
                    readonly DARK_RED: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents dark purple.
                     */
                    // @ts-ignore
                    readonly DARK_PURPLE: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents gold.
                     */
                    // @ts-ignore
                    readonly GOLD: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents gray.
                     */
                    // @ts-ignore
                    readonly GRAY: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents dark gray.
                     */
                    // @ts-ignore
                    readonly DARK_GRAY: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents blue.
                     */
                    // @ts-ignore
                    readonly BLUE: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents green.
                     */
                    // @ts-ignore
                    readonly GREEN: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents aqua.
                     */
                    // @ts-ignore
                    readonly AQUA: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents red.
                     */
                    // @ts-ignore
                    readonly RED: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents light purple.
                     */
                    // @ts-ignore
                    readonly LIGHT_PURPLE: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents yellow.
                     */
                    // @ts-ignore
                    readonly YELLOW: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents white.
                     */
                    // @ts-ignore
                    readonly WHITE: net.md_5.bungee.api.ChatColor
                    /**
                     * Represents magical characters that change around randomly.
                     */
                    // @ts-ignore
                    readonly MAGIC: net.md_5.bungee.api.ChatColor
                    /**
                     * Makes the text bold.
                     */
                    // @ts-ignore
                    readonly BOLD: net.md_5.bungee.api.ChatColor
                    /**
                     * Makes a line appear through the text.
                     */
                    // @ts-ignore
                    readonly STRIKETHROUGH: net.md_5.bungee.api.ChatColor
                    /**
                     * Makes the text appear underlined.
                     */
                    // @ts-ignore
                    readonly UNDERLINE: net.md_5.bungee.api.ChatColor
                    /**
                     * Makes the text italic.
                     */
                    // @ts-ignore
                    readonly ITALIC: net.md_5.bungee.api.ChatColor
                    /**
                     * Resets all previous chat colors or formats.
                     */
                    // @ts-ignore
                    readonly RESET: net.md_5.bungee.api.ChatColor
                    /**
                     * The special character which prefixes all chat colour codes. Use this if
                     * you need to dynamically convert colour codes from your custom format.
                     */
                    // @ts-ignore
                    readonly COLOR_CHAR: string
                    // @ts-ignore
                    readonly ALL_CODES: java.lang.String | string
                    /**
                     * Pattern to remove all colour codes.
                     */
                    // @ts-ignore
                    readonly STRIP_COLOR_PATTERN: java.util.regex.Pattern
                    // @ts-ignore
                    values(): net.md_5.bungee.api.ChatColor[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): net.md_5.bungee.api.ChatColor
                    // @ts-ignore
                    toString(): string
                    /**
                     * Strips the given message of all color codes
                     * @param input String to strip of color
                     * @return A copy of the input string, without any coloring
                     */
                    // @ts-ignore
                    stripColor(input: java.lang.String | string): string
                    // @ts-ignore
                    translateAlternateColorCodes(altColorChar: string, textToTranslate: java.lang.String | string): string
                    /**
                     * Get the colour represented by the specified code.
                     * @param code the code to search for
                     * @return the mapped colour, or null if non exists
                     */
                    // @ts-ignore
                    getByChar(code: string): net.md_5.bungee.api.ChatColor
                    // @ts-ignore
                    getName(): string
                }
            }
        }
    }
}
