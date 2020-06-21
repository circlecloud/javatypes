declare namespace cn {
    namespace nukkit {
        namespace plugin {
            /**
             * author: MagicDroidX
             * Nukkit Project
             */
            // @ts-ignore
            class PluginClassLoader extends java.net.URLClassLoader {
                // @ts-ignore
                constructor(loader: cn.nukkit.plugin.JavaPluginLoader, parent: java.lang.ClassLoader, file: java.io.File)
                // @ts-ignore
                findClass(name: java.lang.String | string): java.lang.Class<any>
                // @ts-ignore
                findClass(name: java.lang.String | string, checkGlobal: boolean): java.lang.Class<any>
            }
        }
    }
}
