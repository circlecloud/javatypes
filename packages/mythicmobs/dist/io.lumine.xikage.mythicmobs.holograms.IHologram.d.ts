declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace holograms {
                    // @ts-ignore
                    interface IHologram extends io.lumine.utils.terminable.Terminable {
                        // @ts-ignore
                        teleport(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                        // @ts-ignore
                        setText(p0: java.lang.String | string): void
                        // @ts-ignore
                        setText(p0: java.lang.String[] | string[], p1: java.lang.String | string): void
                    }
                }
            }
        }
    }
}
