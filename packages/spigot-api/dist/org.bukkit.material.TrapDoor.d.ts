declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a trap door
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class TrapDoor extends org.bukkit.material.SimpleAttachableMaterialData implements org.bukkit.material.Openable {
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
                // @ts-ignore
                isOpen(): boolean
                // @ts-ignore
                setOpen(isOpen: boolean): void
                /**
                 * Test if trapdoor is inverted
                 * @return true if inverted (top half), false if normal (bottom half)
                 */
                // @ts-ignore
                isInverted(): boolean
                /**
                 * Set trapdoor inverted state
                 * @param inv - true if inverted (top half), false if normal (bottom half)
                 */
                // @ts-ignore
                setInverted(inv: boolean): void
                // @ts-ignore
                getAttachedFace(): org.bukkit.block.BlockFace
                // @ts-ignore
                setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.TrapDoor
            }
        }
    }
}
