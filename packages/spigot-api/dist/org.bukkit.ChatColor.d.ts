declare namespace org {
    namespace bukkit {
        /**
         * All supported color values for chat
         */
        // @ts-ignore
        class ChatColor extends java.lang.Enum<org.bukkit.ChatColor> {
            /**
             * The special character which prefixes all chat colour codes. Use this if
             * you need to dynamically convert colour codes from your custom format.
             */
            // @ts-ignore
            readonly COLOR_CHAR: string
            // @ts-ignore
            values(): org.bukkit.ChatColor[]
            // @ts-ignore
            valueOf(name: string): org.bukkit.ChatColor
            // @ts-ignore
            asBungee(): net.md_5.bungee.api.ChatColor
            /**
             * Gets the char value associated with this color
             * @return A char value of this color code
             */
            // @ts-ignore
            getChar(): char
            // @ts-ignore
            toString(): java.lang.String
            /**
             * Checks if this code is a format code as opposed to a color code.
             * @return whether this ChatColor is a format code
             */
            // @ts-ignore
            isFormat(): boolean
            /**
             * Checks if this code is a color code as opposed to a format code.
             * @return whether this ChatColor is a color code
             */
            // @ts-ignore
            isColor(): boolean
            /**
             * Gets the color represented by the specified color code
             * @param code Code to check
             * @return Associative {#link org.bukkit.ChatColor} with the given code,
             *      or null if it doesn't exist
             */
            // @ts-ignore
            getByChar(code: string): org.bukkit.ChatColor
            /**
             * Gets the color represented by the specified color code
             * @param code Code to check
             * @return Associative {#link org.bukkit.ChatColor} with the given code,
             *      or null if it doesn't exist
             */
            // @ts-ignore
            getByChar(code: string): org.bukkit.ChatColor
            /**
             * Strips the given message of all color codes
             * @param input String to strip of color
             * @return A copy of the input string, without any coloring
             */
            // @ts-ignore
            stripColor(input: string): java.lang.String
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
            translateAlternateColorCodes(altColorChar: string, textToTranslate: string): java.lang.String
            /**
             * Gets the ChatColors used at the end of the given input string.
             * @param input Input string to retrieve the colors from.
             * @return Any remaining ChatColors to pass onto the next line.
             */
            // @ts-ignore
            getLastColors(input: string): java.lang.String
        }
    }
}
