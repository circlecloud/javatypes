declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a huge mushroom block with certain combinations of faces set to
             * cap, pores or stem.
             * @see Material#LEGACY_HUGE_MUSHROOM_1
             * @see Material#LEGACY_HUGE_MUSHROOM_2
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Mushroom extends org.bukkit.material.MaterialData {
                /**
                 * Constructs a brown/red mushroom block with all sides set to pores.
                 * @param shroom A brown or red mushroom material type.
                 * @see Material#LEGACY_HUGE_MUSHROOM_1
                 * @see Material#LEGACY_HUGE_MUSHROOM_2
                 */
                // @ts-ignore
                constructor(shroom: org.bukkit.Material)
                /**
                 * Constructs a brown/red mushroom cap block with the specified face or
                 * faces set to cap texture.
                 * Setting any of the four sides will also set the top to cap.
                 * To set two side faces at once use e.g. north-west.
                 * Specify self to set all six faces at once.
                 * @param shroom A brown or red mushroom material type.
                 * @param capFace The face or faces to set to mushroom cap texture.
                 * @see Material#LEGACY_HUGE_MUSHROOM_1
                 * @see Material#LEGACY_HUGE_MUSHROOM_2
                 * @see BlockFace
                 */
                // @ts-ignore
                constructor(shroom: org.bukkit.Material, capFace: org.bukkit.block.BlockFace)
                /**
                 * Constructs a brown/red mushroom block with the specified textures.
                 * @param shroom A brown or red mushroom material type.
                 * @param texture The textured mushroom faces.
                 * @see Material#LEGACY_HUGE_MUSHROOM_1
                 * @see Material#LEGACY_HUGE_MUSHROOM_2
                 */
                // @ts-ignore
                constructor(shroom: org.bukkit.Material, texture: org.bukkit.material.types.MushroomBlockTexture)
                /**
                 * @param shroom the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(shroom: org.bukkit.Material, data: number /*byte*/)
                /**
                 * @return Whether this is a mushroom stem.
                 */
                // @ts-ignore
                isStem(): boolean
                /**
                 * Sets this to be a mushroom stem.
                 * @see MushroomBlockTexture#STEM_SIDES
                 * @see MushroomBlockTexture#ALL_STEM
                 * @deprecated Use
                 *  {#link #setBlockTexture(org.bukkit.material.types.MushroomBlockTexture)}
                 *  with {@link MushroomBlockTexture#STEM_SIDES } or
                 *  {@link MushroomBlockTexture#ALL_STEM}
                 */
                // @ts-ignore
                setStem(): void
                /**
                 * Gets the mushroom texture of this block.
                 * @return The mushroom texture of this block
                 */
                // @ts-ignore
                getBlockTexture(): org.bukkit.material.types.MushroomBlockTexture
                /**
                 * Sets the mushroom texture of this block.
                 * @param texture The mushroom texture to set
                 */
                // @ts-ignore
                setBlockTexture(texture: org.bukkit.material.types.MushroomBlockTexture): void
                /**
                 * Checks whether a face of the block is painted with cap texture.
                 * @param face The face to check.
                 * @return True if it is painted.
                 */
                // @ts-ignore
                isFacePainted(face: org.bukkit.block.BlockFace): boolean
                /**
                 * Set a face of the block to be painted or not. Note that due to the
                 * nature of how the data is stored, setting a face painted or not is not
                 * guaranteed to leave the other faces unchanged.
                 * @param face The face to paint or unpaint.
                 * @param painted True if you want to paint it, false if you want the
                 *      pores to show.
                 * @deprecated Use MushroomBlockType cap options
                 */
                // @ts-ignore
                setFacePainted(face: org.bukkit.block.BlockFace, painted: boolean): void
                /**
                 * @return A set of all faces that are currently painted (an empty set if
                 *      it is a stem)
                 */
                // @ts-ignore
                getPaintedFaces(): java.util.Set<org.bukkit.block.BlockFace>
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Mushroom
            }
        }
    }
}
