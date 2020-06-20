declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * This is the superclass for the {@link DetectorRail} and {@link PoweredRail}
             * classes
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class ExtendedRails extends org.bukkit.material.Rails {
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
                isCurve(): boolean
                /**
                 * {@inheritDoc}
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getConvertedData(): byte
                // @ts-ignore
                setDirection(face: org.bukkit.block.BlockFace, isOnSlope: boolean): void
                // @ts-ignore
                clone(): org.bukkit.material.ExtendedRails
            }
        }
    }
}
