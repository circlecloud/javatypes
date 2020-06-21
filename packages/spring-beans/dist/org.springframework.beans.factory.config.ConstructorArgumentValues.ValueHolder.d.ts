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
                            constructor(value: java.lang.Object | any)
                            /**
                             * Create a new ValueHolder for the given value and type.
                             * @param value the argument value
                             * @param type the type of the constructor argument
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object | any, type: java.lang.String | string)
                            /**
                             * Create a new ValueHolder for the given value, type and name.
                             * @param value the argument value
                             * @param type the type of the constructor argument
                             * @param name the name of the constructor argument
                             */
                            // @ts-ignore
                            constructor(value: java.lang.Object | any, type: java.lang.String | string, name: java.lang.String | string)
                            /**
                             * Set the value for the constructor argument.
                             */
                            // @ts-ignore
                            public setValue(value: java.lang.Object | any): void
                            /**
                             * Return the value for the constructor argument.
                             */
                            // @ts-ignore
                            public getValue(): any
                            /**
                             * Set the type of the constructor argument.
                             */
                            // @ts-ignore
                            public setType(type: java.lang.String | string): void
                            /**
                             * Return the type of the constructor argument.
                             */
                            // @ts-ignore
                            public getType(): string
                            /**
                             * Set the name of the constructor argument.
                             */
                            // @ts-ignore
                            public setName(name: java.lang.String | string): void
                            /**
                             * Return the name of the constructor argument.
                             */
                            // @ts-ignore
                            public getName(): string
                            /**
                             * Set the configuration source {@code Object} for this metadata element.
                             * <p>The exact type of the object will depend on the configuration mechanism used.
                             */
                            // @ts-ignore
                            public setSource(source: java.lang.Object | any): void
                            // @ts-ignore
                            public getSource(): any
                            /**
                             * Return whether this holder contains a converted value already ({@code true}),
                             * or whether the value still needs to be converted ({@code false}).
                             */
                            // @ts-ignore
                            public isConverted(): boolean
                            /**
                             * Set the converted value of the constructor argument,
                             * after processed type conversion.
                             */
                            // @ts-ignore
                            public setConvertedValue(value: java.lang.Object | any): void
                            /**
                             * Return the converted value of the constructor argument,
                             * after processed type conversion.
                             */
                            // @ts-ignore
                            public getConvertedValue(): any
                            /**
                             * Create a copy of this ValueHolder: that is, an independent
                             * ValueHolder instance with the same contents.
                             */
                            // @ts-ignore
                            public copy(): org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder
                        }
                    }
                }
            }
        }
    }
}
