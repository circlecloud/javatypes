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
            class ExceptionTypeFilter extends org.springframework.util.InstanceFilter<java.lang.Class<? extends java.lang.Throwable>> {
                // @ts-ignore
                constructor(includes: Array<java.lang.Class<java.lang.Throwable>>, excludes: Array<java.lang.Class<java.lang.Throwable>>, matchIfEmpty: boolean)
                // @ts-ignore
                match(instance: java.lang.Class<java.lang.Throwable>, candidate: java.lang.Class<java.lang.Throwable>): boolean
            }
        }
    }
}
