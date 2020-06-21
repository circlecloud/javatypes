declare namespace cn {
    namespace nukkit {
        namespace math {
            /**
             * author: Angelic47
             * Nukkit Project
             */
            // @ts-ignore
            class NukkitRandom extends java.lang.Object {
                // @ts-ignore
                constructor()
                // @ts-ignore
                constructor(seeds: number /*long*/)
                // @ts-ignore
                seed: number /*long*/
                // @ts-ignore
                public setSeed(seeds: number /*long*/): void
                // @ts-ignore
                public nextSignedInt(): number /*int*/
                // @ts-ignore
                public nextInt(): number /*int*/
                // @ts-ignore
                public nextDouble(): number /*double*/
                // @ts-ignore
                public nextFloat(): number /*float*/
                // @ts-ignore
                public nextSignedFloat(): number /*float*/
                // @ts-ignore
                public nextSignedDouble(): number /*double*/
                // @ts-ignore
                public nextBoolean(): boolean
                // @ts-ignore
                public nextRange(): number /*int*/
                // @ts-ignore
                public nextRange(start: number /*int*/): number /*int*/
                // @ts-ignore
                public nextRange(start: number /*int*/, end: number /*int*/): number /*int*/
                // @ts-ignore
                public nextBoundedInt(bound: number /*int*/): number /*int*/
            }
        }
    }
}
