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
                public static readonly NONE: cn.nukkit.utils.LogLevel
                // @ts-ignore
                public static readonly EMERGENCY: cn.nukkit.utils.LogLevel
                // @ts-ignore
                public static readonly ALERT: cn.nukkit.utils.LogLevel
                // @ts-ignore
                public static readonly CRITICAL: cn.nukkit.utils.LogLevel
                // @ts-ignore
                public static readonly ERROR: cn.nukkit.utils.LogLevel
                // @ts-ignore
                public static readonly WARNING: cn.nukkit.utils.LogLevel
                // @ts-ignore
                public static readonly NOTICE: cn.nukkit.utils.LogLevel
                // @ts-ignore
                public static readonly INFO: cn.nukkit.utils.LogLevel
                // @ts-ignore
                public static readonly DEBUG: cn.nukkit.utils.LogLevel
                // @ts-ignore
                public static readonly DEFAULT_LEVEL: cn.nukkit.utils.LogLevel
                // @ts-ignore
                public static values(): cn.nukkit.utils.LogLevel[]
                // @ts-ignore
                public static valueOf(name: java.lang.String | string): cn.nukkit.utils.LogLevel
                // @ts-ignore
                public log(logger: cn.nukkit.utils.MainLogger, message: java.lang.String | string): void
                // @ts-ignore
                public log(logger: cn.nukkit.utils.MainLogger, message: java.lang.String | string, throwable: java.lang.Throwable | Error): void
                // @ts-ignore
                public getLevel(): number /*int*/
            }
        }
    }
}
