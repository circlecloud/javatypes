declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a vine
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Vine extends org.bukkit.material.MaterialData {
                // @ts-ignore
                constructor()
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                /**
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(data: number /*byte*/)
                // @ts-ignore
                constructor(...faces: org.bukkit.block.BlockFace[])
                // @ts-ignore
                constructor(faces: java.util.EnumSet<org.bukkit.block.BlockFace>)
                /**
                 * Check if the vine is attached to the specified face of an adjacent
                 * block. You can check two faces at once by passing e.g. {@link
                 * BlockFace#NORTH_EAST}.
                 * @param face The face to check.
                 * @return Whether it is attached to that face.
                 */
                // @ts-ignore
                isOnFace(face: org.bukkit.block.BlockFace): boolean
                /**
                 * Attach the vine to the specified face of an adjacent block.
                 * @param face The face to attach.
                 */
                // @ts-ignore
                putOnFace(face: org.bukkit.block.BlockFace): void
                /**
                 * Detach the vine from the specified face of an adjacent block.
                 * @param face The face to detach.
                 */
                // @ts-ignore
                removeFromFace(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Vine
            }
        }
    }
}
