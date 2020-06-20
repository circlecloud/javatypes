declare namespace org {
    namespace springframework {
        namespace lang {
            /**
             * Indicates that the annotated element uses the Http Server available in
             * {@code com.sun.*} classes, which is only available on a Sun/Oracle JVM.
             * @author Stephane Nicoll
             * @since 4.1
             * @deprecated as of 5.1, along with Spring's Sun HTTP Server support classes
             */
            // @ts-ignore
            class UsesSunHttpServer implements java.lang.annotation.Annotation {
            }
        }
    }
}
