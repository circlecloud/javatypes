declare namespace org {
    namespace springframework {
        namespace beans {
            /**
             * Helper class for calculating property matches, according to a configurable
             * distance. Provide the list of potential matches and an easy way to generate
             * an error message. Works for both java bean properties and fields.
             * <p>Mainly for use within the framework and in particular the binding facility.
             * @author Alef Arendsen
             * @author Arjen Poutsma
             * @author Juergen Hoeller
             * @author Stephane Nicoll
             * @since 2.0
             * @see #forProperty(String, Class)
             * @see #forField(String, Class)
             */
            // @ts-ignore
            class PropertyMatches extends java.lang.Object {
                /**
                 * Default maximum property distance: 2.
                 */
                // @ts-ignore
                readonly DEFAULT_MAX_DISTANCE: number /*int*/
                /**
                 * Create PropertyMatches for the given bean property.
                 * @param propertyName the name of the property to find possible matches for
                 * @param beanClass the bean class to search for matches
                 */
                // @ts-ignore
                forProperty(propertyName: string, beanClass: java.lang.Class<any>): org.springframework.beans.PropertyMatches
                /**
                 * Create PropertyMatches for the given bean property.
                 * @param propertyName the name of the property to find possible matches for
                 * @param beanClass the bean class to search for matches
                 * @param maxDistance the maximum property distance allowed for matches
                 */
                // @ts-ignore
                forProperty(propertyName: string, beanClass: java.lang.Class<any>, maxDistance: number /*int*/): org.springframework.beans.PropertyMatches
                /**
                 * Create PropertyMatches for the given field property.
                 * @param propertyName the name of the field to find possible matches for
                 * @param beanClass the bean class to search for matches
                 */
                // @ts-ignore
                forField(propertyName: string, beanClass: java.lang.Class<any>): org.springframework.beans.PropertyMatches
                /**
                 * Create PropertyMatches for the given field property.
                 * @param propertyName the name of the field to find possible matches for
                 * @param beanClass the bean class to search for matches
                 * @param maxDistance the maximum property distance allowed for matches
                 */
                // @ts-ignore
                forField(propertyName: string, beanClass: java.lang.Class<any>, maxDistance: number /*int*/): org.springframework.beans.PropertyMatches
                /**
                 * Return the name of the requested property.
                 */
                // @ts-ignore
                getPropertyName(): java.lang.String
                /**
                 * Return the calculated possible matches.
                 */
                // @ts-ignore
                getPossibleMatches(): java.lang.String[]
                /**
                 * Build an error message for the given invalid property name,
                 * indicating the possible property matches.
                 */
                // @ts-ignore
                abstract buildErrorMessage(): java.lang.String
                // @ts-ignore
                appendHintMessage(msg: java.lang.StringBuilder): void
            }
        }
    }
}
