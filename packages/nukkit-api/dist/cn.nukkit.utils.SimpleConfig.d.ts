declare namespace cn {
    namespace nukkit {
        namespace utils {
            /**
             * SimpleConfig for Nukkit
             * added 11/02/2016 by fromgate
             */
            // @ts-ignore
            abstract class SimpleConfig extends java.lang.Object {
                // @ts-ignore
                constructor(plugin: cn.nukkit.plugin.Plugin)
                // @ts-ignore
                constructor(plugin: cn.nukkit.plugin.Plugin, fileName: java.lang.String | string)
                // @ts-ignore
                constructor(file: java.io.File)
                // @ts-ignore
                public save(): boolean
                // @ts-ignore
                public save(async: boolean): boolean
                // @ts-ignore
                public load(): boolean
            }
        }
    }
}
