declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    // @ts-ignore
                    abstract class AbstractProperty<K, V> extends java.lang.Object implements org.spongepowered.api.data.Property<K, V> {
                        /**
                         * Initialise internal values to defaults, use this ctor if you plan to
                         * override {@link #getKey} and {@link #getValue} yourself.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Initialise key to default, and value to the supplied value.
                         * @param value The value of the property
                         */
                        // @ts-ignore
                        constructor(value: V)
                        /**
                         * Initialise the value to the specified value and use the specified
                         * operator, use the default key.
                         * @param value The property value
                         * @param op The operator for the property
                         */
                        // @ts-ignore
                        constructor(value: V, op: org.spongepowered.api.data.Property.Operator)
                        /**
                         * Use the specified key and value and set operator to the default.
                         * @param key The key identifying the property
                         * @param value The property value
                         */
                        // @ts-ignore
                        constructor(key: K, value: V)
                        // @ts-ignore
                        constructor(key: K, value: V, op: org.spongepowered.api.data.Property.Operator)
                        /**
                         * Operator for comparing to other properties. Operators should always be
                         * applied by consumers in a &lt;this&gt; &lt;OPERATOR&gt; &lt;other&gt;
                         * pattern
                         */
                        // @ts-ignore
                        readonly operator: org.spongepowered.api.data.Property.Operator
                        /**
                         * The value.
                         */
                        // @ts-ignore
                        value: V
                        /**
                         * Gets the default value for {@link #key}, used in case null is passed in
                         * (since we can't have a null key). In general this should return the class
                         * name of the property itself but subclasses are free to alter this
                         * behaviour if they wish.
                         * @param value Value passed in to the ctor, supplied in case a subclass
                         *       wants to return a specific default key based on the value
                         * @return default key to use. Must not be null!
                         */
                        // @ts-ignore
                        getDefaultKey(value: V): K
                        /**
                         * Return the default operator to use, based on the supplied key and value.
                         * @param key Property key
                         * @param value Property initial value, may be null
                         * @return operator to use
                         */
                        // @ts-ignore
                        getDefaultOperator(key: K, value: V): org.spongepowered.api.data.Property.Operator
                        // @ts-ignore
                        public getKey(): K
                        // @ts-ignore
                        public getValue(): V
                        // @ts-ignore
                        public getOperator(): org.spongepowered.api.data.Property.Operator
                        // @ts-ignore
                        public matches(other: org.spongepowered.api.data.Property<any, any>): boolean
                        // @ts-ignore
                        public equals(obj: java.lang.Object | any): boolean
                        // @ts-ignore
                        public hashCode(): number /*int*/
                        // @ts-ignore
                        public toString(): string
                        /**
                         * Convenience method to avoid null-checking. Returns 0 if <em>value</em> is
                         * null.
                         * @param value The value to get the hashcode of
                         * @return The hashcode value
                         */
                        // @ts-ignore
                        hashCodeOf(value: java.lang.Object | any): number /*int*/
                    }
                }
            }
        }
    }
}
