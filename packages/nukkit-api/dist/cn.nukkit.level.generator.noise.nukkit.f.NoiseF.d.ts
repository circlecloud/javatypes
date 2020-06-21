declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace generator {
                namespace noise {
                    namespace nukkit {
                        namespace f {
                            /**
                             * author: DaPorkchop_
                             * Nukkit Project
                             */
                            // @ts-ignore
                            abstract class NoiseF extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                perm: number /*int*/[]
                                // @ts-ignore
                                offsetX: number /*float*/
                                // @ts-ignore
                                offsetY: number /*float*/
                                // @ts-ignore
                                offsetZ: number /*float*/
                                // @ts-ignore
                                octaves: number /*float*/
                                // @ts-ignore
                                persistence: number /*float*/
                                // @ts-ignore
                                expansion: number /*float*/
                                // @ts-ignore
                                public static floor(x: number /*float*/): number /*int*/
                                // @ts-ignore
                                public static fade(x: number /*float*/): number /*float*/
                                // @ts-ignore
                                public static lerp(x: number /*float*/, y: number /*float*/, z: number /*float*/): number /*float*/
                                // @ts-ignore
                                public static linearLerp(x: number /*float*/, x1: number /*float*/, x2: number /*float*/, q0: number /*float*/, q1: number /*float*/): number /*float*/
                                // @ts-ignore
                                public static bilinearLerp(x: number /*float*/, y: number /*float*/, q00: number /*float*/, q01: number /*float*/, q10: number /*float*/, q11: number /*float*/, x1: number /*float*/, x2: number /*float*/, y1: number /*float*/, y2: number /*float*/): number /*float*/
                                // @ts-ignore
                                public static trilinearLerp(x: number /*float*/, y: number /*float*/, z: number /*float*/, q000: number /*float*/, q001: number /*float*/, q010: number /*float*/, q011: number /*float*/, q100: number /*float*/, q101: number /*float*/, q110: number /*float*/, q111: number /*float*/, x1: number /*float*/, x2: number /*float*/, y1: number /*float*/, y2: number /*float*/, z1: number /*float*/, z2: number /*float*/): number /*float*/
                                // @ts-ignore
                                public static grad(hash: number /*int*/, x: number /*float*/, y: number /*float*/, z: number /*float*/): number /*float*/
                                // @ts-ignore
                                public abstract getNoise2D(x: number /*float*/, z: number /*float*/): number /*float*/
                                // @ts-ignore
                                public abstract getNoise3D(x: number /*float*/, y: number /*float*/, z: number /*float*/): number /*float*/
                                // @ts-ignore
                                public noise2D(x: number /*float*/, z: number /*float*/): number /*float*/
                                // @ts-ignore
                                public noise2D(x: number /*float*/, z: number /*float*/, normalized: boolean): number /*float*/
                                // @ts-ignore
                                public noise3D(x: number /*float*/, y: number /*float*/, z: number /*float*/): number /*float*/
                                // @ts-ignore
                                public noise3D(x: number /*float*/, y: number /*float*/, z: number /*float*/, normalized: boolean): number /*float*/
                                // @ts-ignore
                                public setOffset(x: number /*float*/, y: number /*float*/, z: number /*float*/): void
                            }
                        }
                    }
                }
            }
        }
    }
}
