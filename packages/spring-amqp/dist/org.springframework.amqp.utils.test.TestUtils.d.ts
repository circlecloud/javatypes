declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace utils {
                namespace test {
                    /**
                     * See Spring Integration TestUtils.
                     * @author Mark Fisher
                     * @author Iwein Fuld
                     * @author Oleg Zhurakousky
                     * @author Gary Russell
                     * @since 1.2
                     */
                    // @ts-ignore
                    class TestUtils extends java.lang.Object {
                        /**
                         * Uses nested {@link DirectFieldAccessor}s to obtain a property using dotted notation to traverse fields; e.g.
                         * "foo.bar.baz" will obtain a reference to the baz field of the bar field of foo. Adopted from Spring Integration.
                         * @param root The object.
                         * @param propertyPath The path.
                         * @return The field.
                         */
                        // @ts-ignore
                        getPropertyValue(root: any, propertyPath: string): java.lang.Object
                        // @ts-ignore
                        getPropertyValue<T>(root: any, propertyPath: string, type: java.lang.Class<T>): T
                    }
                }
            }
        }
    }
}
