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
                            class SimplexD extends cn.nukkit.level.generator.noise.nukkit.d.PerlinD {
                                // @ts-ignore
                                constructor(random: cn.nukkit.math.NukkitRandom, octaves: number /*double*/, persistence: number /*double*/)
                                // @ts-ignore
                                constructor(random: cn.nukkit.math.NukkitRandom, octaves: number /*double*/, persistence: number /*double*/, expansion: number /*double*/)
                                // @ts-ignore
                                static SQRT_3: number /*double*/
                                // @ts-ignore
                                static SQRT_5: number /*double*/
                                // @ts-ignore
                                static F2: number /*double*/
                                // @ts-ignore
                                static G2: number /*double*/
                                // @ts-ignore
                                static G22: number /*double*/
                                // @ts-ignore
                                static F3: number /*double*/
                                // @ts-ignore
                                static G3: number /*double*/
                                // @ts-ignore
                                static F4: number /*double*/
                                // @ts-ignore
                                static G4: number /*double*/
                                // @ts-ignore
                                static G42: number /*double*/
                                // @ts-ignore
                                static G43: number /*double*/
                                // @ts-ignore
                                static G44: number /*double*/
                                // @ts-ignore
                                public static readonly grad3: number /*int*/[][]
                                // @ts-ignore
                                readonly offsetW: number /*double*/
                                // @ts-ignore
                                static dot2D(g: number /*int*/[], x: number /*double*/, y: number /*double*/): number /*double*/
                                // @ts-ignore
                                static dot3D(g: number /*int*/[], x: number /*double*/, y: number /*double*/, z: number /*double*/): number /*double*/
                                // @ts-ignore
                                static dot4D(g: number /*int*/[], x: number /*double*/, y: number /*double*/, z: number /*double*/, w: number /*double*/): number /*double*/
                                // @ts-ignore
                                public getNoise3D(x: number /*double*/, y: number /*double*/, z: number /*double*/): number /*double*/
                                // @ts-ignore
                                public getNoise2D(x: number /*double*/, y: number /*double*/): number /*double*/
                            }
                        }
                    }
                }
            }
        }
    }
}
