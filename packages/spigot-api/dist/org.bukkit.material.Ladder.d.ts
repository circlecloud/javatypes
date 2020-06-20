declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents Ladder data
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Ladder extends org.bukkit.material.SimpleAttachableMaterialData {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(type: org.bukkit.Material)
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * Gets the face that this block is attached on
                 * @return BlockFace attached to
                 */
                // @ts-ignore
                getAttachedFace(): org.bukkit.block.BlockFace
                /**
                 * Sets the direction this ladder is facing
                 */
                // @ts-ignore
                setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                clone(): org.bukkit.material.Ladder
            }
        }
    }
}
