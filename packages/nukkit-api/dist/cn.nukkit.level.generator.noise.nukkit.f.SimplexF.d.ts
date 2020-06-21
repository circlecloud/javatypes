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
                            class SimplexF extends cn.nukkit.level.generator.noise.nukkit.f.PerlinF {
                                // @ts-ignore
                                constructor(random: cn.nukkit.math.NukkitRandom, octaves: number /*float*/, persistence: number /*float*/)
                                // @ts-ignore
                                constructor(random: cn.nukkit.math.NukkitRandom, octaves: number /*float*/, persistence: number /*float*/, expansion: number /*float*/)
                                // @ts-ignore
                                static SQRT_3: number /*float*/
                                // @ts-ignore
                                static SQRT_5: number /*float*/
                                // @ts-ignore
                                static F2: number /*float*/
                                // @ts-ignore
                                static G2: number /*float*/
                                // @ts-ignore
                                static G22: number /*float*/
                                // @ts-ignore
                                static F3: number /*float*/
                                // @ts-ignore
                                static G3: number /*float*/
                                // @ts-ignore
                                static F4: number /*float*/
                                // @ts-ignore
                                static G4: number /*float*/
                                // @ts-ignore
                                static G42: number /*float*/
                                // @ts-ignore
                                static G43: number /*float*/
                                // @ts-ignore
                                static G44: number /*float*/
                                // @ts-ignore
                                public static readonly grad3: number /*int*/[][]
                                // @ts-ignore
                                readonly offsetW: number /*float*/
                                // @ts-ignore
                                static dot2D(g: number /*int*/[], x: number /*float*/, y: number /*float*/): number /*float*/
                                // @ts-ignore
                                static dot3D(g: number /*int*/[], x: number /*float*/, y: number /*float*/, z: number /*float*/): number /*float*/
                                // @ts-ignore
                                static dot4D(g: number /*int*/[], x: number /*float*/, y: number /*float*/, z: number /*float*/, w: number /*float*/): number /*float*/
                                // @ts-ignore
                                public getNoise3D(x: number /*float*/, y: number /*float*/, z: number /*float*/): number /*float*/
                                // @ts-ignore
                                public getNoise2D(x: number /*float*/, y: number /*float*/): number /*float*/
                            }
                        }
                    }
                }
            }
        }
    }
}
