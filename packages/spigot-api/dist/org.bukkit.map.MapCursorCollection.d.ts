declare namespace org {
    namespace bukkit {
        namespace map {
            /**
             * Represents all the map cursors on a {@link MapCanvas}. Like MapCanvas, a
             * MapCursorCollection is linked to a specific {@link MapRenderer}.
             */
            // @ts-ignore
            class MapCursorCollection extends java.lang.Object {
                // @ts-ignore
                constructor()
                /**
                 * Get the amount of cursors in this collection.
                 * @return The size of this collection.
                 */
                // @ts-ignore
                size(): int
                /**
                 * Get a cursor from this collection.
                 * @param index The index of the cursor.
                 * @return The MapCursor.
                 */
                // @ts-ignore
                getCursor(index: number /*int*/): org.bukkit.map.MapCursor
                /**
                 * Remove a cursor from the collection.
                 * @param cursor The MapCursor to remove.
                 * @return Whether the cursor was removed successfully.
                 */
                // @ts-ignore
                removeCursor(cursor: org.bukkit.map.MapCursor): boolean
                /**
                 * Add a cursor to the collection.
                 * @param cursor The MapCursor to add.
                 * @return The MapCursor that was passed.
                 */
                // @ts-ignore
                addCursor(cursor: org.bukkit.map.MapCursor): org.bukkit.map.MapCursor
                /**
                 * Add a cursor to the collection.
                 * @param x The x coordinate, from -128 to 127.
                 * @param y The y coordinate, from -128 to 127.
                 * @param direction The facing of the cursor, from 0 to 15.
                 * @return The newly added MapCursor.
                 */
                // @ts-ignore
                addCursor(x: number /*int*/, y: number /*int*/, direction: number /*byte*/): org.bukkit.map.MapCursor
                /**
                 * Add a cursor to the collection.
                 * @param x The x coordinate, from -128 to 127.
                 * @param y The y coordinate, from -128 to 127.
                 * @param direction The facing of the cursor, from 0 to 15.
                 * @param type The type (color/style) of the map cursor.
                 * @return The newly added MapCursor.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                addCursor(x: number /*int*/, y: number /*int*/, direction: number /*byte*/, type: number /*byte*/): org.bukkit.map.MapCursor
                /**
                 * Add a cursor to the collection.
                 * @param x The x coordinate, from -128 to 127.
                 * @param y The y coordinate, from -128 to 127.
                 * @param direction The facing of the cursor, from 0 to 15.
                 * @param type The type (color/style) of the map cursor.
                 * @param visible Whether the cursor is visible.
                 * @return The newly added MapCursor.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                addCursor(x: number /*int*/, y: number /*int*/, direction: number /*byte*/, type: number /*byte*/, visible: boolean): org.bukkit.map.MapCursor
                /**
                 * Add a cursor to the collection.
                 * @param x The x coordinate, from -128 to 127.
                 * @param y The y coordinate, from -128 to 127.
                 * @param direction The facing of the cursor, from 0 to 15.
                 * @param type The type (color/style) of the map cursor.
                 * @param visible Whether the cursor is visible.
                 * @param caption banner caption
                 * @return The newly added MapCursor.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                addCursor(x: number /*int*/, y: number /*int*/, direction: number /*byte*/, type: number /*byte*/, visible: boolean, caption: string): org.bukkit.map.MapCursor
            }
        }
    }
}
