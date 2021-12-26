declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace util {
                    namespace reflections {
                        namespace adapters {
                            // @ts-ignore
                            class JavassistAdapter extends java.lang.Object implements io.lumine.xikage.mythicmobs.util.reflections.adapters.MetadataAdapter<ClassFile, FieldInfo, MethodInfo> {
                                // @ts-ignore
                                constructor()
                                // @ts-ignore
                                public static includeInvisibleTag: boolean
                                // @ts-ignore
                                public getFields(cls: ClassFile): Array<FieldInfo>
                                // @ts-ignore
                                public getMethods(cls: ClassFile): Array<MethodInfo>
                                // @ts-ignore
                                public getMethodName(method: MethodInfo): string
                                // @ts-ignore
                                public getParameterNames(method: MethodInfo): Array<java.lang.String | string>
                                // @ts-ignore
                                public getClassAnnotationNames(aClass: ClassFile): Array<java.lang.String | string>
                                // @ts-ignore
                                public getFieldAnnotationNames(field: FieldInfo): Array<java.lang.String | string>
                                // @ts-ignore
                                public getMethodAnnotationNames(method: MethodInfo): Array<java.lang.String | string>
                                // @ts-ignore
                                public getParameterAnnotationNames(method: MethodInfo, parameterIndex: number /*int*/): Array<java.lang.String | string>
                                // @ts-ignore
                                public getReturnTypeName(method: MethodInfo): string
                                // @ts-ignore
                                public getFieldName(field: FieldInfo): string
                                // @ts-ignore
                                public getOfCreateClassObject(file: io.lumine.xikage.mythicmobs.util.reflections.vfs.Vfs.File): ClassFile
                                // @ts-ignore
                                public getMethodModifier(method: MethodInfo): string
                                // @ts-ignore
                                public getMethodKey(cls: ClassFile, method: MethodInfo): string
                                // @ts-ignore
                                public getMethodFullKey(cls: ClassFile, method: MethodInfo): string
                                // @ts-ignore
                                public isPublic(o: java.lang.Object | any): boolean
                                // @ts-ignore
                                public getClassName(cls: ClassFile): string
                                // @ts-ignore
                                public getSuperclassName(cls: ClassFile): string
                                // @ts-ignore
                                public getInterfacesNames(cls: ClassFile): Array<java.lang.String | string>
                                // @ts-ignore
                                public acceptsInput(file: java.lang.String | string): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
