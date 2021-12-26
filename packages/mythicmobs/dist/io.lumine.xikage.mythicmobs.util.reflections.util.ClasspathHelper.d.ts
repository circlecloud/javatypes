declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace reflections {
                        namespace util {
                            // @ts-ignore
                            abstract class ClasspathHelper extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                public static contextClassLoader(): java.lang.ClassLoader
                                // @ts-ignore
                                public static staticClassLoader(): java.lang.ClassLoader
                                // @ts-ignore
                                public static classLoaders(...classLoaders: java.lang.ClassLoader[]): java.lang.ClassLoader[]
                                // @ts-ignore
                                public static forPackage(name: java.lang.String | string, ...classLoaders: java.lang.ClassLoader[]): Array<java.net.URL>
                                // @ts-ignore
                                public static forResource(resourceName: java.lang.String | string, ...classLoaders: java.lang.ClassLoader[]): Array<java.net.URL>
                                // @ts-ignore
                                public static forClass(aClass: java.lang.Class<any>, ...classLoaders: java.lang.ClassLoader[]): java.net.URL
                                // @ts-ignore
                                public static forClassLoader(): Array<java.net.URL>
                                // @ts-ignore
                                public static forClassLoader(...classLoaders: java.lang.ClassLoader[]): Array<java.net.URL>
                                // @ts-ignore
                                public static forJavaClassPath(): Array<java.net.URL>
                                // @ts-ignore
                                public static forWebInfLib(servletContext: ServletContext): Array<java.net.URL>
                                // @ts-ignore
                                public static forWebInfClasses(servletContext: ServletContext): java.net.URL
                                // @ts-ignore
                                public static forManifest(): Array<java.net.URL>
                                // @ts-ignore
                                public static forManifest(url: java.net.URL): Array<java.net.URL>
                                // @ts-ignore
                                public static forManifest(urls: java.lang.Iterable<java.net.URL>): Array<java.net.URL>
                                // @ts-ignore
                                public static cleanPath(url: java.net.URL): string
                            }
                        }
                    }
                }
            }
        }
    }
}
