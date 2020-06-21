declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * A simple instance filter that checks if a given instance match based on
             * a collection of includes and excludes element.
             * <p>Subclasses may want to override {@link #match(Object, Object)} to provide
             * a custom matching algorithm.
             * @author Stephane Nicoll
             * @since 4.1
             * @param <T> the instance type
             */
            // @ts-ignore
            class InstanceFilter<T> extends java.lang.Object {
                /**
                 * Create a new instance based on includes/excludes collections.
                 * <p>A particular element will match if it "matches" the one of the element in the
                 * includes list and  does not match one of the element in the excludes list.
                 * <p>Subclasses may redefine what matching means. By default, an element match with
                 * another if it is equals according to {@link Object#equals(Object)}
                 * <p>If both collections are empty, {@code matchIfEmpty} defines if
                 * an element matches or not.
                 * @param includes the collection of includes
                 * @param excludes the collection of excludes
                 * @param matchIfEmpty the matching result if both the includes and the excludes
                 *  collections are empty
                 */
                // @ts-ignore
                constructor(includes: java.util.Collection<any> | Array<any>, excludes: java.util.Collection<any> | Array<any>, matchIfEmpty: boolean)
                /**
                 * Determine if the specified {code instance} matches this filter.
                 */
                // @ts-ignore
                public match(instance: T): boolean
                /**
                 * Determine if the specified {@code instance} is equal to the
                 * specified {@code candidate}.
                 * @param instance the instance to handle
                 * @param candidate a candidate defined by this filter
                 * @return {#code true} if the instance matches the candidate
                 */
                // @ts-ignore
                match(instance: T, candidate: T): boolean
                /**
                 * Determine if the specified {@code instance} matches one of the candidates.
                 * <p>If the candidates collection is {@code null}, returns {@code false}.
                 * @param instance the instance to check
                 * @param candidates a list of candidates
                 * @return {#code true} if the instance match or the candidates collection is null
                 */
                // @ts-ignore
                match(instance: T, candidates: java.util.Collection<any> | Array<any>): boolean
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
