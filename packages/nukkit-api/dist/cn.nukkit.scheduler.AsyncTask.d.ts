declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            /**
             * @author Nukkit Project Team
             */
            // @ts-ignore
            abstract class AsyncTask extends java.lang.Object implements java.lang.Runnable {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static readonly FINISHED_LIST: java.util.Queue<cn.nukkit.scheduler.AsyncTask>
                // @ts-ignore
                public run(): void
                // @ts-ignore
                public isFinished(): boolean
                // @ts-ignore
                public getResult(): any
                // @ts-ignore
                public hasResult(): boolean
                // @ts-ignore
                public setResult(result: java.lang.Object | any): void
                // @ts-ignore
                public setTaskId(taskId: number /*int*/): void
                // @ts-ignore
                public getTaskId(): number /*int*/
                // @ts-ignore
                public getFromThreadStore(identifier: java.lang.String | string): any
                // @ts-ignore
                public saveToThreadStore(identifier: java.lang.String | string, value: java.lang.Object | any): void
                // @ts-ignore
                public abstract onRun(): void
                // @ts-ignore
                public onCompletion(server: cn.nukkit.Server): void
                // @ts-ignore
                public cleanObject(): void
                // @ts-ignore
                public static collectTask(): void
            }
        }
    }
}
