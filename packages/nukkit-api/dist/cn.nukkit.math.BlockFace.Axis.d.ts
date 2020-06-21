declare namespace cn {
    namespace nukkit {
        namespace math {
            namespace BlockFace {
                // @ts-ignore
                class Axis extends java.lang.Enum<cn.nukkit.math.BlockFace.Axis> implements java.util.function.Predicate<cn.nukkit.math.BlockFace> {
                    // @ts-ignore
                    readonly X: cn.nukkit.math.BlockFace.Axis
                    // @ts-ignore
                    readonly Y: cn.nukkit.math.BlockFace.Axis
                    // @ts-ignore
                    readonly Z: cn.nukkit.math.BlockFace.Axis
                    // @ts-ignore
                    values(): cn.nukkit.math.BlockFace.Axis[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): cn.nukkit.math.BlockFace.Axis
                    // @ts-ignore
                    isVertical(): boolean
                    // @ts-ignore
                    isHorizontal(): boolean
                    // @ts-ignore
                    getPlane(): cn.nukkit.math.BlockFace.Plane
                    // @ts-ignore
                    getName(): string
                    // @ts-ignore
                    test(face: cn.nukkit.math.BlockFace): boolean
                    // @ts-ignore
                    toString(): string
                }
            }
        }
    }
}
