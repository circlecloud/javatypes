declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace util {
                namespace generator {
                    namespace dummy {
                        /**
                         * This class dynamically generates a dummy class for a given interface (usually a {@link CatalogType}).
                         * <p>The generated class implements all of the interface's methods, but
                         * throws an {@link UnsupportedOperationException} with an informative error message.</p>
                         */
                        // @ts-ignore
                        class DummyObjectProvider extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * Creates a new dummy class implementing the specified interface.
                             * @param type The interface to generate a dummy class for
                             * @param fieldName field name to pass to constructor
                             * @param <T> The type of class to be created
                             * @return The generated dummy class
                             */
                            // @ts-ignore
                            createFor<T>(type: java.lang.Class<T>, fieldName: string): T
                            /**
                             * Creates a new dummy class implementing the specified interface.
                             * @param type The interface to generate a dummy class for
                             * @param fieldName field name to pass to constructor
                             * @param <T> Base type for the dummy class
                             * @param <I> Interface for the dummy class to implement
                             * @return The generated dummy class
                             */
                            // @ts-ignore
                            createExtendedFor<T, I extends T>(type: java.lang.Class<T>, fieldName: string): I
                        }
                    }
                }
            }
        }
    }
}
