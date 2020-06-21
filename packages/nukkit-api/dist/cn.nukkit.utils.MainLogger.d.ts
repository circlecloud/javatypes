declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * author: MagicDroidX
             * Nukkit
             */
            // @ts-ignore
            class MainLogger extends cn.nukkit.utils.ThreadedLogger {
                // @ts-ignore
                constructor()
                // @ts-ignore
                public static getLogger(): cn.nukkit.utils.MainLogger
                // @ts-ignore
                public emergency(message: java.lang.String | string): void
                // @ts-ignore
                public alert(message: java.lang.String | string): void
                // @ts-ignore
                public critical(message: java.lang.String | string): void
                // @ts-ignore
                public error(message: java.lang.String | string): void
                // @ts-ignore
                public warning(message: java.lang.String | string): void
                // @ts-ignore
                public notice(message: java.lang.String | string): void
                // @ts-ignore
                public info(message: java.lang.String | string): void
                // @ts-ignore
                public debug(message: java.lang.String | string): void
                // @ts-ignore
                public setLogDebug(logDebug: java.lang.Boolean): void
                // @ts-ignore
                public logException(t: java.lang.Throwable | Error): void
                // @ts-ignore
                public log(level: cn.nukkit.utils.LogLevel, message: java.lang.String | string): void
                // @ts-ignore
                public shutdown(): void
                // @ts-ignore
                public emergency(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                public alert(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                public critical(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                public error(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                public warning(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                public notice(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                public info(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                public debug(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                public log(level: cn.nukkit.utils.LogLevel, message: java.lang.String | string, t: java.lang.Throwable | Error): void
            }
        }
    }
}
