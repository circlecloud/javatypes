declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace generator {
                    // @ts-ignore
                    class GeneratorUtils extends java.lang.Object {
                        /**
                         * Gets a class name with the provided classifier.
                         * @param targetPackage The target package
                         * @param clazz The parent class
                         * @param classifier The classifier
                         * @return The java class name equivalent with the provided classifier
                         */
                        // @ts-ignore
                        getClassName(targetPackage: string, clazz: java.lang.Class<any>, classifier: string): java.lang.String
                        /**
                         * Insert the necessary methods to box a primitive type (if the given type
                         * is a primitive object).
                         * @param mv The method visitor
                         * @param type The type to unbox
                         */
                        // @ts-ignore
                        visitBoxingMethod(mv: MethodVisitor, type: Type): void
                        /**
                         * Insert the necessary methods to unbox a primitive type (if the given type
                         * is a primitive).
                         * @param mv The method visitor
                         * @param type The type to unbox
                         */
                        // @ts-ignore
                        visitUnboxingMethod(mv: MethodVisitor, type: Type): void
                    }
                }
            }
        }
    }
}
