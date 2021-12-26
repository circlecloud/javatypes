declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace reflections {
                        namespace adapters {
                            // @ts-ignore
                            class JavaReflectionAdapter extends java.lang.Object implements io.lumine.xikage.mythicmobs.util.reflections.adapters.MetadataAdapter<java.lang.Class<any>, java.lang.reflect.Field, java.lang.reflect.Member> {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                public getFields(cls: java.lang.Class<any>): Array<java.lang.reflect.Field>
                                // @ts-ignore
                                public getMethods(cls: java.lang.Class<any>): Array<java.lang.reflect.Member>
                                // @ts-ignore
                                public getMethodName(method: java.lang.reflect.Member): string
                                // @ts-ignore
                                public getParameterNames(member: java.lang.reflect.Member): Array<java.lang.String | string>
                                // @ts-ignore
                                public getClassAnnotationNames(aClass: java.lang.Class<any>): Array<java.lang.String | string>
                                // @ts-ignore
                                public getFieldAnnotationNames(field: java.lang.reflect.Field): Array<java.lang.String | string>
                                // @ts-ignore
                                public getMethodAnnotationNames(method: java.lang.reflect.Member): Array<java.lang.String | string>
                                // @ts-ignore
                                public getParameterAnnotationNames(method: java.lang.reflect.Member, parameterIndex: number /*int*/): Array<java.lang.String | string>
                                // @ts-ignore
                                public getReturnTypeName(method: java.lang.reflect.Member): string
                                // @ts-ignore
                                public getFieldName(field: java.lang.reflect.Field): string
                                // @ts-ignore
                                public getOfCreateClassObject(file: io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.File): java.lang.Class<any>
                                // @ts-ignore
                                public getOfCreateClassObject(file: io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.File, ...loaders: java.lang.ClassLoader[]): java.lang.Class<any>
                                // @ts-ignore
                                public getMethodModifier(method: java.lang.reflect.Member): string
                                // @ts-ignore
                                public getMethodKey(cls: java.lang.Class<any>, method: java.lang.reflect.Member): string
                                // @ts-ignore
                                public getMethodFullKey(cls: java.lang.Class<any>, method: java.lang.reflect.Member): string
                                // @ts-ignore
                                public isPublic(o: java.lang.Object | any): boolean
                                // @ts-ignore
                                public getClassName(cls: java.lang.Class<any>): string
                                // @ts-ignore
                                public getSuperclassName(cls: java.lang.Class<any>): string
                                // @ts-ignore
                                public getInterfacesNames(cls: java.lang.Class<any>): Array<java.lang.String | string>
                                // @ts-ignore
                                public acceptsInput(file: java.lang.String | string): boolean
                                // @ts-ignore
                                public static getName(type: java.lang.Class<any>): string
                            }
                        }
                    }
                }
            }
        }
    }
}
