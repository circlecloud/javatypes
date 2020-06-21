declare namespace org {
    namespace springframework {
        namespace jmx {
            namespace support {
                /**
                 * Indicates registration behavior when attempting to register an MBean that already
                 * exists.
                 * @author Phillip Webb
                 * @author Chris Beams
                 * @since 3.2
                 */
                // @ts-ignore
                class RegistrationPolicy extends java.lang.Enum<org.springframework.jmx.support.RegistrationPolicy> {
                    /**
                     * Registration should fail when attempting to register an MBean under a name that
                     * already exists.
                     */
                    // @ts-ignore
                    readonly FAIL_ON_EXISTING: org.springframework.jmx.support.RegistrationPolicy
                    /**
                     * Registration should ignore the affected MBean when attempting to register an MBean
                     * under a name that already exists.
                     */
                    // @ts-ignore
                    readonly IGNORE_EXISTING: org.springframework.jmx.support.RegistrationPolicy
                    /**
                     * Registration should replace the affected MBean when attempting to register an MBean
                     * under a name that already exists.
                     */
                    // @ts-ignore
                    readonly REPLACE_EXISTING: org.springframework.jmx.support.RegistrationPolicy
                    // @ts-ignore
                    values(): org.springframework.jmx.support.RegistrationPolicy[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): org.springframework.jmx.support.RegistrationPolicy
                }
            }
        }
    }
}
