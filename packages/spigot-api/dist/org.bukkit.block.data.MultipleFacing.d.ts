declare namespace org {
    namespace bukkit {
        namespace block {
            namespace data {
                /**
                 * This class encompasses the 'north', 'east', 'south', 'west', 'up', 'down'
                 * boolean flags which are used to set which faces of the block textures are
                 * displayed on.
                 * <br>
                 * Some blocks may not be able to have faces on all directions, use
                 * {@link #getAllowedFaces()} to get all possible faces for this block. It is
                 * not valid to call any methods on non-allowed faces.
                 */
                // @ts-ignore
                interface MultipleFacing extends org.bukkit.block.data.BlockData {
                    /**
                     * Checks if this block has the specified face enabled.
                     * @param face to check
                     * @return if face is enabled
                     */
                    // @ts-ignore
                    hasFace(face: org.bukkit.block.BlockFace): boolean
                    /**
                     * Set whether this block has the specified face enabled.
                     * @param face to set
                     * @param has the face
                     */
                    // @ts-ignore
                    setFace(face: org.bukkit.block.BlockFace, has: boolean): void
                    /**
                     * Get all of the faces which are enabled on this block.
                     * @return all faces enabled
                     */
                    // @ts-ignore
                    getFaces(): java.util.Set<org.bukkit.block.BlockFace>
                    /**
                     * Gets all of this faces which may be set on this block.
                     * @return all allowed faces
                     */
                    // @ts-ignore
                    getAllowedFaces(): java.util.Set<org.bukkit.block.BlockFace>
                }
            }
        }
    }
}
