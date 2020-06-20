declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace generator {
                    namespace GeneratorUtils {
                        // @ts-ignore
                        class LocalClassLoader extends java.lang.ClassLoader {
                            /**
                             * Creates a new {@link LocalClassLoader}.
                             * @param parent The parent class loader
                             */
                            // @ts-ignore
                            constructor(parent: java.lang.ClassLoader)
                            /**
                             * Defines the class by name and bytecode array.
                             * @param name The name of the class
                             * @param b The bytecode array
                             * @return The class
                             */
                            // @ts-ignore
                            defineClass(name: string, b: number /*byte*/[]): java.lang.Class<?>
                        }
                    }
                }
            }
        }
    }
}
