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
                    constructor(manipulatorClass: java.lang.Class<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>, immutableManipulatorClass: java.lang.Class<org.spongepowered.api.data.manipulator.ImmutableDataManipulator<any, ?>>, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder<any, ?>)
                    /**
                     * Constructs a new data already registered exception with a message.
                     * @param message The message to send with the exception
                     * @param manipulatorClass The manipulator class
                     * @param immutableManipulatorClass The immutable manipulator class
                     * @param builder The data manipulator builder
                     */
                    // @ts-ignore
                    constructor(message: string, manipulatorClass: java.lang.Class<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>, immutableManipulatorClass: java.lang.Class<org.spongepowered.api.data.manipulator.ImmutableDataManipulator<any, ?>>, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder<any, ?>)
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
                    constructor(message: string, cause: Error, manipulatorClass: java.lang.Class<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>, immutableManipulatorClass: java.lang.Class<org.spongepowered.api.data.manipulator.ImmutableDataManipulator<any, ?>>, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder<any, ?>)
                    /**
                     * Constructs a new data already registered exception with
                     * a throwable cause.
                     * @param cause The cause of the exception
                     * @param manipulatorClass The manipulator class
                     * @param immutableManipulatorClass The immutable manipulator class
                     * @param builder The data manipulator builder
                     */
                    // @ts-ignore
                    constructor(cause: Error, manipulatorClass: java.lang.Class<org.spongepowered.api.data.manipulator.DataManipulator<any, ?>>, immutableManipulatorClass: java.lang.Class<org.spongepowered.api.data.manipulator.ImmutableDataManipulator<any, ?>>, builder: org.spongepowered.api.data.manipulator.DataManipulatorBuilder<any, ?>)
                    /**
                     * Gets the related data manipulator class.
                     * @return The manipulator class
                     */
                    // @ts-ignore
                    getManipulatorClass(): java.lang.Class<? extends org.spongepowered.api.data.manipulator.DataManipulator<?, ?>>
                    /**
                     * Gets the related immutable data manipulator class.
                     * @return The immutable manipulator class
                     */
                    // @ts-ignore
                    getImmutableManipulatorClass(): java.lang.Class<? extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<?, ?>>
                    /**
                     * Gets the related data manipulator builder.
                     * @return The data manipulator builder
                     */
                    // @ts-ignore
                    getBuilder(): org.spongepowered.api.data.manipulator.DataManipulatorBuilder<?, ?>
                }
            }
        }
    }
}
