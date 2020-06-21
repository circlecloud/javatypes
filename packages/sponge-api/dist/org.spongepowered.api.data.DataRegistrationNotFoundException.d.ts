declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                class DataRegistrationNotFoundException extends org.spongepowered.api.data.DataException {
                    /**
                     * Constructs a basic data registration not found exception.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * Constructs a data registration not found exception with a specified
                     * registration query, which will be used as the message.
                     * @param registrationQuery The registration query
                     */
                    // @ts-ignore
                    constructor(registrationQuery: java.lang.String | string)
                    /**
                     * Constructs a data registration not found exception with a specified
                     * message and registration query.
                     * @param message The message
                     * @param registrationQuery The registration query
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, registrationQuery: java.lang.String | string)
                    /**
                     * Constructs a data registration not found exception with a message and a
                     * specified data manipulator class.
                     * @param message The message
                     * @param manipulatorClass The manipulator class
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, manipulatorClass: java.lang.Class<any>)
                    /**
                     * Constructs a data registration not found exception with a message,
                     * a throwable cause, and a specified data manipulator class.
                     * @param message The message
                     * @param cause The cause
                     * @param manipulatorClass The manipulator class
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error, manipulatorClass: java.lang.Class<any>)
                    /**
                     * Constructs a data registration not found exception with a message,
                     * an immutable data manipulator class, and a mutable
                     * data manipulator class.
                     * @param message The message
                     * @param manipulatorClass The manipulator class
                     * @param immutableClass The immutable class
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, manipulatorClass: java.lang.Class<any>, immutableClass: java.lang.Class<any>)
                    /**
                     * Constructs a data registration not found exception with a message,
                     * a throwable cause, an immutable data manipulator class,
                     * and a mutable data manipulator class.
                     * @param message The message
                     * @param cause The cause
                     * @param manipulatorClass The manipulator class
                     * @param immutableClass The immutable class
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error, manipulatorClass: java.lang.Class<any>, immutableClass: java.lang.Class<any>)
                    /**
                     * Gets the specified registration query, if present.
                     * @return The registration query, if present
                     */
                    // @ts-ignore
                    getRegistrationQuery(): string
                    /**
                     * Gets the data manipulator class, if present.
                     * @return The manipulator class, if present
                     */
                    // @ts-ignore
                    getManipulatorClass(): java.lang.Class<any>
                    /**
                     * Gets the immutable data manipulator class, if present.
                     * @return The immutable manipulator class, if present
                     */
                    // @ts-ignore
                    getImmutableClass(): java.lang.Class<any>
                }
            }
        }
    }
}
