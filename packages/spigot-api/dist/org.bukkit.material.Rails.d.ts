declare namespace org {
    namespace bukkit {
        namespace material {
            /**
             * Represents minecart rails.
             * @deprecated all usage of MaterialData is deprecated and subject to removal.
             *  Use {#link org.bukkit.block.data.BlockData}.
             */
            // @ts-ignore
            class Rails extends org.bukkit.material.MaterialData {
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
                 * @return the whether this track is set on a slope
                 */
                // @ts-ignore
                isOnSlope(): boolean
                /**
                 * @return the whether this track is set as a curve
                 */
                // @ts-ignore
                isCurve(): boolean
                /**
                 * @return the direction these tracks are set
                 *      <p>
                 *      Note that tracks are bidirectional and that the direction returned
                 *      is the ascending direction if the track is set on a slope. If it is
                 *      set as a curve, the corner of the track is returned.
                 */
                // @ts-ignore
                getDirection(): org.bukkit.block.BlockFace
                // @ts-ignore
                toString(): java.lang.String
                /**
                 * Return the data without the extended properties used by {@link
                 * PoweredRail} and {@link DetectorRail}. Overridden in {@link
                 * ExtendedRails}
                 * @return the data without the extended part
                 * @deprecated Magic value
                 */
                // @ts-ignore
                getConvertedData(): byte
                /**
                 * Set the direction of these tracks
                 * <p>
                 * Note that tracks are bidirectional and that the direction returned is
                 * the ascending direction if the track is set on a slope. If it is set as
                 * a curve, the corner of the track should be supplied.
                 * @param face the direction the track should be facing
                 * @param isOnSlope whether or not the track should be on a slope
                 */
                // @ts-ignore
                setDirection(face: org.bukkit.block.BlockFace, isOnSlope: boolean): void
                // @ts-ignore
                clone(): org.bukkit.material.Rails
            }
        }
    }
}
