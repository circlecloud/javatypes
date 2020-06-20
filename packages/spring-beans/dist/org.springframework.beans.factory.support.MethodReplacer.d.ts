declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace support {
                    /**
                     * Interface to be implemented by classes that can reimplement any method
                     * on an IoC-managed object: the <b>Method Injection</b> form of
                     * Dependency Injection.
                     * <p>Such methods may be (but need not be) abstract, in which case the
                     * container will create a concrete subclass to instantiate.
                     * @author Rod Johnson
                     * @since 1.1
                     */
                    // @ts-ignore
                    interface MethodReplacer {
                        /**
                         * Reimplement the given method.
                         * @param obj the instance we're reimplementing the method for
                         * @param method the method to reimplement
                         * @param args arguments to the method
                         * @return return value for the method
                         */
                        // @ts-ignore
                        reimplement(obj: any, method: java.lang.reflect.Method, args: any[]): java.lang.Object
                    }
                }
            }
        }
    }
}
