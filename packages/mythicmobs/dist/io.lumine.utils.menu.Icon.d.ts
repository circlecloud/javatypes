declare namespace io {
    namespace lumine {
        namespace utils {
            namespace menu {
                // @ts-ignore
                class Icon<T> extends java.lang.Object {
                    // @ts-ignore
                    constructor(materialFunc: java.util.function$.Function<T, Material>, nameFunc: java.util.function$.Function<T, java.lang.String | string>, loreFunc: java.util.function$.Function<T, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>, clickFunc: java.util.function$.BiConsumer<T, Player>, rclickFunc: java.util.function$.BiConsumer<T, Player>, byteFunction: java.util.function$.Function<T, java.lang.Byte | number>, amountFunction: java.util.function$.Function<T, java.lang.Integer | number>, blinkFunc: java.util.function$.Function<T, ItemStack>, hideFlags: boolean)
                    // @ts-ignore
                    constructor(itemStack: ItemStack, nameFunc: java.util.function$.Function<T, java.lang.String | string>, loreFunc: java.util.function$.Function<T, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>, clickFunc: java.util.function$.BiConsumer<T, Player>, rclickFunc: java.util.function$.BiConsumer<T, Player>, byteFunction: java.util.function$.Function<T, java.lang.Byte | number>, amountFunction: java.util.function$.Function<T, java.lang.Integer | number>, blinkFunc: java.util.function$.Function<T, ItemStack>, hideFlags: boolean)
                    // @ts-ignore
                    constructor(nameFunc: java.util.function$.Function<T, java.lang.String | string>, loreFunc: java.util.function$.Function<T, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>, clickFunc: java.util.function$.BiConsumer<T, Player>, rclickFunc: java.util.function$.BiConsumer<T, Player>, byteFunction: java.util.function$.Function<T, java.lang.Byte | number>, amountFunction: java.util.function$.Function<T, java.lang.Integer | number>, iconFunc: java.util.function$.Function<T, ItemStack>, blinkFunc: java.util.function$.Function<T, ItemStack>, hideFlags: boolean)
                    // @ts-ignore
                    public data(date: number /*byte*/): io.lumine.utils.menu.Icon<T>
                    // @ts-ignore
                    public build(state: T): ItemStack
                    // @ts-ignore
                    public getAmount(state: T): number /*int*/
                    // @ts-ignore
                    public isBlinkingIcon(): boolean
                    // @ts-ignore
                    public getClickFunc(): java.util.Optional<java.util.function$$.BiConsumer<T, Player>>
                    // @ts-ignore
                    public getRightClickFunc(): java.util.Optional<java.util.function$$.BiConsumer<T, Player>>
                }
            }
        }
    }
}
