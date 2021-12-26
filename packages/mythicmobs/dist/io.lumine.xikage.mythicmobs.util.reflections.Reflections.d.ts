declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace reflections {
                        // @ts-ignore
                        class Reflections extends java.lang.Object {
                            // @ts-ignore
                            constructor(configuration: io.lumine.xikage.mythicmobs.util.reflections.Configuration)
                            // @ts-ignore
                            constructor(prefix: java.lang.String | string, ...scanners: io.lumine.xikage.mythicmobs.util.reflections.scanners.Scanner[])
                            // @ts-ignore
                            constructor(...params: java.lang.Object[] | any[])
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public static log: Logger
                            // @ts-ignore
                            readonly configuration: io.lumine.xikage.mythicmobs.util.reflections.Configuration
                            // @ts-ignore
                            store: io.lumine.xikage.mythicmobs.util.reflections.Store
                            // @ts-ignore
                            scan(): void
                            // @ts-ignore
                            scan(url: java.net.URL): void
                            // @ts-ignore
                            public static collect(): io.lumine.xikage.mythicmobs.util.reflections.Reflections
                            // @ts-ignore
                            public static collect(packagePrefix: java.lang.String | string, resourceNameFilter: object, ...optionalSerializer: io.lumine.xikage.mythicmobs.util.reflections.serializers.Serializer[]): io.lumine.xikage.mythicmobs.util.reflections.Reflections
                            // @ts-ignore
                            public collect(inputStream: java.io.InputStream): io.lumine.xikage.mythicmobs.util.reflections.Reflections
                            // @ts-ignore
                            public collect(file: java.io.File): io.lumine.xikage.mythicmobs.util.reflections.Reflections
                            // @ts-ignore
                            public merge(reflections: io.lumine.xikage.mythicmobs.util.reflections.Reflections): io.lumine.xikage.mythicmobs.util.reflections.Reflections
                            // @ts-ignore
                            public expandSuperTypes(): void
                            // @ts-ignore
                            public getSubTypesOf<T>(type: java.lang.Class<T>): Array<java.lang.Class<any>>
                            // @ts-ignore
                            public getTypesAnnotatedWith(annotation: java.lang.Class<any>): Array<java.lang.Class<any>>
                            // @ts-ignore
                            public getTypesAnnotatedWith(annotation: java.lang.Class<any>, honorInherited: boolean): Array<java.lang.Class<any>>
                            // @ts-ignore
                            public getTypesAnnotatedWith(annotation: java.lang.annotation.Annotation): Array<java.lang.Class<any>>
                            // @ts-ignore
                            public getTypesAnnotatedWith(annotation: java.lang.annotation.Annotation, honorInherited: boolean): Array<java.lang.Class<any>>
                            // @ts-ignore
                            getAllAnnotated(annotated: java.lang.Iterable<java.lang.String | string>, inherited: boolean, honorInherited: boolean): java.lang.Iterable<java.lang.String | string>
                            // @ts-ignore
                            public getMethodsAnnotatedWith(annotation: java.lang.Class<any>): Array<java.lang.reflect.Method>
                            // @ts-ignore
                            public getMethodsAnnotatedWith(annotation: java.lang.annotation.Annotation): Array<java.lang.reflect.Method>
                            // @ts-ignore
                            public getMethodsMatchParams(...types: java.lang.Class<any>[]): Array<java.lang.reflect.Method>
                            // @ts-ignore
                            public getMethodsReturn(returnType: java.lang.Class<any>): Array<java.lang.reflect.Method>
                            // @ts-ignore
                            public getMethodsWithAnyParamAnnotated(annotation: java.lang.Class<any>): Array<java.lang.reflect.Method>
                            // @ts-ignore
                            public getMethodsWithAnyParamAnnotated(annotation: java.lang.annotation.Annotation): Array<java.lang.reflect.Method>
                            // @ts-ignore
                            public getConstructorsAnnotatedWith(annotation: java.lang.Class<any>): Array<java.lang.reflect.Constructor<any>>
                            // @ts-ignore
                            public getConstructorsAnnotatedWith(annotation: java.lang.annotation.Annotation): Array<java.lang.reflect.Constructor<any>>
                            // @ts-ignore
                            public getConstructorsMatchParams(...types: java.lang.Class<any>[]): Array<java.lang.reflect.Constructor<any>>
                            // @ts-ignore
                            public getConstructorsWithAnyParamAnnotated(annotation: java.lang.Class<any>): Array<java.lang.reflect.Constructor<any>>
                            // @ts-ignore
                            public getConstructorsWithAnyParamAnnotated(annotation: java.lang.annotation.Annotation): Array<java.lang.reflect.Constructor<any>>
                            // @ts-ignore
                            public getFieldsAnnotatedWith(annotation: java.lang.Class<any>): Array<java.lang.reflect.Field>
                            // @ts-ignore
                            public getFieldsAnnotatedWith(annotation: java.lang.annotation.Annotation): Array<java.lang.reflect.Field>
                            // @ts-ignore
                            public getResources(namePredicate: object): Array<java.lang.String | string>
                            // @ts-ignore
                            public getMethodParamNames(method: java.lang.reflect.Method): Array<java.lang.String | string>
                            // @ts-ignore
                            public getConstructorParamNames(constructor: java.lang.reflect.Constructor<any>): Array<java.lang.String | string>
                            // @ts-ignore
                            public getFieldUsage(field: java.lang.reflect.Field): Array<java.lang.reflect.Member>
                            // @ts-ignore
                            public getMethodUsage(method: java.lang.reflect.Method): Array<java.lang.reflect.Member>
                            // @ts-ignore
                            public getConstructorUsage(constructor: java.lang.reflect.Constructor<any>): Array<java.lang.reflect.Member>
                            // @ts-ignore
                            public getAllTypes(): Array<java.lang.String | string>
                            // @ts-ignore
                            public getStore(): io.lumine.xikage.mythicmobs.util.reflections.Store
                            // @ts-ignore
                            public getConfiguration(): io.lumine.xikage.mythicmobs.util.reflections.Configuration
                            // @ts-ignore
                            public save(filename: java.lang.String | string): java.io.File
                            // @ts-ignore
                            public save(filename: java.lang.String | string, serializer: io.lumine.xikage.mythicmobs.util.reflections.serializers.Serializer): java.io.File
                        }
                    }
                }
            }
        }
    }
}
