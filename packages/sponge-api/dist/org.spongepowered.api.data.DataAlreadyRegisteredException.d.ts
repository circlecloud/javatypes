declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                class DataAlreadyRegisteredException extends org.spongepowered.api.data.DataException {
                    /**
                     * Constructs a new data already registered exception.
                     * @param manipulatorClass The manipulator class
                     * @param immutableManipulatorClass The immutable manipulator class
                     * @param builder The data manipulator builder
                     */
                    // @ts-ignore
                    constructor(manipulatorClass: java.lang.Class<any>, immutableManipulatorClass: java.lang.Class<any>, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder<any, any>)
                    /**
                     * Constructs a new data already registered exception with a message.
                     * @param message The message to send with the exception
                     * @param manipulatorClass The manipulator class
                     * @param immutableManipulatorClass The immutable manipulator class
                     * @param builder The data manipulator builder
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, manipulatorClass: java.lang.Class<any>, immutableManipulatorClass: java.lang.Class<any>, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder<any, any>)
                    /**
                     * Constructs a new data already registered exception with a message and
                     * a throwable cause.
                     * @param message The message to send with the exception
                     * @param cause The cause of the exception
                     * @param manipulatorClass The manipulator class
                     * @param immutableManipulatorClass The immutable manipulator class
                     * @param builder The data manipulator builder
                     */
                    // @ts-ignore
                    constructor(message: java.lang.String | string, cause: java.lang.Throwable | Error, manipulatorClass: java.lang.Class<any>, immutableManipulatorClass: java.lang.Class<any>, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder<any, any>)
                    /**
                     * Constructs a new data already registered exception with
                     * a throwable cause.
                     * @param cause The cause of the exception
                     * @param manipulatorClass The manipulator class
                     * @param immutableManipulatorClass The immutable manipulator class
                     * @param builder The data manipulator builder
                     */
                    // @ts-ignore
                    constructor(cause: java.lang.Throwable | Error, manipulatorClass: java.lang.Class<any>, immutableManipulatorClass: java.lang.Class<any>, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder<any, any>)
                    /**
                     * Gets the related data manipulator class.
                     * @return The manipulator class
                     */
                    // @ts-ignore
                    getManipulatorClass(): java.lang.Class<any>
                    /**
                     * Gets the related immutable data manipulator class.
                     * @return The immutable manipulator class
                     */
                    // @ts-ignore
                    getImmutableManipulatorClass(): java.lang.Class<any>
                    /**
                     * Gets the related data manipulator builder.
                     * @return The data manipulator builder
                     */
                    // @ts-ignore
                    getBuilder(): org.spongepowered.api.data.manipulator.DataManipulatorBuilder<any, any>
                }
            }
        }
    }
}
