declare namespace org {
    namespace bukkit {
        namespace map {
            namespace MapFont {
                /**
                 * Represents the graphics for a single character in a MapFont.
                 */
                // @ts-ignore
                class CharacterSprite extends java.lang.Object {
                    // @ts-ignore
                    constructor(width: number /*int*/, height: number /*int*/, data: boolean[])
                    /**
                     * Get the value of a pixel of the character.
                     * @param row The row, in the range [0,8).
                     * @param col The column, in the range [0,8).
                     * @return True if the pixel is solid, false if transparent.
                     */
                    // @ts-ignore
                    public get(row: number /*int*/, col: number /*int*/): boolean
                    /**
                     * Get the width of the character sprite.
                     * @return The width of the character.
                     */
                    // @ts-ignore
                    public getWidth(): number /*int*/
                    /**
                     * Get the height of the character sprite.
                     * @return The height of the character.
                     */
                    // @ts-ignore
                    public getHeight(): number /*int*/
                }
            }
        }
    }
}
