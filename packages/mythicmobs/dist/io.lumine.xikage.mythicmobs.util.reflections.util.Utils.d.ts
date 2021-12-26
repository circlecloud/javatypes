declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace reflections {
                        namespace util {
                            // @ts-ignore
                            abstract class Utils extends java.lang.Object {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                public static repeat(string: java.lang.String | string, times: number /*int*/): string
                                // @ts-ignore
                                public static isEmpty(s: java.lang.String | string): boolean
                                // @ts-ignore
                                public static isEmpty(objects: java.lang.Object[] | any[]): boolean
                                // @ts-ignore
                                public static prepareFile(filename: java.lang.String | string): java.io.File
                                // @ts-ignore
                                public static getMemberFromDescriptor(descriptor: java.lang.String | string, ...classLoaders: java.lang.ClassLoader[]): java.lang.reflect.Member
                                // @ts-ignore
                                public static getMethodsFromDescriptors(annotatedWith: java.lang.Iterable<java.lang.String | string>, ...classLoaders: java.lang.ClassLoader[]): Array<java.lang.reflect.Method>
                                // @ts-ignore
                                public static getConstructorsFromDescriptors(annotatedWith: java.lang.Iterable<java.lang.String | string>, ...classLoaders: java.lang.ClassLoader[]): Array<java.lang.reflect.Constructor<any>>
                                // @ts-ignore
                                public static getMembersFromDescriptors(values: java.lang.Iterable<java.lang.String | string>, ...classLoaders: java.lang.ClassLoader[]): Array<java.lang.reflect.Member>
                                // @ts-ignore
                                public static getFieldFromString(field: java.lang.String | string, ...classLoaders: java.lang.ClassLoader[]): java.lang.reflect.Field
                                // @ts-ignore
                                public static close(closeable: java.io.InputStream): void
                                // @ts-ignore
                                public static findLogger(aClass: java.lang.Class<any>): Logger
                                // @ts-ignore
                                public static isConstructor(fqn: java.lang.String | string): boolean
                                // @ts-ignore
                                public static name(type: java.lang.Class<any>): string
                                // @ts-ignore
                                public static names(types: java.lang.Iterable<java.lang.Class<any>>): Array<java.lang.String | string>
                                // @ts-ignore
                                public static names(...types: java.lang.Class<any>[]): Array<java.lang.String | string>
                                // @ts-ignore
                                public static name(constructor: java.lang.reflect.Constructor<any>): string
                                // @ts-ignore
                                public static name(method: java.lang.reflect.Method): string
                                // @ts-ignore
                                public static name(field: java.lang.reflect.Field): string
                            }
                        }
                    }
                }
            }
        }
    }
}
