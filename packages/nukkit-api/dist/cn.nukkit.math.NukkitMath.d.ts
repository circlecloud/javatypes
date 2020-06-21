declare namespace cn {
    namespace nukkit {
        namespace math {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class NukkitMath extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static floorDouble(n: number /*double*/): number /*int*/
                // @ts-ignore
                public static ceilDouble(n: number /*double*/): number /*int*/
                // @ts-ignore
                public static floorFloat(n: number /*float*/): number /*int*/
                // @ts-ignore
                public static ceilFloat(n: number /*float*/): number /*int*/
                // @ts-ignore
                public static randomRange(random: cn.nukkit.math.NukkitRandom): number /*int*/
                // @ts-ignore
                public static randomRange(random: cn.nukkit.math.NukkitRandom, start: number /*int*/): number /*int*/
                // @ts-ignore
                public static randomRange(random: cn.nukkit.math.NukkitRandom, start: number /*int*/, end: number /*int*/): number /*int*/
                // @ts-ignore
                public static round(d: number /*double*/): number /*double*/
                // @ts-ignore
                public static round(d: number /*double*/, precision: number /*int*/): number /*double*/
                // @ts-ignore
                public static clamp(value: number /*double*/, min: number /*double*/, max: number /*double*/): number /*double*/
                // @ts-ignore
                public static clamp(value: number /*int*/, min: number /*int*/, max: number /*int*/): number /*int*/
                // @ts-ignore
                public static getDirection(diffX: number /*double*/, diffZ: number /*double*/): number /*double*/
            }
        }
    }
}
