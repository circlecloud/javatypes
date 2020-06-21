declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            /**
             * @author MagicDroidX
             */
            // @ts-ignore
            class TaskHandler extends java.lang.Object {
                // @ts-ignore
                constructor(plugin: cn.nukkit.plugin.Plugin, task: java.lang.Runnable, taskId: number /*int*/, asynchronous: boolean)
                // @ts-ignore
                public readonly timing: co.aikar.timings.Timing
                // @ts-ignore
                public isCancelled(): boolean
                // @ts-ignore
                public getNextRunTick(): number /*int*/
                // @ts-ignore
                public setNextRunTick(nextRunTick: number /*int*/): void
                // @ts-ignore
                public getTaskId(): number /*int*/
                // @ts-ignore
                public getTask(): java.lang.Runnable
                // @ts-ignore
                public getDelay(): number /*int*/
                // @ts-ignore
                public isDelayed(): boolean
                // @ts-ignore
                public isRepeating(): boolean
                // @ts-ignore
                public getPeriod(): number /*int*/
                // @ts-ignore
                public getPlugin(): cn.nukkit.plugin.Plugin
                // @ts-ignore
                public getLastRunTick(): number /*int*/
                // @ts-ignore
                public setLastRunTick(lastRunTick: number /*int*/): void
                // @ts-ignore
                public cancel(): void
                // @ts-ignore
                public remove(): void
                // @ts-ignore
                public run(currentTick: number /*int*/): void
                // @ts-ignore
                public getTaskName(): string
                // @ts-ignore
                public isAsynchronous(): boolean
                // @ts-ignore
                public setDelay(delay: number /*int*/): void
                // @ts-ignore
                public setPeriod(period: number /*int*/): void
            }
        }
    }
}
