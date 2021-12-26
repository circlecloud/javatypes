declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                namespace gui {
                    // @ts-ignore
                    class GuiScreen extends java.lang.Object {
                        // @ts-ignore
                        constructor(name: java.lang.String | string)
                        // @ts-ignore
                        constructor(name: java.lang.String | string, components: java.util.Map<java.lang.String | string, eos.moe.dragoncore.api.gui.component.Component>)
                        // @ts-ignore
                        public static openGui(player: Player, guiScreen: eos.moe.dragoncore.api.gui.GuiScreen): void
                        // @ts-ignore
                        public static getCurrentGuiScreen(player: Player): eos.moe.dragoncore.api.gui.GuiScreen
                        // @ts-ignore
                        public static closeGui(player: Player): void
                        // @ts-ignore
                        public append(component: eos.moe.dragoncore.api.gui.component.Component): void
                        // @ts-ignore
                        public getComponent(name: java.lang.String | string): eos.moe.dragoncore.api.gui.component.Component
                        // @ts-ignore
                        public generate(): YamlConfiguration
                    }
                }
            }
        }
    }
}
