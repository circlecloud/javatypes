declare namespace cn {
    namespace nukkit {
        namespace network {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class CompressBatchedTask extends cn.nukkit.scheduler.AsyncTask {
                // @ts-ignore
                constructor(data: number /*byte*/[][], targets: java.util.List<java.lang.String | string> | Array<java.lang.String | string>)
                // @ts-ignore
                constructor(data: number /*byte*/[][], targets: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, level: number /*int*/)
                // @ts-ignore
                constructor(data: number /*byte*/[][], targets: java.util.List<java.lang.String | string> | Array<java.lang.String | string>, level: number /*int*/, channel: number /*int*/)
                // @ts-ignore
                public level: number /*int*/
                // @ts-ignore
                public data: number /*byte*/[][]
                // @ts-ignore
                public finalData: number /*byte*/[]
                // @ts-ignore
                public channel: number /*int*/
                // @ts-ignore
                public targets: java.util.List<java.lang.String | string> | Array<java.lang.String | string>
                // @ts-ignore
                public onRun(): void
                // @ts-ignore
                public onCompletion(server: cn.nukkit.Server): void
            }
        }
    }
}
