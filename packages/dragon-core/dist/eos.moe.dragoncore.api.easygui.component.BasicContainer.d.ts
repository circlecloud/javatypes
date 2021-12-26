declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                namespace easygui {
                    namespace component {
                        // @ts-ignore
                        abstract class BasicContainer extends java.lang.Object implements eos.moe.dragoncore.api.easygui.component.EasyContainer {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public addComponent(name: java.lang.String | string, component: eos.moe.dragoncore.api.easygui.component.EasyComponent): void
                            // @ts-ignore
                            public addComponent(component: eos.moe.dragoncore.api.easygui.component.EasyComponent): void
                            // @ts-ignore
                            public getComponents(): java.util.Map<java.lang.String | string, eos.moe.dragoncore.api.easygui.component.EasyComponent>
                            // @ts-ignore
                            public getComponent(name: java.lang.String | string): eos.moe.dragoncore.api.easygui.component.EasyComponent
                            // @ts-ignore
                            public getComponentById(id: java.lang.String | string): eos.moe.dragoncore.api.easygui.component.EasyComponent
                            // @ts-ignore
                            public getId(): string
                        }
                    }
                }
            }
        }
    }
}
