declare namespace io {
    namespace lumine {
        namespace utils {
            namespace menu {
                // @ts-ignore
                class MenuBuilder<T> extends java.lang.Object {
                    // @ts-ignore
                    public static create<T>(): io.lumine.utils.menu.MenuBuilder<T>
                    // @ts-ignore
                    public title(title: java.lang.String | string): io.lumine.utils.menu.MenuBuilder<T>
                    // @ts-ignore
                    public title(titleFunc: java.util.function$.Function<T, java.lang.String | string>): io.lumine.utils.menu.MenuBuilder<T>
                    // @ts-ignore
                    public addIcon(icon: io.lumine.utils.menu.Icon<any>): io.lumine.utils.menu.MenuBuilder<T>
                    // @ts-ignore
                    public addIcon(slot: number /*int*/, icon: io.lumine.utils.menu.Icon<any>): io.lumine.utils.menu.MenuBuilder<T>
                    // @ts-ignore
                    public addAllIcons(iconList: java.util.List<io.lumine.utils.menu.Icon<T>> | Array<io.lumine.utils.menu.Icon<T>>): io.lumine.utils.menu.MenuBuilder<T>
                    // @ts-ignore
                    public addAllIcons(icons: java.util.Map<java.lang.Integer | number, io.lumine.utils.menu.Icon<T>>): io.lumine.utils.menu.MenuBuilder<T>
                    // @ts-ignore
                    public createIcon(builderFunc: java.util.function$.Function<io.lumine.utils.menu.IconBuilder<T>, io.lumine.utils.menu.IconBuilder<T>>): io.lumine.utils.menu.MenuBuilder<T>
                    // @ts-ignore
                    public createIcon(slot: number /*int*/, builderFunc: java.util.function$.Function<io.lumine.utils.menu.IconBuilder<T>, io.lumine.utils.menu.IconBuilder<T>>): io.lumine.utils.menu.MenuBuilder<T>
                    // @ts-ignore
                    public monitor(func: java.util.function$.Function<T, io.lumine.utils.menu.MonitoredState>): io.lumine.utils.menu.MenuBuilder<T>
                    // @ts-ignore
                    public staticMenu(): io.lumine.utils.menu.MenuBuilder<T>
                    // @ts-ignore
                    public build(): io.lumine.utils.menu.Menu<T>
                    // @ts-ignore
                    public sortByAmount(sortable: java.util.List<java.lang.Integer | number> | Array<java.lang.Integer | number>): io.lumine.utils.menu.MenuBuilder<T>
                }
            }
        }
    }
}
