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
                    values(): org.bukkit.map.MapCursor.Type[]
                    // @ts-ignore
                    valueOf(name: string): org.bukkit.map.MapCursor.Type
                    /**
                     * Gets the internal value of the cursor.
                     * @return the value
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    getValue(): byte
                    /**
                     * Get a cursor by its internal value.
                     * @param value the value
                     * @return the matching type
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    byValue(value: number /*byte*/): org.bukkit.map.MapCursor.Type
                }
            }
        }
    }
}
