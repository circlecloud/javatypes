declare namespace org {
    namespace bukkit {
        namespace material {
            namespace types {
                /**
                 * Represents the different textured blocks of mushroom.
                 */
                // @ts-ignore
                class MushroomBlockTexture extends java.lang.Enum<org.bukkit.material.types.MushroomBlockTexture> {
                    /**
                     * Pores on all faces.
                     */
                    // @ts-ignore
                    readonly ALL_PORES: org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Cap texture on the top, north and west faces, pores on remaining sides.
                     */
                    // @ts-ignore
                    readonly CAP_NORTH_WEST: org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Cap texture on the top and north faces, pores on remaining sides.
                     */
                    // @ts-ignore
                    readonly CAP_NORTH: org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Cap texture on the top, north and east faces, pores on remaining sides.
                     */
                    // @ts-ignore
                    readonly CAP_NORTH_EAST: org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Cap texture on the top and west faces, pores on remaining sides.
                     */
                    // @ts-ignore
                    readonly CAP_WEST: org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Cap texture on the top face, pores on remaining sides.
                     */
                    // @ts-ignore
                    readonly CAP_TOP: org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Cap texture on the top and east faces, pores on remaining sides.
                     */
                    // @ts-ignore
                    readonly CAP_EAST: org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Cap texture on the top, south and west faces, pores on remaining sides.
                     */
                    // @ts-ignore
                    readonly CAP_SOUTH_WEST: org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Cap texture on the top and south faces, pores on remaining sides.
                     */
                    // @ts-ignore
                    readonly CAP_SOUTH: org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Cap texture on the top, south and east faces, pores on remaining sides.
                     */
                    // @ts-ignore
                    readonly CAP_SOUTH_EAST: org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Stem texture on the north, east, south and west faces, pores on top and
                     * bottom.
                     */
                    // @ts-ignore
                    readonly STEM_SIDES: org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Cap texture on all faces.
                     */
                    // @ts-ignore
                    readonly ALL_CAP: org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Stem texture on all faces.
                     */
                    // @ts-ignore
                    readonly ALL_STEM: org.bukkit.material.types.MushroomBlockTexture
                    // @ts-ignore
                    values(): org.bukkit.material.types.MushroomBlockTexture[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Gets the associated data value representing this mushroom block face.
                     * @return A byte containing the data value of this mushroom block face
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    getData(): number /*byte*/
                    /**
                     * Gets the face that has cap texture.
                     * @return The cap face
                     */
                    // @ts-ignore
                    getCapFace(): org.bukkit.block.BlockFace
                    /**
                     * Gets the MushroomBlockType with the given data value.
                     * @param data Data value to fetch
                     * @return The {#link MushroomBlockTexture} representing the given value, or
                     *  null if it doesn't exist
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    getByData(data: number /*byte*/): org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Gets the MushroomBlockType with cap texture on the given block face.
                     * @param face the required block face with cap texture
                     * @return The {#link MushroomBlockTexture} representing the given block
                     *  face, or null if it doesn't exist
                     * @see BlockFace
                     */
                    // @ts-ignore
                    getCapByFace(face: org.bukkit.block.BlockFace): org.bukkit.material.types.MushroomBlockTexture
                }
            }
        }
    }
}
