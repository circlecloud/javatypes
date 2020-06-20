declare namespace org {
    namespace bukkit {
        namespace material {
            namespace types {
                /**
                 * Represents the different textured blocks of mushroom.
                 */
                // @ts-ignore
                class MushroomBlockTexture extends java.lang.Enum<org.bukkit.material.types.MushroomBlockTexture> {
                    // @ts-ignore
                    values(): org.bukkit.material.types.MushroomBlockTexture[]
                    // @ts-ignore
                    valueOf(name: string): org.bukkit.material.types.MushroomBlockTexture
                    /**
                     * Gets the associated data value representing this mushroom block face.
                     * @return A byte containing the data value of this mushroom block face
                     * @deprecated Magic value
                     */
                    // @ts-ignore
                    getData(): byte
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
