declare namespace org {
    namespace bukkit {
        /**
         * All supported color values for chat
         */
        // @ts-ignore
        class ChatColor extends java.lang.Enum<org.bukkit.ChatColor> {
            /**
             * Represents black
             */
            // @ts-ignore
            public static readonly BLACK: org.bukkit.ChatColor
            /**
             * Represents dark blue
             */
            // @ts-ignore
            public static readonly DARK_BLUE: org.bukkit.ChatColor
            /**
             * Represents dark green
             */
            // @ts-ignore
            public static readonly DARK_GREEN: org.bukkit.ChatColor
            /**
             * Represents dark blue (aqua)
             */
            // @ts-ignore
            public static readonly DARK_AQUA: org.bukkit.ChatColor
            /**
             * Represents dark red
             */
            // @ts-ignore
            public static readonly DARK_RED: org.bukkit.ChatColor
            /**
             * Represents dark purple
             */
            // @ts-ignore
            public static readonly DARK_PURPLE: org.bukkit.ChatColor
            /**
             * Represents gold
             */
            // @ts-ignore
            public static readonly GOLD: org.bukkit.ChatColor
            /**
             * Represents gray
             */
            // @ts-ignore
            public static readonly GRAY: org.bukkit.ChatColor
            /**
             * Represents dark gray
             */
            // @ts-ignore
            public static readonly DARK_GRAY: org.bukkit.ChatColor
            /**
             * Represents blue
             */
            // @ts-ignore
            public static readonly BLUE: org.bukkit.ChatColor
            /**
             * Represents green
             */
            // @ts-ignore
            public static readonly GREEN: org.bukkit.ChatColor
            /**
             * Represents aqua
             */
            // @ts-ignore
            public static readonly AQUA: org.bukkit.ChatColor
            /**
             * Represents red
             */
            // @ts-ignore
            public static readonly RED: org.bukkit.ChatColor
            /**
             * Represents light purple
             */
            // @ts-ignore
            public static readonly LIGHT_PURPLE: org.bukkit.ChatColor
            /**
             * Represents yellow
             */
            // @ts-ignore
            public static readonly YELLOW: org.bukkit.ChatColor
            /**
             * Represents white
             */
            // @ts-ignore
            public static readonly WHITE: org.bukkit.ChatColor
            /**
             * Represents magical characters that change around randomly
             */
            // @ts-ignore
            public static readonly MAGIC: org.bukkit.ChatColor
            /**
             * Makes the text bold.
             */
            // @ts-ignore
            public static readonly BOLD: org.bukkit.ChatColor
            /**
             * Makes a line appear through the text.
             */
            // @ts-ignore
            public static readonly STRIKETHROUGH: org.bukkit.ChatColor
            /**
             * Makes the text appear underlined.
             */
            // @ts-ignore
            public static readonly UNDERLINE: org.bukkit.ChatColor
            /**
             * Makes the text italic.
             */
            // @ts-ignore
            public static readonly ITALIC: org.bukkit.ChatColor
            /**
             * Resets all previous chat colors or formats.
             */
            // @ts-ignore
            public static readonly RESET: org.bukkit.ChatColor
            /**
             * The special character which prefixes all chat colour codes. Use this if
             * you need to dynamically convert colour codes from your custom format.
             */
            // @ts-ignore
            public static readonly COLOR_CHAR: string
            // @ts-ignore
            public static values(): org.bukkit.ChatColor[]
            // @ts-ignore
            public static valueOf(name: java.lang.String | string): org.bukkit.ChatColor
            // @ts-ignore
            public asBungee(): net.md_5.bungee.api.ChatColor
            /**
             * Gets the char value associated with this color
             * @return A char value of this color code
             */
            // @ts-ignore
            public getChar(): string
            // @ts-ignore
            public toString(): string
            /**
             * Checks if this code is a format code as opposed to a color code.
             * @return whether this ChatColor is a format code
             */
            // @ts-ignore
            public isFormat(): boolean
            /**
             * Checks if this code is a color code as opposed to a format code.
             * @return whether this ChatColor is a color code
             */
            // @ts-ignore
            public isColor(): boolean
            /**
             * Gets the color represented by the specified color code
             * @param code Code to check
             * @return Associative {#link org.bukkit.ChatColor} with the given code,
             *      or null if it doesn't exist
             */
            // @ts-ignore
            public static getByChar(code: string): org.bukkit.ChatColor
            /**
             * Gets the color represented by the specified color code
             * @param code Code to check
             * @return Associative {#link org.bukkit.ChatColor} with the given code,
             *      or null if it doesn't exist
             */
            // @ts-ignore
            public static getByChar(code: java.lang.String | string): org.bukkit.ChatColor
            /**
             * Strips the given message of all color codes
             * @param input String to strip of color
             * @return A copy of the input string, without any coloring
             */
            // @ts-ignore
            public static stripColor(input: java.lang.String | string): string
            /**
             * Translates a string using an alternate color code character into a
             * string that uses the internal ChatColor.COLOR_CODE color code
             * character. The alternate color code character will only be replaced if
             * it is immediately followed by 0-9, A-F, a-f, K-O, k-o, R or r.
             * @param altColorChar The alternate color code character to replace. Ex: {#literal &}
             * @param textToTranslate Text containing the alternate color code character.
             * @return Text containing the ChatColor.COLOR_CODE color code character.
             */
            // @ts-ignore
            public static translateAlternateColorCodes(altColorChar: string, textToTranslate: java.lang.String | string): string
            /**
             * Gets the ChatColors used at the end of the given input string.
             * @param input Input string to retrieve the colors from.
             * @return Any remaining ChatColors to pass onto the next line.
             */
            // @ts-ignore
            public static getLastColors(input: java.lang.String | string): string
        }
    }
}
