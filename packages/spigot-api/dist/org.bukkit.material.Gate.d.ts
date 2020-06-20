declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a fence gate
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Gate extends org.bukkit.material.MaterialData implements org.bukkit.material.Directional, org.bukkit.material.Openable {
                // @ts-ignore
                constructor()
                /**
                 * @param type the type
                 * @param data the raw data value
                 * @deprecated Magic value
                 */
                // @ts-ignore
                constructor(type: org.bukkit.Material, data: number /*byte*/)
                // @ts-ignore
                constructor(data: number /*byte*/)
                // @ts-ignore
                setFacingDirection(face: org.bukkit.block.BlockFace): void
                // @ts-ignore
                getFacing(): org.bukkit.block.BlockFace
                // @ts-ignore
                isOpen(): boolean
                // @ts-ignore
                setOpen(isOpen: boolean): void
                // @ts-ignore
                toString(): java.lang.String
                // @ts-ignore
                clone(): org.bukkit.material.Gate
            }
        }
    }
}
