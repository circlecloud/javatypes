declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                namespace easygui {
                    namespace component {
                        // @ts-ignore
                        interface EasyContainer extends eos.moe.dragoncore.api.easygui.component.EasyComponent {
                            // @ts-ignore
                            getComponents(): java.util.Map<java.lang.String | string, eos.moe.dragoncore.api.easygui.component.EasyComponent>
                            // @ts-ignore
                            getComponent(p0: java.lang.String | string): eos.moe.dragoncore.api.easygui.component.EasyComponent
                            // @ts-ignore
                            getComponentById(p0: java.lang.String | string): eos.moe.dragoncore.api.easygui.component.EasyComponent
                            // @ts-ignore
                            addComponent(p0: java.lang.String | string, p1: eos.moe.dragoncore.api.easygui.component.EasyComponent): void
                            // @ts-ignore
                            addComponent(p0: eos.moe.dragoncore.api.easygui.component.EasyComponent): void
                        }
                    }
                }
            }
        }
    }
}
