declare namespace org {
    namespace bukkit {
        namespace map {
            /**
             * Represents a cursor on a map.
             */
            // @ts-ignore
            class MapCursor extends java.lang.Object {
                /**
                 * Initialize the map cursor.
                 * @param x The x coordinate, from -128 to 127.
                 * @param y The y coordinate, from -128 to 127.
                 * @param direction The facing of the cursor, from 0 to 15.
                 * @param type The type (color/style) of the map cursor.
                 * @param visible Whether the cursor is visible by default.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(x: number /*byte*/, y: number /*byte*/, direction: number /*byte*/, type: number /*byte*/, visible: boolean)
                /**
                 * Initialize the map cursor.
                 * @param x The x coordinate, from -128 to 127.
                 * @param y The y coordinate, from -128 to 127.
                 * @param direction The facing of the cursor, from 0 to 15.
                 * @param type The type (color/style) of the map cursor.
                 * @param visible Whether the cursor is visible by default.
                 */
                // @ts-ignore
                constructor(x: number /*byte*/, y: number /*byte*/, direction: number /*byte*/, type: org.bukkit.map.MapCursor.Type, visible: boolean)
                /**
                 * Initialize the map cursor.
                 * @param x The x coordinate, from -128 to 127.
                 * @param y The y coordinate, from -128 to 127.
                 * @param direction The facing of the cursor, from 0 to 15.
                 * @param type The type (color/style) of the map cursor.
                 * @param visible Whether the cursor is visible by default.
                 * @param caption cursor caption
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(x: number /*byte*/, y: number /*byte*/, direction: number /*byte*/, type: number /*byte*/, visible: boolean, caption: string)
                /**
                 * Initialize the map cursor.
                 * @param x The x coordinate, from -128 to 127.
                 * @param y The y coordinate, from -128 to 127.
                 * @param direction The facing of the cursor, from 0 to 15.
                 * @param type The type (color/style) of the map cursor.
                 * @param visible Whether the cursor is visible by default.
                 * @param caption cursor caption
                 */
                // @ts-ignore
                constructor(x: number /*byte*/, y: number /*byte*/, direction: number /*byte*/, type: org.bukkit.map.MapCursor.Type, visible: boolean, caption: string)
                /**
                 * Get the X position of this cursor.
                 * @return The X coordinate.
                 */
                // @ts-ignore
                getX(): byte
                /**
                 * Get the Y position of this cursor.
                 * @return The Y coordinate.
                 */
                // @ts-ignore
                getY(): byte
                /**
                 * Get the direction of this cursor.
                 * @return The facing of the cursor, from 0 to 15.
                 */
                // @ts-ignore
                getDirection(): byte
                /**
                 * Get the type of this cursor.
                 * @return The type (color/style) of the map cursor.
                 */
                // @ts-ignore
                getType(): org.bukkit.map.MapCursor.Type
                /**
                 * Get the type of this cursor.
                 * @return The type (color/style) of the map cursor.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getRawType(): byte
                /**
                 * Get the visibility status of this cursor.
                 * @return True if visible, false otherwise.
                 */
                // @ts-ignore
                isVisible(): boolean
                /**
                 * Set the X position of this cursor.
                 * @param x The X coordinate.
                 */
                // @ts-ignore
                setX(x: number /*byte*/): void
                /**
                 * Set the Y position of this cursor.
                 * @param y The Y coordinate.
                 */
                // @ts-ignore
                setY(y: number /*byte*/): void
                /**
                 * Set the direction of this cursor.
                 * @param direction The facing of the cursor, from 0 to 15.
                 */
                // @ts-ignore
                setDirection(direction: number /*byte*/): void
                /**
                 * Set the type of this cursor.
                 * @param type The type (color/style) of the map cursor.
                 */
                // @ts-ignore
                setType(type: org.bukkit.map.MapCursor.Type): void
                /**
                 * Set the type of this cursor.
                 * @param type The type (color/style) of the map cursor.
                 * @deprecated Magic value
                 */
                // @ts-ignore
                setRawType(type: number /*byte*/): void
                /**
                 * Set the visibility status of this cursor.
                 * @param visible True if visible.
                 */
                // @ts-ignore
                setVisible(visible: boolean): void
                /**
                 * Gets the caption on this cursor.
                 * @return caption
                 */
                // @ts-ignore
                getCaption(): java.lang.String
                /**
                 * Sets the caption on this cursor.
                 * @param caption new caption
                 */
                // @ts-ignore
                setCaption(caption: string): void
            }
        }
    }
}
