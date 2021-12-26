declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace reflections {
                        namespace scanners {
                            // @ts-ignore
                            abstract class AbstractScanner extends java.lang.Object implements io.lumine.xikage.mythicmobs.util.reflections.scanners.Scanner {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                public acceptsInput(file: java.lang.String | string): boolean
                                // @ts-ignore
                                public scan(file: io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.File, classObject: java.lang.Object | any): any
                                // @ts-ignore
                                public abstract scan(p0: java.lang.Object | any): void
                                // @ts-ignore
                                public getConfiguration(): io.lumine.xikage.mythicmobs.util.reflections.Configuration
                                // @ts-ignore
                                public setConfiguration(configuration: io.lumine.xikage.mythicmobs.util.reflections.Configuration): void
                                // @ts-ignore
                                public getStore(): object
                                // @ts-ignore
                                public setStore(store: object): void
                                // @ts-ignore
                                public getResultFilter(): object
                                // @ts-ignore
                                public setResultFilter(resultFilter: object): void
                                // @ts-ignore
                                public filterResultsBy(filter: object): io.lumine.xikage.mythicmobs.util.reflections.scanners.Scanner
                                // @ts-ignore
                                public acceptResult(fqn: java.lang.String | string): boolean
                                // @ts-ignore
                                getMetadataAdapter(): io.lumine.xikage.mythicmobs.util.reflections.adapters.MetadataAdapter<any>
                                // @ts-ignore
                                public equals(o: java.lang.Object | any): boolean
                                // @ts-ignore
                                public hashCode(): number /*int*/
                            }
                        }
                    }
                }
            }
        }
    }
}
