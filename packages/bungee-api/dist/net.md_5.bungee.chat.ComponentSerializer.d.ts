declare namespace net {
    namespace md_5 {
        namespace bungee {
            namespace chat {
                // @ts-ignore
                class ComponentSerializer extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly serializedComponents: java.lang.ThreadLocal<java.util.Set<net.md_5.bungee.api.chat.BaseComponent> | Array<net.md_5.bungee.api.chat.BaseComponent>>
                    // @ts-ignore
                    public static parse(json: java.lang.String | string): net.md_5.bungee.api.chat.BaseComponent[]
                    // @ts-ignore
                    public static toString(component: net.md_5.bungee.api.chat.BaseComponent): string
                    // @ts-ignore
                    public static toString(...components: net.md_5.bungee.api.chat.BaseComponent[]): string
                    // @ts-ignore
                    public deserialize(json: JsonElement, typeOfT: java.lang.reflect.Type, context: JsonDeserializationContext): net.md_5.bungee.api.chat.BaseComponent
                }
            }
        }
    }
}
