declare namespace javax {
    namespace servlet {
        /**
         * @since Servlet 3.0
         */
        // @ts-ignore
        class SessionTrackingMode extends java.lang.Enum<javax.servlet.SessionTrackingMode> {
            // @ts-ignore
            readonly COOKIE: javax.servlet.SessionTrackingMode
            // @ts-ignore
            readonly URL: javax.servlet.SessionTrackingMode
            // @ts-ignore
            readonly SSL: javax.servlet.SessionTrackingMode
            // @ts-ignore
            values(): javax.servlet.SessionTrackingMode[]
            // @ts-ignore
            valueOf(name: java.lang.String | string): javax.servlet.SessionTrackingMode
        }
    }
}
