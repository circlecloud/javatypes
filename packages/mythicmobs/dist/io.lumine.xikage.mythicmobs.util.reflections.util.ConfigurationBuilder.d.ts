declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace reflections {
                        namespace util {
                            // @ts-ignore
                            class ConfigurationBuilder extends java.lang.Object implements io.lumine.xikage.mythicmobs.util.reflections.Configuration {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                metadataAdapter: io.lumine.xikage.mythicmobs.util.reflections.adapters.MetadataAdapter<any>
                                // @ts-ignore
                                public static build(...params: java.lang.Object[] | any[]): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public forPackages(...packages: java.lang.String[] | string[]): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public getScanners(): Array<io.lumine.xikage.mythicmobs.util.reflections.scanners.Scanner>
                                // @ts-ignore
                                public setScanners(...scanners: io.lumine.xikage.mythicmobs.util.reflections.scanners.Scanner[]): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public addScanners(...scanners: io.lumine.xikage.mythicmobs.util.reflections.scanners.Scanner[]): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public getUrls(): Array<java.net.URL>
                                // @ts-ignore
                                public setUrls(urls: java.util.Collection<java.net.URL> | Array<java.net.URL>): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public setUrls(...urls: java.net.URL[]): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public addUrls(urls: java.util.Collection<java.net.URL> | Array<java.net.URL>): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public addUrls(...urls: java.net.URL[]): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public getMetadataAdapter(): io.lumine.xikage.mythicmobs.util.reflections.adapters.MetadataAdapter<any>
                                // @ts-ignore
                                public setMetadataAdapter(metadataAdapter: io.lumine.xikage.mythicmobs.util.reflections.adapters.MetadataAdapter<any>): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public getInputsFilter(): object
                                // @ts-ignore
                                public setInputsFilter(inputsFilter: object): void
                                // @ts-ignore
                                public filterInputsBy(inputsFilter: object): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public getExecutorService(): java.util.concurrent.ExecutorService
                                // @ts-ignore
                                public setExecutorService(executorService: java.util.concurrent.ExecutorService): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public useParallelExecutor(): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public useParallelExecutor(availableProcessors: number /*int*/): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public getSerializer(): io.lumine.xikage.mythicmobs.util.reflections.serializers.Serializer
                                // @ts-ignore
                                public setSerializer(serializer: io.lumine.xikage.mythicmobs.util.reflections.serializers.Serializer): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public getClassLoaders(): java.lang.ClassLoader[]
                                // @ts-ignore
                                public shouldExpandSuperTypes(): boolean
                                // @ts-ignore
                                public setExpandSuperTypes(expandSuperTypes: boolean): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public setClassLoaders(classLoaders: java.lang.ClassLoader[]): void
                                // @ts-ignore
                                public addClassLoader(classLoader: java.lang.ClassLoader): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public addClassLoaders(...classLoaders: java.lang.ClassLoader[]): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                                // @ts-ignore
                                public addClassLoaders(classLoaders: java.util.Collection<java.lang.ClassLoader> | Array<java.lang.ClassLoader>): io.lumine.xikage.mythicmobs.util.reflections.util.ConfigurationBuilder
                            }
                        }
                    }
                }
            }
        }
    }
}
