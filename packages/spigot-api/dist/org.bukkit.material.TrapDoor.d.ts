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
                public isOpen(): boolean
                // @ts-ignore
                public setOpen(isOpen: boolean): void
                /**
                 * Test if trapdoor is inverted
                 * @return true if inverted (top half), false if normal (bottom half)
                 */
                // @ts-ignore
                public isInverted(): boolean
                /**
                 * Set trapdoor inverted state
                 * @param inv - true if inverted (top half), false if normal (bottom half)
                 */
                // @ts-ignore
                public setInverted(inv: boolean): void
                // @ts-ignore
                public getAttachedFace(): org.bukkit.block.BlockFace
                // @ts-ignore
                public setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                public toString(): string
                // @ts-ignore
                public clone(): org.bukkit.material.TrapDoor
            }
        }
    }
}
