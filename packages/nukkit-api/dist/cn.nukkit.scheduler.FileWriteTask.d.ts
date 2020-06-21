declare namespace cn {
    namespace nukkit {
        namespace scheduler {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class FileWriteTask extends cn.nukkit.scheduler.AsyncTask {
                // @ts-ignore
                constructor(path: java.lang.String | string, contents: java.lang.String | string)
                // @ts-ignore
                constructor(path: java.lang.String | string, contents: number /*byte*/[])
                // @ts-ignore
                constructor(path: java.lang.String | string, contents: java.io.InputStream)
                // @ts-ignore
                constructor(file: java.io.File, contents: java.lang.String | string)
                // @ts-ignore
                constructor(file: java.io.File, contents: number /*byte*/[])
                // @ts-ignore
                constructor(file: java.io.File, contents: java.io.InputStream)
                // @ts-ignore
                public onRun(): void
            }
        }
    }
}
