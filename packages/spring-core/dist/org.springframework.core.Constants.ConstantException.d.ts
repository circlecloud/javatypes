declare namespace org {
    namespace springframework {
        namespace core {
            namespace Constants {
                /**
                 * Exception thrown when the {@link Constants} class is asked for
                 * an invalid constant name.
                 */
                // @ts-ignore
                class ConstantException extends java.lang.IllegalArgumentException {
                    /**
                     * Thrown when an invalid constant name is requested.
                     * @param className name of the class containing the constant definitions
                     * @param field invalid constant name
                     * @param message description of the problem
                     */
                    // @ts-ignore
                    constructor(className: string, field: string, message: string)
                    /**
                     * Thrown when an invalid constant value is looked up.
                     * @param className name of the class containing the constant definitions
                     * @param namePrefix prefix of the searched constant names
                     * @param value the looked up constant value
                     */
                    // @ts-ignore
                    constructor(className: string, namePrefix: string, value: any)
                }
            }
        }
    }
}
