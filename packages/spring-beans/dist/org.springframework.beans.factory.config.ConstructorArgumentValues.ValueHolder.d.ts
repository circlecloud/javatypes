declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    namespace ConstructorArgumentValues {
                        /**
                         * Holder for a constructor argument value, with an optional type
                         * attribute indicating the target type of the actual constructor argument.
                         */
                        // @ts-ignore
                        class ValueHolder extends java.lang.Object implements org.springframework.beans.BeanMetadataElement {
                            /**
                             * Create a new ValueHolder for the given value.
                             * @param value the argument value
                             */
                            // @ts-ignore
                            constructor(value: any)
                            /**
                             * Create a new ValueHolder for the given value and type.
                             * @param value the argument value
                             * @param type the type of the constructor argument
                             */
                            // @ts-ignore
                            constructor(value: any, type: string)
                            /**
                             * Create a new ValueHolder for the given value, type and name.
                             * @param value the argument value
                             * @param type the type of the constructor argument
                             * @param name the name of the constructor argument
                             */
                            // @ts-ignore
                            constructor(value: any, type: string, name: string)
                            /**
                             * Set the value for the constructor argument.
                             */
                            // @ts-ignore
                            setValue(value: any): void
                            /**
                             * Return the value for the constructor argument.
                             */
                            // @ts-ignore
                            getValue(): java.lang.Object
                            /**
                             * Set the type of the constructor argument.
                             */
                            // @ts-ignore
                            setType(type: string): void
                            /**
                             * Return the type of the constructor argument.
                             */
                            // @ts-ignore
                            getType(): java.lang.String
                            /**
                             * Set the name of the constructor argument.
                             */
                            // @ts-ignore
                            setName(name: string): void
                            /**
                             * Return the name of the constructor argument.
                             */
                            // @ts-ignore
                            getName(): java.lang.String
                            /**
                             * Set the configuration source {@code Object} for this metadata element.
                             * <p>The exact type of the object will depend on the configuration mechanism used.
                             */
                            // @ts-ignore
                            setSource(source: any): void
                            // @ts-ignore
                            getSource(): java.lang.Object
                            /**
                             * Return whether this holder contains a converted value already ({@code true}),
                             * or whether the value still needs to be converted ({@code false}).
                             */
                            // @ts-ignore
                            isConverted(): boolean
                            /**
                             * Set the converted value of the constructor argument,
                             * after processed type conversion.
                             */
                            // @ts-ignore
                            setConvertedValue(value: any): void
                            /**
                             * Return the converted value of the constructor argument,
                             * after processed type conversion.
                             */
                            // @ts-ignore
                            getConvertedValue(): java.lang.Object
                            /**
                             * Create a copy of this ValueHolder: that is, an independent
                             * ValueHolder instance with the same contents.
                             */
                            // @ts-ignore
                            copy(): org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder
                        }
                    }
                }
            }
        }
    }
}
