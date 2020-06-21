declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * All supported formatting values for chat and console.
             */
            // @ts-ignore
            class TextFormat extends java.lang.Enum<cn.nukkit.utils.TextFormat> {
                /**
                 * Represents black.
                 */
                // @ts-ignore
                readonly BLACK: cn.nukkit.utils.TextFormat
                /**
                 * Represents dark blue.
                 */
                // @ts-ignore
                readonly DARK_BLUE: cn.nukkit.utils.TextFormat
                /**
                 * Represents dark green.
                 */
                // @ts-ignore
                readonly DARK_GREEN: cn.nukkit.utils.TextFormat
                /**
                 * Represents dark blue (aqua).
                 */
                // @ts-ignore
                readonly DARK_AQUA: cn.nukkit.utils.TextFormat
                /**
                 * Represents dark red.
                 */
                // @ts-ignore
                readonly DARK_RED: cn.nukkit.utils.TextFormat
                /**
                 * Represents dark purple.
                 */
                // @ts-ignore
                readonly DARK_PURPLE: cn.nukkit.utils.TextFormat
                /**
                 * Represents gold.
                 */
                // @ts-ignore
                readonly GOLD: cn.nukkit.utils.TextFormat
                /**
                 * Represents gray.
                 */
                // @ts-ignore
                readonly GRAY: cn.nukkit.utils.TextFormat
                /**
                 * Represents dark gray.
                 */
                // @ts-ignore
                readonly DARK_GRAY: cn.nukkit.utils.TextFormat
                /**
                 * Represents blue.
                 */
                // @ts-ignore
                readonly BLUE: cn.nukkit.utils.TextFormat
                /**
                 * Represents green.
                 */
                // @ts-ignore
                readonly GREEN: cn.nukkit.utils.TextFormat
                /**
                 * Represents aqua.
                 */
                // @ts-ignore
                readonly AQUA: cn.nukkit.utils.TextFormat
                /**
                 * Represents red.
                 */
                // @ts-ignore
                readonly RED: cn.nukkit.utils.TextFormat
                /**
                 * Represents light purple.
                 */
                // @ts-ignore
                readonly LIGHT_PURPLE: cn.nukkit.utils.TextFormat
                /**
                 * Represents yellow.
                 */
                // @ts-ignore
                readonly YELLOW: cn.nukkit.utils.TextFormat
                /**
                 * Represents white.
                 */
                // @ts-ignore
                readonly WHITE: cn.nukkit.utils.TextFormat
                /**
                 * Makes the text obfuscated.
                 */
                // @ts-ignore
                readonly OBFUSCATED: cn.nukkit.utils.TextFormat
                /**
                 * Makes the text bold.
                 */
                // @ts-ignore
                readonly BOLD: cn.nukkit.utils.TextFormat
                /**
                 * Makes a line appear through the text.
                 */
                // @ts-ignore
                readonly STRIKETHROUGH: cn.nukkit.utils.TextFormat
                /**
                 * Makes the text appear underlined.
                 */
                // @ts-ignore
                readonly UNDERLINE: cn.nukkit.utils.TextFormat
                /**
                 * Makes the text italic.
                 */
                // @ts-ignore
                readonly ITALIC: cn.nukkit.utils.TextFormat
                /**
                 * Resets all previous chat colors or formats.
                 */
                // @ts-ignore
                readonly RESET: cn.nukkit.utils.TextFormat
                /**
                 * The special character which prefixes all format codes. Use this if
                 * you need to dynamically convert format codes from your custom format.
                 */
                // @ts-ignore
                readonly ESCAPE: string
                // @ts-ignore
                values(): cn.nukkit.utils.TextFormat[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): cn.nukkit.utils.TextFormat
                /**
                 * Gets the TextFormat represented by the specified format code.
                 * @param code Code to check
                 * @return Associative {#link TextFormat} with the given code,
                 *  or null if it doesn't exist
                 */
                // @ts-ignore
                getByChar(code: string): cn.nukkit.utils.TextFormat
                /**
                 * Gets the TextFormat represented by the specified format code.
                 * @param code Code to check
                 * @return Associative {#link TextFormat} with the given code,
                 *  or null if it doesn't exist
                 */
                // @ts-ignore
                getByChar(code: java.lang.String | string): cn.nukkit.utils.TextFormat
                /**
                 * Cleans the given message of all format codes.
                 * @param input String to clean.
                 * @return A copy of the input string, without any formatting.
                 */
                // @ts-ignore
                clean(input: java.lang.String | string): string
                // @ts-ignore
                clean(input: java.lang.String | string, recursive: boolean): string
                /**
                 * Translates a string using an alternate format code character into a
                 * string that uses the internal TextFormat.ESCAPE format code
                 * character. The alternate format code character will only be replaced if
                 * it is immediately followed by 0-9, A-F, a-f, K-O, k-o, R or r.
                 * @param altFormatChar   The alternate format code character to replace. Ex: &amp;
                 * @param textToTranslate Text containing the alternate format code character.
                 * @return Text containing the TextFormat.ESCAPE format code character.
                 */
                // @ts-ignore
                colorize(altFormatChar: string, textToTranslate: java.lang.String | string): string
                /**
                 * Translates a string, using an ampersand (&amp;) as an alternate format code
                 * character, into a string that uses the internal TextFormat.ESCAPE format
                 * code character. The alternate format code character will only be replaced if
                 * it is immediately followed by 0-9, A-F, a-f, K-O, k-o, R or r.
                 * @param textToTranslate Text containing the alternate format code character.
                 * @return Text containing the TextFormat.ESCAPE format code character.
                 */
                // @ts-ignore
                colorize(textToTranslate: java.lang.String | string): string
                /**
                 * Gets the chat color used at the end of the given input string.
                 * @param input Input string to retrieve the colors from.
                 * @return Any remaining chat color to pass onto the next line.
                 */
                // @ts-ignore
                getLastColors(input: java.lang.String | string): string
                /**
                 * Gets the char value associated with this color
                 * @return A char value of this color code
                 */
                // @ts-ignore
                getChar(): string
                // @ts-ignore
                toString(): string
                /**
                 * Checks if this code is a format code as opposed to a color code.
                 */
                // @ts-ignore
                isFormat(): boolean
                /**
                 * Checks if this code is a color code as opposed to a format code.
                 */
                // @ts-ignore
                isColor(): boolean
            }
        }
    }
}
