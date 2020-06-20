declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace config {
                    /**
                     * Holder for constructor argument values, typically as part of a bean definition.
                     * <p>Supports values for a specific index in the constructor argument list
                     * as well as for generic argument matches by type.
                     * @author Juergen Hoeller
                     * @since 09.11.2003
                     * @see BeanDefinition#getConstructorArgumentValues
                     */
                    // @ts-ignore
                    class ConstructorArgumentValues extends java.lang.Object {
                        /**
                         * Create a new empty ConstructorArgumentValues object.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Deep copy constructor.
                         * @param original the ConstructorArgumentValues to copy
                         */
                        // @ts-ignore
                        constructor(original: org.springframework.beans.factory.config.ConstructorArgumentValues)
                        /**
                         * Copy all given argument values into this object, using separate holder
                         * instances to keep the values independent from the original object.
                         * <p>Note: Identical ValueHolder instances will only be registered once,
                         * to allow for merging and re-merging of argument value definitions. Distinct
                         * ValueHolder instances carrying the same content are of course allowed.
                         */
                        // @ts-ignore
                        addArgumentValues(other: org.springframework.beans.factory.config.ConstructorArgumentValues): void
                        /**
                         * Add an argument value for the given index in the constructor argument list.
                         * @param index the index in the constructor argument list
                         * @param value the argument value
                         */
                        // @ts-ignore
                        addIndexedArgumentValue(index: number /*int*/, value: any): void
                        /**
                         * Add an argument value for the given index in the constructor argument list.
                         * @param index the index in the constructor argument list
                         * @param value the argument value
                         * @param type the type of the constructor argument
                         */
                        // @ts-ignore
                        addIndexedArgumentValue(index: number /*int*/, value: any, type: string): void
                        /**
                         * Add an argument value for the given index in the constructor argument list.
                         * @param index the index in the constructor argument list
                         * @param newValue the argument value in the form of a ValueHolder
                         */
                        // @ts-ignore
                        addIndexedArgumentValue(index: number /*int*/, newValue: org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder): void
                        /**
                         * Check whether an argument value has been registered for the given index.
                         * @param index the index in the constructor argument list
                         */
                        // @ts-ignore
                        hasIndexedArgumentValue(index: number /*int*/): boolean
                        /**
                         * Get argument value for the given index in the constructor argument list.
                         * @param index the index in the constructor argument list
                         * @param requiredType the type to match (can be {#code null} to match
                         *  untyped values only)
                         * @return the ValueHolder for the argument, or {#code null} if none set
                         */
                        // @ts-ignore
                        getIndexedArgumentValue(index: number /*int*/, requiredType: java.lang.Class<any>): org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder
                        /**
                         * Get argument value for the given index in the constructor argument list.
                         * @param index the index in the constructor argument list
                         * @param requiredType the type to match (can be {#code null} to match
                         *  untyped values only)
                         * @param requiredName the type to match (can be {#code null} to match
                         *  unnamed values only, or empty String to match any name)
                         * @return the ValueHolder for the argument, or {#code null} if none set
                         */
                        // @ts-ignore
                        getIndexedArgumentValue(index: number /*int*/, requiredType: java.lang.Class<any>, requiredName: string): org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder
                        /**
                         * Return the map of indexed argument values.
                         * @return unmodifiable Map with Integer index as key and ValueHolder as value
                         * @see ValueHolder
                         */
                        // @ts-ignore
                        getIndexedArgumentValues(): java.util.Map<java.lang.Integer, org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder>
                        /**
                         * Add a generic argument value to be matched by type.
                         * <p>Note: A single generic argument value will just be used once,
                         * rather than matched multiple times.
                         * @param value the argument value
                         */
                        // @ts-ignore
                        addGenericArgumentValue(value: any): void
                        /**
                         * Add a generic argument value to be matched by type.
                         * <p>Note: A single generic argument value will just be used once,
                         * rather than matched multiple times.
                         * @param value the argument value
                         * @param type the type of the constructor argument
                         */
                        // @ts-ignore
                        addGenericArgumentValue(value: any, type: string): void
                        /**
                         * Add a generic argument value to be matched by type or name (if available).
                         * <p>Note: A single generic argument value will just be used once,
                         * rather than matched multiple times.
                         * @param newValue the argument value in the form of a ValueHolder
                         *  <p>Note: Identical ValueHolder instances will only be registered once,
                         *  to allow for merging and re-merging of argument value definitions. Distinct
                         *  ValueHolder instances carrying the same content are of course allowed.
                         */
                        // @ts-ignore
                        addGenericArgumentValue(newValue: org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder): void
                        /**
                         * Look for a generic argument value that matches the given type.
                         * @param requiredType the type to match
                         * @return the ValueHolder for the argument, or {#code null} if none set
                         */
                        // @ts-ignore
                        getGenericArgumentValue(requiredType: java.lang.Class<any>): org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder
                        /**
                         * Look for a generic argument value that matches the given type.
                         * @param requiredType the type to match
                         * @param requiredName the name to match
                         * @return the ValueHolder for the argument, or {#code null} if none set
                         */
                        // @ts-ignore
                        getGenericArgumentValue(requiredType: java.lang.Class<any>, requiredName: string): org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder
                        /**
                         * Look for the next generic argument value that matches the given type,
                         * ignoring argument values that have already been used in the current
                         * resolution process.
                         * @param requiredType the type to match (can be {#code null} to find
                         *  an arbitrary next generic argument value)
                         * @param requiredName the name to match (can be {#code null} to not
                         *  match argument values by name, or empty String to match any name)
                         * @param usedValueHolders a Set of ValueHolder objects that have already been used
                         *  in the current resolution process and should therefore not be returned again
                         * @return the ValueHolder for the argument, or {#code null} if none found
                         */
                        // @ts-ignore
                        getGenericArgumentValue(requiredType: java.lang.Class<any>, requiredName: string, usedValueHolders: Array<org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder>): org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder
                        /**
                         * Return the list of generic argument values.
                         * @return unmodifiable List of ValueHolders
                         * @see ValueHolder
                         */
                        // @ts-ignore
                        getGenericArgumentValues(): java.util.List<org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder>
                        /**
                         * Look for an argument value that either corresponds to the given index
                         * in the constructor argument list or generically matches by type.
                         * @param index the index in the constructor argument list
                         * @param requiredType the parameter type to match
                         * @return the ValueHolder for the argument, or {#code null} if none set
                         */
                        // @ts-ignore
                        getArgumentValue(index: number /*int*/, requiredType: java.lang.Class<any>): org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder
                        /**
                         * Look for an argument value that either corresponds to the given index
                         * in the constructor argument list or generically matches by type.
                         * @param index the index in the constructor argument list
                         * @param requiredType the parameter type to match
                         * @param requiredName the parameter name to match
                         * @return the ValueHolder for the argument, or {#code null} if none set
                         */
                        // @ts-ignore
                        getArgumentValue(index: number /*int*/, requiredType: java.lang.Class<any>, requiredName: string): org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder
                        /**
                         * Look for an argument value that either corresponds to the given index
                         * in the constructor argument list or generically matches by type.
                         * @param index the index in the constructor argument list
                         * @param requiredType the parameter type to match (can be {#code null}
                         *  to find an untyped argument value)
                         * @param requiredName the parameter name to match (can be {#code null}
                         *  to find an unnamed argument value, or empty String to match any name)
                         * @param usedValueHolders a Set of ValueHolder objects that have already
                         *  been used in the current resolution process and should therefore not
                         *  be returned again (allowing to return the next generic argument match
                         *  in case of multiple generic argument values of the same type)
                         * @return the ValueHolder for the argument, or {#code null} if none set
                         */
                        // @ts-ignore
                        getArgumentValue(index: number /*int*/, requiredType: java.lang.Class<any>, requiredName: string, usedValueHolders: Array<org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder>): org.springframework.beans.factory.config.ConstructorArgumentValues.ValueHolder
                        /**
                         * Return the number of argument values held in this instance,
                         * counting both indexed and generic argument values.
                         */
                        // @ts-ignore
                        getArgumentCount(): int
                        /**
                         * Return if this holder does not contain any argument values,
                         * neither indexed ones nor generic ones.
                         */
                        // @ts-ignore
                        isEmpty(): boolean
                        /**
                         * Clear this holder, removing all argument values.
                         */
                        // @ts-ignore
                        clear(): void
                        // @ts-ignore
                        equals(other: any): boolean
                        // @ts-ignore
                        hashCode(): int
                    }
                }
            }
        }
    }
}
