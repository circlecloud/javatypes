declare namespace javax {
    namespace xml {
        namespace crypto {
            /**
             * A representation of an XML structure from any namespace. The purpose of
             * this interface is to group (and provide type safety for) all
             * representations of XML structures.
             * @author Sean Mullan
             * @author JSR 105 Expert Group
             * @since 1.6
             */
            // @ts-ignore
            interface XMLStructure {
                /**
                 * Indicates whether a specified feature is supported.
                 * @param feature the feature name (as an absolute URI)
                 * @return <code>true</code> if the specified feature is supported,
                 *     <code>false</code> otherwise
                 * @throws NullPointerException if <code>feature</code> is <code>null</code>
                 */
                // @ts-ignore
                isFeatureSupported(feature: java.lang.String | string): boolean
            }
        }
    }
}
