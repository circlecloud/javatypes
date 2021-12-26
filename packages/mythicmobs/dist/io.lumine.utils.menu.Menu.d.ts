declare namespace io {
    namespace lumine {
        namespace utils {
            namespace menu {
                // @ts-ignore
                class Menu<T> extends java.lang.Object {
                    // @ts-ignore
                    constructor(titleFunc: java.util.function$.Function<T, java.lang.String | string>, monitorFunc: java.util.function$.Function<T, io.lumine.utils.menu.MonitoredState>, icons: java.util.Map<java.lang.Integer | number, io.lumine.utils.menu.Icon<any>>, blinking: java.util.List<java.lang.Integer | number> | Array<java.lang.Integer | number>)
                    // @ts-ignore
                    constructor(titleFunc: java.util.function$.Function<T, java.lang.String | string>, monitorFunc: java.util.function$.Function<T, io.lumine.utils.menu.MonitoredState>, icons: java.util.Map<java.lang.Integer | number, io.lumine.utils.menu.Icon<any>>, sortable: java.util.List<java.lang.Integer | number> | Array<java.lang.Integer | number>, blinking: java.util.List<java.lang.Integer | number> | Array<java.lang.Integer | number>)
                    // @ts-ignore
                    public setSize(size: number /*int*/): io.lumine.utils.menu.Menu<T>
                    // @ts-ignore
                    public open(player: Player, state: T): void
                    // @ts-ignore
                    getIcons(): java.util.Map<java.lang.Integer | number, io.lumine.utils.menu.Icon<any>>
                    // @ts-ignore
                    getIcon(slot: number /*int*/): java.util.Optional<io.lumine.utils.menu.Icon<any>>
                    // @ts-ignore
                    getBlinkingSlots(): java.util.Optional<java.util.List<java.lang.Integer | number> | Array<java.lang.Integer | number>>
                    // @ts-ignore
                    getMonitoredState(state: T): java.util.Optional<io.lumine.utils.menu.MonitoredState>
                    // @ts-ignore
                    sort(state: T): void
                    // @ts-ignore
                    getMinSortedSlot(): number /*int*/
                    // @ts-ignore
                    getMaxSortedSlot(): number /*int*/
                }
            }
        }
    }
}
