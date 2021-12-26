declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace reflections {
                        namespace adapters {
                            // @ts-ignore
                            interface MetadataAdapter<C, F, M> {
                                // @ts-ignore
                                getClassName(p0: C): string
                                // @ts-ignore
                                getSuperclassName(p0: C): string
                                // @ts-ignore
                                getInterfacesNames(p0: C): Array<java.lang.String | string>
                                // @ts-ignore
                                getFields(p0: C): Array<F>
                                // @ts-ignore
                                getMethods(p0: C): Array<M>
                                // @ts-ignore
                                getMethodName(p0: M): string
                                // @ts-ignore
                                getParameterNames(p0: M): Array<java.lang.String | string>
                                // @ts-ignore
                                getClassAnnotationNames(p0: C): Array<java.lang.String | string>
                                // @ts-ignore
                                getFieldAnnotationNames(p0: F): Array<java.lang.String | string>
                                // @ts-ignore
                                getMethodAnnotationNames(p0: M): Array<java.lang.String | string>
                                // @ts-ignore
                                getParameterAnnotationNames(p0: M, p1: number /*int*/): Array<java.lang.String | string>
                                // @ts-ignore
                                getReturnTypeName(p0: M): string
                                // @ts-ignore
                                getFieldName(p0: F): string
                                // @ts-ignore
                                getOfCreateClassObject(p0: io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.File): C
                                // @ts-ignore
                                getMethodModifier(p0: M): string
                                // @ts-ignore
                                getMethodKey(p0: C, p1: M): string
                                // @ts-ignore
                                getMethodFullKey(p0: C, p1: M): string
                                // @ts-ignore
                                isPublic(p0: java.lang.Object | any): boolean
                                // @ts-ignore
                                acceptsInput(p0: java.lang.String | string): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
