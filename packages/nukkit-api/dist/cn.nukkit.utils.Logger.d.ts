declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            interface Logger {
                // @ts-ignore
                emergency(message: java.lang.String | string): void
                // @ts-ignore
                alert(message: java.lang.String | string): void
                // @ts-ignore
                critical(message: java.lang.String | string): void
                // @ts-ignore
                error(message: java.lang.String | string): void
                // @ts-ignore
                warning(message: java.lang.String | string): void
                // @ts-ignore
                notice(message: java.lang.String | string): void
                // @ts-ignore
                info(message: java.lang.String | string): void
                // @ts-ignore
                debug(message: java.lang.String | string): void
                // @ts-ignore
                log(level: cn.nukkit.utils.LogLevel, message: java.lang.String | string): void
                // @ts-ignore
                emergency(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                alert(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                critical(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                error(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                warning(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                notice(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                info(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                debug(message: java.lang.String | string, t: java.lang.Throwable | Error): void
                // @ts-ignore
                log(level: cn.nukkit.utils.LogLevel, message: java.lang.String | string, t: java.lang.Throwable | Error): void
            }
        }
    }
}
