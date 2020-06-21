declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace generator {
                    namespace dummy {
                        // @ts-ignore
                        class DummyClassGeneratorProvider extends java.lang.Object {
                            /**
                             * Creates a new dummy class provider.
                             * @param targetPackage The target package
                             */
                            // @ts-ignore
                            constructor(targetPackage: java.lang.String | string)
                            /**
                             * Creates a new class extended based on the provided {@code type} with the
                             * provided {@code exceptionType} to throw for all methods provided by the
                             * target class.
                             * @param type The type of class to generate
                             * @param exceptionType The exception to throw
                             * @param <T> The type of class
                             * @return The generated class
                             */
                            // @ts-ignore
                            public create<T>(type: java.lang.Class<T>, exceptionType: java.lang.Class<any>): java.lang.Class<T>
                        }
                    }
                }
            }
        }
    }
}
