declare namespace org {
    namespace bukkit {
        namespace block {
            /**
             * Represents a structure block that can save and load blocks from a file. They
             * can only be used by OPs, and are not obtainable in survival.
             */
            // @ts-ignore
            interface Structure extends org.bukkit.block.TileState {
                /**
                 * The name of this structure.
                 * @return structure name
                 */
                // @ts-ignore
                getStructureName(): string
                /**
                 * Set the name of this structure. This is case-sensitive. The name of the
                 * structure in the {@link UsageMode#SAVE} structure block MUST match the
                 * name within the {@link UsageMode#CORNER} block or the size calculation
                 * will fail.
                 * @param name the case-sensitive name of this structure
                 */
                // @ts-ignore
                setStructureName(name: java.lang.String | string): void
                /**
                 * Get the name of who created this structure.
                 * @return the name of whoever created this structure.
                 */
                // @ts-ignore
                getAuthor(): string
                /**
                 * Set the name of whoever created this structure.
                 * @param author whoever created this structure (not empty)
                 */
                // @ts-ignore
                setAuthor(author: java.lang.String | string): void
                /**
                 * Set the name of whoever created this structure using a
                 * {@link LivingEntity}.
                 * @param livingEntity the entity who created this structure
                 */
                // @ts-ignore
                setAuthor(livingEntity: org.bukkit.entity.LivingEntity): void
                /**
                 * The relative position of the structure outline based on the position of
                 * the structure block. Maximum allowed distance is 48 blocks in any
                 * direction.
                 * @return a Location which contains the relative distance this structure is
                 *  from the structure block.
                 */
                // @ts-ignore
                getRelativePosition(): org.bukkit.util.BlockVector
                /**
                 * Set the relative position from the structure block. Maximum allowed
                 * distance is 48 blocks in any direction.
                 * @param vector the {#link BlockVector} containing the relative origin
                 *  coordinates of this structure.
                 */
                // @ts-ignore
                setRelativePosition(vector: org.bukkit.util.BlockVector): void
                /**
                 * The distance to the opposite corner of this structure. The maximum
                 * structure size is 48x48x48. When a structure has successfully been
                 * calculated (i.e. it is within the maximum allowed distance) a white
                 * border surrounds the structure.
                 * @return a {#link BlockVector} which contains the total size of the
                 *  structure.
                 */
                // @ts-ignore
                getStructureSize(): org.bukkit.util.BlockVector
                /**
                 * Set the maximum size of this structure from the origin point. Maximum
                 * allowed size is 48x48x48.
                 * @param vector the {#link BlockVector} containing the size of this
                 *  structure, based off of the origin coordinates.
                 */
                // @ts-ignore
                setStructureSize(vector: org.bukkit.util.BlockVector): void
                /**
                 * Sets the mirroring of the structure.
                 * @param mirror the new mirroring method
                 */
                // @ts-ignore
                setMirror(mirror: org.bukkit.block.structure.Mirror): void
                /**
                 * How this structure is mirrored.
                 * @return the current mirroring method
                 */
                // @ts-ignore
                getMirror(): org.bukkit.block.structure.Mirror
                /**
                 * Set how this structure is rotated.
                 * @param rotation the new rotation
                 */
                // @ts-ignore
                setRotation(rotation: org.bukkit.block.structure.StructureRotation): void
                /**
                 * Get how this structure is rotated.
                 * @return the new rotation
                 */
                // @ts-ignore
                getRotation(): org.bukkit.block.structure.StructureRotation
                /**
                 * Set the {@link UsageMode} of this structure block.
                 * @param mode the new mode to set.
                 */
                // @ts-ignore
                setUsageMode(mode: org.bukkit.block.structure.UsageMode): void
                /**
                 * Get the {@link UsageMode} of this structure block.
                 * @return the mode this block is currently in.
                 */
                // @ts-ignore
                getUsageMode(): org.bukkit.block.structure.UsageMode
                /**
                 * While in {@link UsageMode#SAVE} mode, this will ignore any entities when
                 * saving the structure.
                 * <br>
                 * While in {@link UsageMode#LOAD} mode this will ignore any entities that
                 * were saved to file.
                 * @param ignoreEntities the flag to set
                 */
                // @ts-ignore
                setIgnoreEntities(ignoreEntities: boolean): void
                /**
                 * Get if this structure block should ignore entities.
                 * @return true if the appropriate {#link UsageMode} should ignore entities.
                 */
                // @ts-ignore
                isIgnoreEntities(): boolean
                /**
                 * Set if the structure outline should show air blocks.
                 * @param showAir if the structure block should show air blocks
                 */
                // @ts-ignore
                setShowAir(showAir: boolean): void
                /**
                 * Check if this structure block is currently showing all air blocks
                 * @return true if the structure block is showing all air blocks
                 */
                // @ts-ignore
                isShowAir(): boolean
                /**
                 * Set if this structure box should show the bounding box.
                 * @param showBoundingBox if the structure box should be shown
                 */
                // @ts-ignore
                setBoundingBoxVisible(showBoundingBox: boolean): void
                /**
                 * Get if this structure block is currently showing the bounding box.
                 * @return true if the bounding box is shown
                 */
                // @ts-ignore
                isBoundingBoxVisible(): boolean
                /**
                 * Set the integrity of the structure. Integrity must be between 0.0 and 1.0
                 * Lower integrity values will result in more blocks being removed when
                 * loading a structure. Integrity and {@link #getSeed()} are used together
                 * to determine which blocks are randomly removed to mimic "decay."
                 * @param integrity the integrity of this structure
                 */
                // @ts-ignore
                setIntegrity(integrity: number /*float*/): void
                /**
                 * Get the integrity of this structure.
                 * @return the integrity of this structure
                 */
                // @ts-ignore
                getIntegrity(): number /*float*/
                /**
                 * The seed used to determine which blocks will be removed upon loading.
                 * {@link #getIntegrity()} and seed are used together to determine which
                 * blocks are randomly removed to mimic "decay."
                 * @param seed the seed used to determine how many blocks will be removed
                 */
                // @ts-ignore
                setSeed(seed: number /*long*/): void
                /**
                 * The seed used to determine how many blocks are removed upon loading of
                 * this structure.
                 * @return the seed used
                 */
                // @ts-ignore
                getSeed(): number /*long*/
                /**
                 * Only applicable while in {@link UsageMode#DATA}. Metadata are specific
                 * functions that can be applied to the structure location. Consult the
                 * <a href="https://minecraft.gamepedia.com/Structure_Block#Data">Minecraft
                 * wiki</a> for more information.
                 * @param metadata the function to perform on the selected location
                 */
                // @ts-ignore
                setMetadata(metadata: java.lang.String | string): void
                /**
                 * Get the metadata function this structure block will perform when
                 * activated. Consult the
                 * <a href="https://minecraft.gamepedia.com/Structure_Block#Data">Minecraft
                 * Wiki</a> for more information.
                 * @return the function that will be performed when this block is activated
                 */
                // @ts-ignore
                getMetadata(): string
            }
        }
    }
}
