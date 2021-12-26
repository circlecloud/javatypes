declare namespace org {
    namespace bukkit {
        namespace map {
            namespace MapCursor {
                /**
                 * Represents the standard types of map cursors. More may be made
                 * available by resource packs - the value is used by the client as an
                 * index in the file './misc/mapicons.png' from minecraft.jar or from a
                 * resource pack.
                 */
                // @ts-ignore
                class Type extends java.lang.Enum<org.bukkit.map.MapCursor.Type> {
                    // @ts-ignore
                    public static readonly WHITE_POINTER: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly GREEN_POINTER: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly RED_POINTER: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BLUE_POINTER: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly WHITE_CROSS: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly RED_MARKER: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly WHITE_CIRCLE: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly SMALL_WHITE_CIRCLE: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly MANSION: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly TEMPLE: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_WHITE: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_ORANGE: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_MAGENTA: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_LIGHT_BLUE: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_YELLOW: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_LIME: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_PINK: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_GRAY: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_LIGHT_GRAY: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_CYAN: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_PURPLE: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_BLUE: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_BROWN: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_GREEN: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_RED: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly BANNER_BLACK: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static readonly RED_X: org.bukkit.map.MapCursor.Type
                    // @ts-ignore
                    public static values(): org.bukkit.map.MapCursor.Type[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): org.bukkit.map.MapCursor.Type
                    /**
                     * Gets the internal value of the cursor.
                     * @return the value
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    public getValue(): number /*byte*/
                    /**
                     * Get a cursor by its internal value.
                     * @param value the value
                     * @return the matching type
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    public static byValue(value: number /*byte*/): org.bukkit.map.MapCursor.Type
                }
            }
        }
    }
}
