declare namespace eos {
    namespace moe {
        namespace dragoncore {
            namespace api {
                namespace gui {
                    namespace component {
                        // @ts-ignore
                        class Component extends java.lang.Object {
                            // @ts-ignore
                            constructor(name: java.lang.String | string)
                            // @ts-ignore
                            constructor(name: java.lang.String | string, componentType: eos.moe.dragoncore.api.gui.component.ComponentType)
                            // @ts-ignore
                            public setAttribute(type: eos.moe.dragoncore.api.gui.component.AttributeType, value: java.lang.Object | any): eos.moe.dragoncore.api.gui.component.Component
                            // @ts-ignore
                            public getAttribute(type: eos.moe.dragoncore.api.gui.component.AttributeType): string
                            // @ts-ignore
                            public setAction(type: eos.moe.dragoncore.api.gui.component.ActionType, func: java.lang.String | string): void
                            // @ts-ignore
                            public setFunction(type: eos.moe.dragoncore.api.gui.component.ActionType, func: java.util.function$.Consumer<Player>): void
                            // @ts-ignore
                            public getFunction(type: eos.moe.dragoncore.api.gui.component.ActionType): java.util.function$.Consumer<Player>
                            // @ts-ignore
                            public getAction(type: eos.moe.dragoncore.api.gui.component.ActionType): string
                            // @ts-ignore
                            public getTip(): Array<java.lang.String | string>
                            // @ts-ignore
                            public getTexts(): Array<java.lang.String | string>
                            // @ts-ignore
                            public writeTo(yaml: YamlConfiguration): void
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public getAttributes(): java.util.LinkedHashMap<eos.moe.dragoncore.api.gui.component.AttributeType, java.lang.Object | any>
                            // @ts-ignore
                            public getActions(): java.util.LinkedHashMap<eos.moe.dragoncore.api.gui.component.ActionType, java.lang.String | string>
                            // @ts-ignore
                            public getActionFunctions(): java.util.LinkedHashMap<eos.moe.dragoncore.api.gui.component.ActionType, java.util.function$$.Consumer<Player>>
                            // @ts-ignore
                            public setName(name: java.lang.String | string): void
                            // @ts-ignore
                            public setAttributes(attributes: java.util.LinkedHashMap<eos.moe.dragoncore.api.gui.component.AttributeType, java.lang.Object | any>): void
                            // @ts-ignore
                            public setActions(actions: java.util.LinkedHashMap<eos.moe.dragoncore.api.gui.component.ActionType, java.lang.String | string>): void
                            // @ts-ignore
                            public setActionFunctions(actionFunctions: java.util.LinkedHashMap<eos.moe.dragoncore.api.gui.component.ActionType, java.util.function$.Consumer<Player>> | java.util.LinkedHashMap<eos.moe.dragoncore.api.gui.component.ActionType, java.util.function$$.Consumer<Player>>): void
                        }
                    }
                }
            }
        }
    }
}
