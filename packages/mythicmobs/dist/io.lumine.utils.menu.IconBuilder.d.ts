declare namespace io {
    namespace lumine {
        namespace utils {
            namespace menu {
                // @ts-ignore
                class IconBuilder<T> extends java.lang.Object {
                    // @ts-ignore
                    public static create<T>(): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public item(itemStack: ItemStack): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public icon(material: Material): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public icon(materialFunc: java.util.function$.Function<T, ItemStack>): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public blink(materialFunc: java.util.function$.Function<T, ItemStack>): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public material(material: Material): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public material(materialFunc: java.util.function$.Function<T, Material>): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public name(name: java.lang.String | string): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public name(nameFunc: java.util.function$.Function<T, java.lang.String | string>): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public lore(lore: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public lore(loreFunc: java.util.function$.Function<T, java.util.List<java.lang.String | string> | Array<java.lang.String | string>>): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public click(clickFunc: java.util.function$.BiConsumer<T, Player>): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public rightClick(clickFunc: java.util.function$.BiConsumer<T, Player>): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public data(data: java.lang.Byte | number): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public data(dataFunc: java.util.function$.Function<T, java.lang.Byte | number>): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public amount(data: number /*int*/): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public amount(amountFunc: java.util.function$.Function<T, java.lang.Integer | number>): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public hideFlags(): io.lumine.utils.menu.IconBuilder<T>
                    // @ts-ignore
                    public build(): io.lumine.utils.menu.Icon<T>
                }
            }
        }
    }
}
