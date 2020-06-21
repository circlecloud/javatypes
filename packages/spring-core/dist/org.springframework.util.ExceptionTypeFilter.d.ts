declare namespace org {
    namespace springframework {
        namespace util {
            /**
             * An {@link InstanceFilter} implementation that handles exception types. A type
             * will match against a given candidate if it is assignable to that candidate.
             * @author Stephane Nicoll
             * @since 4.1
             */
            // @ts-ignore
            class ExceptionTypeFilter extends org.springframework.util.InstanceFilter<java.lang.Class<any>> {
                // @ts-ignore
                constructor(includes: java.util.Collection<any> | Array<any>, excludes: java.util.Collection<any> | Array<any>, matchIfEmpty: boolean)
                // @ts-ignore
                match(instance: java.lang.Class<any>, candidate: java.lang.Class<any>): boolean
            }
        }
    }
}
