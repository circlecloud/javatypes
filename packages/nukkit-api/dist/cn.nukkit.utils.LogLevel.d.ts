declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class LogLevel extends java.lang.Enum<cn.nukkit.utils.LogLevel> implements java.lang.Comparable<cn.nukkit.utils.LogLevel> {
                // @ts-ignore
                readonly NONE: cn.nukkit.utils.LogLevel
                // @ts-ignore
                readonly EMERGENCY: cn.nukkit.utils.LogLevel
                // @ts-ignore
                readonly ALERT: cn.nukkit.utils.LogLevel
                // @ts-ignore
                readonly CRITICAL: cn.nukkit.utils.LogLevel
                // @ts-ignore
                readonly ERROR: cn.nukkit.utils.LogLevel
                // @ts-ignore
                readonly WARNING: cn.nukkit.utils.LogLevel
                // @ts-ignore
                readonly NOTICE: cn.nukkit.utils.LogLevel
                // @ts-ignore
                readonly INFO: cn.nukkit.utils.LogLevel
                // @ts-ignore
                readonly DEBUG: cn.nukkit.utils.LogLevel
                // @ts-ignore
                readonly DEFAULT_LEVEL: cn.nukkit.utils.LogLevel
                // @ts-ignore
                values(): cn.nukkit.utils.LogLevel[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): cn.nukkit.utils.LogLevel
                // @ts-ignore
                log(logger: cn.nukkit.utils.MainLogger, message: java.lang.String | string): void
                // @ts-ignore
                log(logger: cn.nukkit.utils.MainLogger, message: java.lang.String | string, throwable: java.lang.Throwable | Error): void
                // @ts-ignore
                getLevel(): number /*int*/
            }
        }
    }
}
