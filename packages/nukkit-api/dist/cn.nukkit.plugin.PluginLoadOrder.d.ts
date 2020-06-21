declare namespace cn {
    namespace nukkit {
        namespace plugin {
            /**
             * 描述一个Nukkit插件加载顺序的类。<br>
             * Describes a Nukkit plugin load order.
             * <p>
             * <p>Nukkit插件的加载顺序有两个:{@link cn.nukkit.plugin.PluginLoadOrder#STARTUP}
             * 和 {@link cn.nukkit.plugin.PluginLoadOrder#POSTWORLD}。<br>
             * The load order of a Nukkit plugin can be {@link cn.nukkit.plugin.PluginLoadOrder#STARTUP}
             * or {@link cn.nukkit.plugin.PluginLoadOrder#POSTWORLD}.</p>
             * @author MagicDroidX(code) # Nukkit Project
             * @author iNevet(code) # Nukkit Project
             * @author 粉鞋大妈(javadoc) # Nukkit Project
             * @since Nukkit 1.0 | Nukkit API 1.0.0
             */
            // @ts-ignore
            class PluginLoadOrder extends java.lang.Enum<cn.nukkit.plugin.PluginLoadOrder> {
                /**
                 * 表示这个插件在服务器启动时就开始加载。<br>
                 * Indicates that the plugin will be loaded at startup.
                 * @see cn.nukkit.plugin.PluginLoadOrder
                 * @since Nukkit 1.0 | Nukkit API 1.0.0
                 */
                // @ts-ignore
                readonly STARTUP: cn.nukkit.plugin.PluginLoadOrder
                /**
                 * 表示这个插件在第一个世界加载完成后开始加载。<br>
                 * Indicates that the plugin will be loaded after the first/default world was created.
                 * @see cn.nukkit.plugin.PluginLoadOrder
                 * @since Nukkit 1.0 | Nukkit API 1.0.0
                 */
                // @ts-ignore
                readonly POSTWORLD: cn.nukkit.plugin.PluginLoadOrder
                // @ts-ignore
                values(): cn.nukkit.plugin.PluginLoadOrder[]
                // @ts-ignore
                valueOf(name: java.lang.String | string): cn.nukkit.plugin.PluginLoadOrder
            }
        }
    }
}
