declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace reflections {
                        // @ts-ignore
                        abstract class ReflectionUtils extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            // @ts-ignore
                            public static includeObject: boolean
                            // @ts-ignore
                            public static getAllSuperTypes(type: java.lang.Class<any>, ...predicates: object[]): Array<java.lang.Class<any>>
                            // @ts-ignore
                            public static getSuperTypes(type: java.lang.Class<any>): Array<java.lang.Class<any>>
                            // @ts-ignore
                            public static getAllMethods(type: java.lang.Class<any>, ...predicates: object[]): Array<java.lang.reflect.Method>
                            // @ts-ignore
                            public static getMethods(t: java.lang.Class<any>, ...predicates: object[]): Array<java.lang.reflect.Method>
                            // @ts-ignore
                            public static getAllConstructors(type: java.lang.Class<any>, ...predicates: object[]): Array<java.lang.reflect.Constructor<any>>
                            // @ts-ignore
                            public static getConstructors(t: java.lang.Class<any>, ...predicates: object[]): Array<java.lang.reflect.Constructor<any>>
                            // @ts-ignore
                            public static getAllFields(type: java.lang.Class<any>, ...predicates: object[]): Array<java.lang.reflect.Field>
                            // @ts-ignore
                            public static getFields(type: java.lang.Class<any>, ...predicates: object[]): Array<java.lang.reflect.Field>
                            // @ts-ignore
                            public static getAllAnnotations<T extends java.lang.reflect.AnnotatedElement>(type: T, ...predicates: object[]): Array<java.lang.annotation.Annotation>
                            // @ts-ignore
                            public static getAnnotations<T extends java.lang.reflect.AnnotatedElement>(type: T, ...predicates: object[]): Array<java.lang.annotation.Annotation>
                            // @ts-ignore
                            public static getAll<T extends java.lang.reflect.AnnotatedElement>(elements: java.util.Set<T> | Array<T>, ...predicates: object[]): Array<T>
                            // @ts-ignore
                            public static withName<T extends java.lang.reflect.Member>(name: java.lang.String | string): object
                            // @ts-ignore
                            public static withPrefix<T extends java.lang.reflect.Member>(prefix: java.lang.String | string): object
                            // @ts-ignore
                            public static withPattern<T extends java.lang.reflect.AnnotatedElement>(regex: java.lang.String | string): object
                            // @ts-ignore
                            public static withAnnotation<T extends java.lang.reflect.AnnotatedElement>(annotation: java.lang.Class<any>): object
                            // @ts-ignore
                            public static withAnnotations<T extends java.lang.reflect.AnnotatedElement>(...annotations: java.lang.Class<any>[]): object
                            // @ts-ignore
                            public static withAnnotation<T extends java.lang.reflect.AnnotatedElement>(annotation: java.lang.annotation.Annotation): object
                            // @ts-ignore
                            public static withAnnotations<T extends java.lang.reflect.AnnotatedElement>(...annotations: java.lang.annotation.Annotation[]): object
                            // @ts-ignore
                            public static withParameters(...types: java.lang.Class<any>[]): object
                            // @ts-ignore
                            public static withParametersAssignableTo(...types: java.lang.Class<any>[]): object
                            // @ts-ignore
                            public static withParametersCount(count: number /*int*/): object
                            // @ts-ignore
                            public static withAnyParameterAnnotation(annotationClass: java.lang.Class<any>): object
                            // @ts-ignore
                            public static withAnyParameterAnnotation(annotation: java.lang.annotation.Annotation): object
                            // @ts-ignore
                            public static withType<T>(type: java.lang.Class<T>): object
                            // @ts-ignore
                            public static withTypeAssignableTo<T>(type: java.lang.Class<T>): object
                            // @ts-ignore
                            public static withReturnType<T>(type: java.lang.Class<T>): object
                            // @ts-ignore
                            public static withReturnTypeAssignableTo<T>(type: java.lang.Class<T>): object
                            // @ts-ignore
                            public static withModifier<T extends java.lang.reflect.Member>(mod: number /*int*/): object
                            // @ts-ignore
                            public static withClassModifier(mod: number /*int*/): object
                            // @ts-ignore
                            public static forName(typeName: java.lang.String | string, ...classLoaders: java.lang.ClassLoader[]): java.lang.Class<any>
                            // @ts-ignore
                            public static forNames<T>(classes: java.lang.Iterable<java.lang.String | string>, ...classLoaders: java.lang.ClassLoader[]): Array<java.lang.Class<any>>
                        }
                    }
                }
            }
        }
    }
}
