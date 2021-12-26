declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace reflections {
                        // @ts-ignore
                        interface Configuration {
                            // @ts-ignore
                            getScanners(): Array<io.lumine.xikage.mythicmobs.util.reflections.scanners.Scanner>
                            // @ts-ignore
                            getUrls(): Array<java.net.URL>
                            // @ts-ignore
                            getMetadataAdapter(): io.lumine.xikage.mythicmobs.util.reflections.adapters.MetadataAdapter<any>
                            // @ts-ignore
                            getInputsFilter(): object
                            // @ts-ignore
                            getExecutorService(): java.util.concurrent.ExecutorService
                            // @ts-ignore
                            getSerializer(): io.lumine.xikage.mythicmobs.util.reflections.serializers.Serializer
                            // @ts-ignore
                            getClassLoaders(): java.lang.ClassLoader[]
                            // @ts-ignore
                            shouldExpandSuperTypes(): boolean
                        }
                    }
                }
            }
        }
    }
}
