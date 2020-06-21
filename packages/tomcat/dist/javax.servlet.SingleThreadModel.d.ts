declare namespace javax {
    namespace servlet {
        /**
         * Ensures that servlets handle only one request at a time. This interface has
         * no methods.
         * <p>
         * If a servlet implements this interface, you are <i>guaranteed</i> that no two
         * threads will execute concurrently in the servlet's <code>service</code>
         * method. The servlet container can make this guarantee by synchronizing access
         * to a single instance of the servlet, or by maintaining a pool of servlet
         * instances and dispatching each new request to a free servlet.
         * <p>
         * Note that SingleThreadModel does not solve all thread safety issues. For
         * example, session attributes and static variables can still be accessed by
         * multiple requests on multiple threads at the same time, even when
         * SingleThreadModel servlets are used. It is recommended that a developer take
         * other means to resolve those issues instead of implementing this interface,
         * such as avoiding the usage of an instance variable or synchronizing the block
         * of the code accessing those resources. This interface is deprecated in
         * Servlet API version 2.4.
         * @deprecated As of Java Servlet API 2.4, with no direct replacement.
         */
        // @ts-ignore
        interface SingleThreadModel {
        }
    }
}
