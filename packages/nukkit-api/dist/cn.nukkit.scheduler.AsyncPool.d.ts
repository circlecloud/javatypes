declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            /**
             * @author Nukkit Project Team
             */
            // @ts-ignore
            class AsyncPool extends java.util.concurrent.ThreadPoolExecutor {
                // @ts-ignore
                constructor(server: cn.nukkit.Server, size: number /*int*/)
                // @ts-ignore
                afterExecute(runnable: java.lang.Runnable, throwable: java.lang.Throwable | Error): void
                // @ts-ignore
                public getServer(): cn.nukkit.Server
            }
        }
    }
}
