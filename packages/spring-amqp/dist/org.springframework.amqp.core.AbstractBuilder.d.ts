declare namespace org {
    namespace springframework {
        namespace amqp {
            namespace core {
                /**
                 * Base class for builders supporting arguments.
                 * @author Gary Russell
                 * @since 1.6
                 */
                // @ts-ignore
                abstract class AbstractBuilder extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Return the arguments map, after creating one if necessary.
                     * @return the arguments.
                     */
                    // @ts-ignore
                    getOrCreateArguments(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                    // @ts-ignore
                    getArguments(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                }
            }
        }
    }
}
