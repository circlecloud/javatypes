declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a captured state of either a SignPost or a WallSign.
             */
            // @ts-ignore
            interface Sign extends org.bukkit.block.TileState, org.bukkit.material.Colorable {
                /**
                 * Gets all the lines of text currently on this sign.
                 * @return Array of Strings containing each line of text
                 */
                // @ts-ignore
                getLines(): string[]
                /**
                 * Gets the line of text at the specified index.
                 * <p>
                 * For example, getLine(0) will return the first line of text.
                 * @param index Line number to get the text from, starting at 0
                 * @throws IndexOutOfBoundsException Thrown when the line does not exist
                 * @return Text on the given line
                 */
                // @ts-ignore
                getLine(index: number /*int*/): string
                /**
                 * Sets the line of text at the specified index.
                 * <p>
                 * For example, setLine(0, "Line One") will set the first line of text to
                 * "Line One".
                 * @param index Line number to set the text at, starting from 0
                 * @param line New text to set at the specified index
                 * @throws IndexOutOfBoundsException If the index is out of the range 0..3
                 */
                // @ts-ignore
                setLine(index: number /*int*/, line: java.lang.String | string): void
                /**
                 * Marks whether this sign can be edited by players.
                 * <br>
                 * This is a special value, which is not persisted. It should only be set if
                 * a placed sign is manipulated during the BlockPlaceEvent. Behaviour
                 * outside of this event is undefined.
                 * @return if this sign is currently editable
                 */
                // @ts-ignore
                isEditable(): boolean
                /**
                 * Marks whether this sign can be edited by players.
                 * <br>
                 * This is a special value, which is not persisted. It should only be set if
                 * a placed sign is manipulated during the BlockPlaceEvent. Behaviour
                 * outside of this event is undefined.
                 * @param editable if this sign is currently editable
                 */
                // @ts-ignore
                setEditable(editable: boolean): void
            }
        }
    }
}
