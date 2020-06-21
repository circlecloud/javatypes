declare namespace cn {
    namespace nukkit {
        namespace timings {
            /**
             * @author Pub4Game
             * @author Tee7even
             */
            // @ts-ignore
            class LevelTimings extends java.lang.Object {
                // @ts-ignore
                constructor(level: cn.nukkit.level.Level)
                // @ts-ignore
                public readonly doChunkUnload: co.aikar.timings.Timing
                // @ts-ignore
                public readonly doTickPending: co.aikar.timings.Timing
                // @ts-ignore
                public readonly doChunkGC: co.aikar.timings.Timing
                // @ts-ignore
                public readonly doTick: co.aikar.timings.Timing
                // @ts-ignore
                public readonly tickChunks: co.aikar.timings.Timing
                // @ts-ignore
                public readonly entityTick: co.aikar.timings.Timing
                // @ts-ignore
                public readonly blockEntityTick: co.aikar.timings.Timing
                // @ts-ignore
                public readonly syncChunkSendTimer: co.aikar.timings.Timing
                // @ts-ignore
                public readonly syncChunkSendPrepareTimer: co.aikar.timings.Timing
                // @ts-ignore
                public readonly syncChunkLoadTimer: co.aikar.timings.Timing
                // @ts-ignore
                public readonly syncChunkLoadDataTimer: co.aikar.timings.Timing
                // @ts-ignore
                public readonly syncChunkLoadEntitiesTimer: co.aikar.timings.Timing
                // @ts-ignore
                public readonly syncChunkLoadBlockEntitiesTimer: co.aikar.timings.Timing
            }
        }
    }
}
