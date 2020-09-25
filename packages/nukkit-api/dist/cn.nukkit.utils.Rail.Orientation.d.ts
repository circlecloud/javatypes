declare namespace cn {
    namespace nukkit {
        namespace utils {
            namespace Rail {
                // @ts-ignore
                class Orientation extends java.lang.Enum<cn.nukkit.utils.Rail.Orientation> {
                    // @ts-ignore
                    public static readonly STRAIGHT_NORTH_SOUTH: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static readonly STRAIGHT_EAST_WEST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static readonly ASCENDING_EAST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static readonly ASCENDING_WEST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static readonly ASCENDING_NORTH: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static readonly ASCENDING_SOUTH: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static readonly CURVED_SOUTH_EAST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static readonly CURVED_SOUTH_WEST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static readonly CURVED_NORTH_WEST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static readonly CURVED_NORTH_EAST: cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static values(): cn.nukkit.utils.Rail.Orientation[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static byMetadata(meta: number /*int*/): cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static straight(face: cn.nukkit.math.BlockFace): cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static ascending(face: cn.nukkit.math.BlockFace): cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static curved(f1: cn.nukkit.math.BlockFace, f2: cn.nukkit.math.BlockFace): cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public static straightOrCurved(f1: cn.nukkit.math.BlockFace, f2: cn.nukkit.math.BlockFace): cn.nukkit.utils.Rail.Orientation
                    // @ts-ignore
                    public metadata(): number /*int*/
                    // @ts-ignore
                    public hasConnectingDirections(...faces: cn.nukkit.math.BlockFace[]): boolean
                    // @ts-ignore
                    public connectingDirections(): Array<cn.nukkit.math.BlockFace>
                    // @ts-ignore
                    public ascendingDirection(): java.util.Optional<cn.nukkit.math.BlockFace>
                    // @ts-ignore
                    public isStraight(): boolean
                    // @ts-ignore
                    public isAscending(): boolean
                    // @ts-ignore
                    public isCurved(): boolean
                }
            }
        }
    }
}
