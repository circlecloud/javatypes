declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents a detector rail
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class DetectorRail extends org.bukkit.material.ExtendedRails implements org.bukkit.material.PressureSensor {
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
                isPressed(): boolean
                // @ts-ignore
                setPressed(isPressed: boolean): void
                // @ts-ignore
                clone(): org.bukkit.material.DetectorRail
            }
        }
    }
}
