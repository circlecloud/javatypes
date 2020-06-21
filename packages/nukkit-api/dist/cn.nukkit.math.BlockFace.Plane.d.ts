declare namespace cn {
    namespace nukkit {
        namespace math {
            namespace BlockFace {
                // @ts-ignore
                class Plane extends java.lang.Enum<cn.nukkit.math.BlockFace.Plane> implements java.util.function.Predicate<cn.nukkit.math.BlockFace>, java.lang.Iterable<cn.nukkit.math.BlockFace> {
                    // @ts-ignore
                    readonly HORIZONTAL: cn.nukkit.math.BlockFace.Plane
                    // @ts-ignore
                    readonly VERTICAL: cn.nukkit.math.BlockFace.Plane
                    // @ts-ignore
                    values(): cn.nukkit.math.BlockFace.Plane[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): cn.nukkit.math.BlockFace.Plane
                    // @ts-ignore
                    random(rand: cn.nukkit.math.NukkitRandom): cn.nukkit.math.BlockFace
                    // @ts-ignore
                    test(face: cn.nukkit.math.BlockFace): boolean
                    // @ts-ignore
                    iterator(): java.util.Iterator<cn.nukkit.math.BlockFace>
                }
            }
        }
    }
}
