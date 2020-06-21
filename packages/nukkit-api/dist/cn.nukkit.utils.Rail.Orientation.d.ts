declare namespace cn {
    namespace nukkit {
        namespace utils {
            namespace Rail {
                // @ts-ignore
                class Orientation extends java.lang.Enum<cn.nukkit.utils.Rail.Orientation> {
                    // @ts-ignore
                    readonly STRAIGHT_NORTH_SOUTH: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    readonly STRAIGHT_EAST_WEST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    readonly ASCENDING_EAST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    readonly ASCENDING_WEST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    readonly ASCENDING_NORTH: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    readonly ASCENDING_SOUTH: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    readonly CURVED_SOUTH_EAST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    readonly CURVED_SOUTH_WEST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    readonly CURVED_NORTH_WEST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    readonly CURVED_NORTH_EAST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    values(): cn.nukkit.utils.Rail.Orientation[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    byMetadata(meta: number /*int*/): cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    straight(face: cn.nukkit.math.BlockFace): cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    ascending(face: cn.nukkit.math.BlockFace): cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    curved(f1: cn.nukkit.math.BlockFace, f2: cn.nukkit.math.BlockFace): cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    straightOrCurved(f1: cn.nukkit.math.BlockFace, f2: cn.nukkit.math.BlockFace): cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    metadata(): number /*int*/
                    // @ts-ignore
                    hasConnectingDirections(...faces: cn.nukkit.math.BlockFace[]): boolean
                    // @ts-ignore
                    connectingDirections(): Array<cn.nukkit.math.BlockFace>
                    // @ts-ignore
                    ascendingDirection(): java.util.Optional<cn.nukkit.math.BlockFace>
                    // @ts-ignore
                    isStraight(): boolean
                    // @ts-ignore
                    isAscending(): boolean
                    // @ts-ignore
                    isCurved(): boolean
                }
            }
        }
    }
}
