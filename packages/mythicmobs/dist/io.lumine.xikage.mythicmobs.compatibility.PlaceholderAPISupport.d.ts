declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace compatibility {
                    // @ts-ignore
                    class PlaceholderAPISupport extends EZPlaceholderHook {
                        // @ts-ignore
                        constructor(core: io.lumine.xikage.mythicmobs.MythicMobs)
                        // @ts-ignore
                        public parse(string: java.lang.String | string): string
                        // @ts-ignore
                        public parse(string: java.lang.String | string, player: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer): string
                        // @ts-ignore
                        public onPlaceholderRequest(player: Player, identifier: java.lang.String | string): string
                    }
                }
            }
        }
    }
}
