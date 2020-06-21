declare namespace cn {
    namespace nukkit {
        namespace plugin {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class PluginLogger extends java.lang.Object implements cn.nukkit.utils.Logger {
                // @ts-ignore
                constructor(context: cn.nukkit.plugin.Plugin)
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
                public log(level: cn.nukkit.utils.LogLevel, message: java.lang.String | string): void
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
