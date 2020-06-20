declare namespace com {
    namespace sun {
        namespace javadoc {
            /**
             * Represents a wildcard type argument.
             * Examples include:    <pre>
             * {@code <?>}
             * {@code <? extends E>}
             * {@code <? super T>}
             * </pre>
             * A wildcard type can have explicit <i>extends</i> bounds
             * or explicit <i>super</i> bounds or neither, but not both.
             * @author Scott Seligman
             * @since 1.5
             */
            // @ts-ignore
            interface WildcardType extends com.sun.javadoc.Type {
                /**
                 * Return the upper bounds of this wildcard type argument
                 * as given by the <i>extends</i> clause.
                 * Return an empty array if no such bounds are explicitly given.
                 * @return the extends bounds of this wildcard type argument
                 */
                // @ts-ignore
                extendsBounds(): com.sun.javadoc.Type[]
                /**
                 * Return the lower bounds of this wildcard type argument
                 * as given by the <i>super</i> clause.
                 * Return an empty array if no such bounds are explicitly given.
                 * @return the super bounds of this wildcard type argument
                 */
                // @ts-ignore
                superBounds(): com.sun.javadoc.Type[]
            }
        }
    }
}
