declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * PasswordCallback Interface
                 * @author Mladen Turk
                 */
                // @ts-ignore
                interface PasswordCallback {
                    /**
                     * Called when the password is required
                     * @param prompt Password prompt
                     * @return Valid password or null
                     */
                    // @ts-ignore
                    callback(prompt: java.lang.String | string): string
                }
            }
        }
    }
}
