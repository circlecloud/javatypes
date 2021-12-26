declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace reflections {
                        namespace scanners {
                            // @ts-ignore
                            interface Scanner {
                                // @ts-ignore
                                setConfiguration(p0: io.lumine.xikage.mythicmobs.util.reflections.Configuration): void
                                // @ts-ignore
                                getStore(): object
                                // @ts-ignore
                                setStore(p0: object): void
                                // @ts-ignore
                                filterResultsBy(p0: object): io.lumine.xikage.mythicmobs.util.reflections.scanners.Scanner
                                // @ts-ignore
                                acceptsInput(p0: java.lang.String | string): boolean
                                // @ts-ignore
                                scan(p0: io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.File, p1: java.lang.Object | any): any
                                // @ts-ignore
                                acceptResult(p0: java.lang.String | string): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
