declare namespace cn {
    namespace nukkit {
        /**
         * Nukkit启动类，包含{@code main}函数。<br>
         * The launcher class of Nukkit, including the {@code main} function.
         * @author MagicDroidX(code) # Nukkit Project
         * @author 粉鞋大妈(javadoc) # Nukkit Project
         * @since Nukkit 1.0 | Nukkit API 1.0.0
         */
        // @ts-ignore
        class Nukkit extends java.lang.Object {
            // @ts-ignore
            constructor()
            // @ts-ignore
            public static readonly GIT_INFO: java.util.Properties
            // @ts-ignore
            public static readonly VERSION: java.lang.String | string
            // @ts-ignore
            public static readonly API_VERSION: java.lang.String | string
            // @ts-ignore
            public static readonly CODENAME: java.lang.String | string
            // @ts-ignore
            public static readonly MINECRAFT_VERSION: java.lang.String | string
            // @ts-ignore
            public static readonly MINECRAFT_VERSION_NETWORK: java.lang.String | string
            // @ts-ignore
            public static readonly PATH: java.lang.String | string
            // @ts-ignore
            public static readonly DATA_PATH: java.lang.String | string
            // @ts-ignore
            public static readonly PLUGIN_PATH: java.lang.String | string
            // @ts-ignore
            public static readonly START_TIME: number /*long*/
            // @ts-ignore
            public static ANSI: boolean
            // @ts-ignore
            public static TITLE: boolean
            // @ts-ignore
            public static shortTitle: boolean
            // @ts-ignore
            public static DEBUG: number /*int*/
            // @ts-ignore
            public static main(args: java.lang.String[] | string[]): void
            // @ts-ignore
            public static setLogLevel(level: Level): void
            // @ts-ignore
            public static getLogLevel(): Level
        }
    }
}
