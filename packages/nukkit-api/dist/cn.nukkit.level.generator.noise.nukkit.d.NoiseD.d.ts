declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace noise {
                    namespace nukkit {
                        namespace d {
                            /**
                             * author: MagicDroidX
                             * Nukkit Project
                             */
                            // @ts-ignore
                            abstract class NoiseD extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                perm: number /*int*/[]
                                // @ts-ignore
                                offsetX: number /*double*/
                                // @ts-ignore
                                offsetY: number /*double*/
                                // @ts-ignore
                                offsetZ: number /*double*/
                                // @ts-ignore
                                octaves: number /*double*/
                                // @ts-ignore
                                persistence: number /*double*/
                                // @ts-ignore
                                expansion: number /*double*/
                                // @ts-ignore
                                public static floor(x: number /*double*/): number /*int*/
                                // @ts-ignore
                                public static fade(x: number /*double*/): number /*double*/
                                // @ts-ignore
                                public static lerp(x: number /*double*/, y: number /*double*/, z: number /*double*/): number /*double*/
                                // @ts-ignore
                                public static linearLerp(x: number /*double*/, x1: number /*double*/, x2: number /*double*/, q0: number /*double*/, q1: number /*double*/): number /*double*/
                                // @ts-ignore
                                public static bilinearLerp(x: number /*double*/, y: number /*double*/, q00: number /*double*/, q01: number /*double*/, q10: number /*double*/, q11: number /*double*/, x1: number /*double*/, x2: number /*double*/, y1: number /*double*/, y2: number /*double*/): number /*double*/
                                // @ts-ignore
                                public static trilinearLerp(x: number /*double*/, y: number /*double*/, z: number /*double*/, q000: number /*double*/, q001: number /*double*/, q010: number /*double*/, q011: number /*double*/, q100: number /*double*/, q101: number /*double*/, q110: number /*double*/, q111: number /*double*/, x1: number /*double*/, x2: number /*double*/, y1: number /*double*/, y2: number /*double*/, z1: number /*double*/, z2: number /*double*/): number /*double*/
                                // @ts-ignore
                                public static grad(hash: number /*int*/, x: number /*double*/, y: number /*double*/, z: number /*double*/): number /*double*/
                                // @ts-ignore
                                public abstract getNoise2D(x: number /*double*/, z: number /*double*/): number /*double*/
                                // @ts-ignore
                                public abstract getNoise3D(x: number /*double*/, y: number /*double*/, z: number /*double*/): number /*double*/
                                // @ts-ignore
                                public noise2D(x: number /*double*/, z: number /*double*/): number /*double*/
                                // @ts-ignore
                                public noise2D(x: number /*double*/, z: number /*double*/, normalized: boolean): number /*double*/
                                // @ts-ignore
                                public noise3D(x: number /*double*/, y: number /*double*/, z: number /*double*/): number /*double*/
                                // @ts-ignore
                                public noise3D(x: number /*double*/, y: number /*double*/, z: number /*double*/, normalized: boolean): number /*double*/
                                // @ts-ignore
                                public setOffset(x: number /*double*/, y: number /*double*/, z: number /*double*/): void
                            }
                        }
                    }
                }
            }
        }
    }
}
